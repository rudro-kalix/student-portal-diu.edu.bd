(function(){

 const semesterCatalog = window.__SEMESTER_CATALOG__ || {};

 const gradeScale = [
   [4,'A+'],
   [3.75,'A'],
   [3.5,'A-'],
   [3.25,'B+'],
   [3,'B'],
   [2.75,'B-'],
   [2.5,'C+'],
   [2.25,'C'],
   [2,'D'],
   [0,'F']
 ];

 const semesterCodeSequence = [
   '252', // 1st Semester
   '253', // 2nd Semester
   '261', // 3rd Semester
   '262', // 4th Semester
   '263', // 5th Semester
   '264', // 6th Semester
   '271', // 7th Semester
   '272', // 8th Semester
   '273', // 9th Semester
   '274', // 10th Semester
   '281', // 11th Semester
   '282'  // 12th Semester
 ];

 const codeLabels = {
   252:'1st Semester',
   253:'2nd Semester',
   261:'3rd Semester',
   262:'4th Semester',
   263:'5th Semester',
   264:'6th Semester',
   271:'7th Semester',
   272:'8th Semester',
   273:'9th Semester',
   274:'10th Semester',
   281:'11th Semester',
   282:'12th Semester'
 };

 const commonNamesByCode = codeLabels;

 const btn = document.getElementById('offline-settings-btn');
 const modal = document.getElementById('offline-settings-modal');
 const key = 'offline_custom_settings';

 function load(){
   try{
     return JSON.parse(localStorage.getItem(key)||'{}');
   }catch(e){
     return {};
   }
 }

 function safeJSON(v,fb){
   try{
     return JSON.parse(v);
   }catch(e){
     return fb;
   }
 }

 function gradeLetter(gp){
   for(const [p,l] of gradeScale){
     if(gp >= p) return l;
   }
   return 'F';
 }

 function chooseGp(target){

   let best = 0;
   let min = 999;

   for(const [gp] of gradeScale){

     const d = Math.abs(target-gp);

     if(d < min){
       min = d;
       best = gp;
     }
   }

   return best;
 }

 function distributeSemesterGrades(courses,targetSgpa){

   const cleanTarget = Math.max(
     0,
     Math.min(4, Number(targetSgpa)||0)
   );

   const items = (courses||[]).map(c=>({
     course:c,
     credit:Number(c.c)||0,
     gp:chooseGp(cleanTarget)
   }));

   const totalCredits = items.reduce(
     (sum,it)=>sum+it.credit,
     0
   );

   if(!totalCredits) return items;

   const getCurrent = ()=>(
     items.reduce((sum,it)=>sum+(it.gp*it.credit),0)
     / totalCredits
   );

   const sortedScale = [...gradeScale]
     .map(([gp])=>gp)
     .sort((a,b)=>b-a);

   const maxSteps = 4000;
   let steps = 0;

   while(steps < maxSteps){

     steps++;

     const current = getCurrent();
     const diff = cleanTarget-current;

     if(Math.abs(diff)<=0.005) break;

     let bestIdx = -1;
     let bestGp = null;
     let bestDelta = Infinity;

     for(let i=0;i<items.length;i++){

       const now = items[i].gp;

       const next = diff>0
         ? sortedScale[sortedScale.indexOf(now)-1]
         : sortedScale[sortedScale.indexOf(now)+1];

       if(next===undefined) continue;

       const candidate =
         current +
         ((next-now)*items[i].credit/totalCredits);

       const delta = Math.abs(cleanTarget-candidate);

       if(delta < bestDelta){
         bestDelta = delta;
         bestIdx = i;
         bestGp = next;
       }
     }

     if(bestIdx===-1) break;

     items[bestIdx].gp = bestGp;
   }

   return items;
 }

 function semesterCodeByIndex(i){
   return semesterCodeSequence[i-1] || String(252+i);
 }

 function semesterName(i){
   const code = semesterCodeByIndex(i);
   return codeLabels[code] || `${i}th Semester`;
 }

 function buildSemesterOptions(){

   st_semesters.innerHTML='';

   for(let i=1;i<=12;i++){

     const o = document.createElement('option');

     o.value = String(i);

     const code = semesterCodeByIndex(i);

     o.textContent =
       `${semesterName(i)} (${code})`;

     st_semesters.appendChild(o);
   }
 }

 function renderSubjects(){

   const selected = [...st_semesters.selectedOptions]
     .map(o=>Number(o.value))
     .sort((a,b)=>a-b);

   const fallback = parseFloat(st_target.value||'0');

   st_sgpa_inputs.innerHTML='';

   const sgpaMap = {};

   selected.forEach(sem=>{

     const wrap = document.createElement('div');

     const code = semesterCodeByIndex(sem);

     const key = `st_sgpa_${sem}`;

     const saved = parseFloat(
       st_sgpa_inputs.dataset[key]||''
     );

     const v = Number.isFinite(saved)
       ? saved
       : (fallback||0);

     sgpaMap[sem]=v;

     wrap.innerHTML = `
       <label style='display:block;font-size:12px;color:#334'>
         ${semesterName(sem)} (${code}) SGPA
       </label>

       <input
         data-sem='${sem}'
         type='number'
         min='0'
         max='4'
         step='0.01'
         value='${v?v.toFixed(2):''}'
         style='width:100%;padding:8px'
       />
     `;

     st_sgpa_inputs.appendChild(wrap);
   });

   st_sgpa_inputs
     .querySelectorAll('input[data-sem]')
     .forEach(inp=>{

       inp.addEventListener('input',()=>{

         st_sgpa_inputs.dataset[
           `st_sgpa_${inp.dataset.sem}`
         ] = inp.value;

         renderSubjects();
       });
     });

   const subData = [];

   selected.forEach(sem=>{

     const sg = parseFloat(
       st_sgpa_inputs.dataset[
         `st_sgpa_${sem}`
       ] || sgpaMap[sem] || 0
     );

     const distributed =
       distributeSemesterGrades(
         semesterCatalog[String(sem)] || [],
         sg || 0
       );

     distributed.forEach(({course,gp})=>{

       const semCode = semesterCodeByIndex(sem);

       subData.push({

         courseCode:
           `SE-${Math.floor(100 + Math.random()*900)}`,

         courseTitle: course.n,

         credit: Number(course.c),

         gradeLetter: gradeLetter(gp),

         gradePoint: Number(gp),

         status: 'Regular',

         semester: codeLabels[semCode],

         semesterCode: String(semCode)
       });
     });
   });

   const totalCredits = subData.reduce(
     (a,b)=>a+b.credit,
     0
   );

   st_subject_summary.textContent =
     `Selected Semesters: ${selected.length} | `+
     `Total Subjects: ${subData.length} | `+
     `Total Credits: ${totalCredits}`;

   st_sub.value = JSON.stringify(
     subData,
     null,
     2
   );

   st_sem.value = JSON.stringify(

     selected.map(s=>{

       const code = semesterCodeByIndex(s);

       const sg = parseFloat(
         st_sgpa_inputs.dataset[
           `st_sgpa_${s}`
         ] || fallback || 0
       );

       return {

         semesterCode: String(code),

         semester: codeLabels[code],

         cgpa: Number(sg || 0)
       };
     }),

     null,
     2
   );
 }

 function fill(){

   const d = load();

   st_name.value = d.name || '';
   st_reg.value = d.registrationId || '';
   st_id.value = d.studentId || '';

   st_pay.value = JSON.stringify(
     d.paymentSummary || {
       totalDebit:236701,
       totalCredit:236742,
       totalOther:0
     },
     null,
     2
   );

   st_sem.value = JSON.stringify(
     d.resultGraph || [],
     null,
     2
   );

   st_sub.value = JSON.stringify(
     d.courseResults || [],
     null,
     2
   );

   st_target.value = d.targetGpa || '';

   Object.keys(st_sgpa_inputs.dataset)
     .forEach(k=>delete st_sgpa_inputs.dataset[k]);

   st_error.style.display='none';
   st_error.textContent='';
 }

 buildSemesterOptions();

 btn.onclick=function(){
   modal.style.display='block';
   fill();
   renderSubjects();
 };

 st_close.onclick=function(){
   modal.style.display='none';
 };

 st_save.onclick=function(){

   try{

     const d = {

       name: st_name.value.trim(),

       registrationId:
         st_reg.value.trim(),

       studentId:
         st_id.value.trim(),

       paymentSummary:
         safeJSON(st_pay.value,{}),

       resultGraph:
         safeJSON(st_sem.value,[]),

       courseResults:
         safeJSON(st_sub.value,[]),

       targetGpa:
         parseFloat(st_target.value)||null
     };

     localStorage.setItem(
       key,
       JSON.stringify(d)
     );

     alert(
       'Saved. Reload dashboard/result page.'
     );

     modal.style.display='none';

   }catch(err){

     st_error.textContent =
       'Invalid JSON detected.';

     st_error.style.display='block';
   }
 };

 st_autofill.onclick = renderSubjects;

 st_fill_payment.onclick=function(){

   st_pay.value = JSON.stringify({
     totalDebit:236701,
     totalCredit:236742,
     totalOther:0
   },null,2);
 };

 st_semesters.addEventListener(
   'change',
   renderSubjects
 );

 st_target.addEventListener(
   'input',
   renderSubjects
 );

})();
