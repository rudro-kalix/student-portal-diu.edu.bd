(function(){
  const catalog={1:[['Computer Fundamentals',3],['Computer Fundamentals Lab',1],['Introduction to Software Engineering',3],['English Reading, Writing & Public Speaking / English I',3],['Bangladesh Studies',3]],2:[['Math-I (Calculus & Geometry / Mathematics I)',3],['Structured Programming',3],['Structured Programming Lab',1],['Physics Mechanics, Electromagnetism & Waves / Physics I',3],['Software Requirements Specifications & Analysis',3]],3:[['Discrete Mathematics',3],['Digital Electronics & Logic Design',3],['Math-II (Linear Algebra & Fourier Analysis / Mathematics II)',3],['Data Structure',3],['Data Structure Lab',1]],4:[['Software Development Capstone Project',3],['Database System',3],['Database System Lab',1],['Art of Living',3],['Computer Architecture',3]],5:[['Probability & Statistics / Software Statistical I',3],['Algorithms Design & Analysis',3],['Algorithms Design & Analysis Lab',1],['Object Oriented Programming',3],['Object Oriented Programming Lab',1],['Software Project Management & Documentation',3]],6:[['Desktop and Web Programming',3],['Desktop and Web Programming Lab',1],['System Analysis & Design Capstone Project',3],['Principles of Accounting, Business & Economics',3],['Operating Systems & System Programming',3],['Operating Systems & System Programming Lab',1]],7:[['Data Communication & Computer Networking',3],['Data Communication & Computer Networking Lab',1],['Theory of Computing',3],['Design Pattern',3],['Software Quality Assurance & Testing',3],['Software Quality Assurance & Testing Lab',1]],8:[['Software Engineering Professional Ethics',3],['Software Engineering Web Application',3],['Software Engineering Web Application Lab',1],['Software Architecture & Design',3],['Information System Security',3]],9:[['Guided Elective-IV (Non Major Only)',3],['Introduction to Robotics',3],['Guided Elective-I',3],['Software Engineering Design Capstone Project',3],['Artificial Intelligence',3],['Artificial Intelligence Lab',1],['Introduction to Machine Learning',3]],10:[['Guided Elective-IV Non Major Only',3],['Management Information System',3],['Guided Elective-II',3],['Final Year Project / Thesis / Internship',6]],11:[['Guided Elective-IV Non Major Only',3],['Research Methodology & Scientific Writing',3],['Numerical Analysis',3],['Human Computer Interaction',3]],12:[['Guided Elective-IV Non Major Only',3],['Business Analysis & Communication',3],['Employability Skill Non Major Only',3],['Employability 360',3],['Robotics & Embedded Systems Major Capstone Project',6],['Cyber Security Major Capstone Project',6],['Data Science Major Capstone Project',6]]};
  const gs=[['A+',4],['A',3.75],['A-',3.5],['B+',3.25],['B',3],['B-',2.75],['C+',2.5],['C',2.25],['D',2],['F',0]];
  function g(v){return gs.find(x=>v>=x[1])[0]}
  function boot(){
    const modal=document.getElementById('offline-settings-modal'); if(!modal||document.getElementById('st_semester_planner')) return;
    const stSub=document.getElementById('st_sub'), stTarget=document.getElementById('st_target'); if(!stSub||!stTarget) return;
    const d=document.createElement('details'); d.id='st_semester_planner'; d.open=true; d.style.marginTop='10px';
    d.innerHTML=`<summary style='cursor:pointer;font-weight:600'>Semester Planner (Easy Input)</summary>
      <div style='margin-top:8px'>
        <label>Common Semester Code</label>
        <select id='sp_code' style='width:100%;padding:8px'><option value=''>Select</option><option value='252'>Summer 2025 (252)</option><option value='253'>Fall 2025 (253)</option><option value='261'>Spring 2026 (261)</option></select>
        <label style='margin-top:8px;display:block'>Individual Semesters</label>
        <select id='sp_sem' multiple size='6' style='width:100%;padding:8px'></select>
        <div style='display:flex;gap:8px;margin-top:8px'><button type='button' id='sp_all'>Select all</button><button type='button' id='sp_clear'>Clear</button><button type='button' id='sp_fill'>Apply to Subject Results JSON</button></div>
        <div id='sp_sum' style='margin-top:8px;color:#444'></div>
      </div>`;
    modal.querySelector('.settings-modal-content').insertBefore(d, modal.querySelector('#st_error'));
    const sem=d.querySelector('#sp_sem'),sum=d.querySelector('#sp_sum');
    for(let i=1;i<=12;i++) sem.insertAdjacentHTML('beforeend',`<option value='${i}'>${i} Semester</option>`);
    function rows(){const s=[...sem.selectedOptions].map(o=>+o.value); const out=[]; s.forEach(k=>(catalog[k]||[]).forEach(([name,credit],idx)=>out.push({courseCode:`SEM${k}-${idx+1}`,courseTitle:name,credit,semester:k,status:'Regular'}))); return out;}
    function refresh(){const arr=rows(); const t=parseFloat(stTarget.value||'0'); let cr=0; arr.forEach(x=>{cr+=x.credit; x.gradePoint=t||0; x.gradeLetter=t?g(t):'-';}); sum.innerHTML=`Subjects: <b>${arr.length}</b> | Credits: <b>${cr}</b> | Target SGPA: <b>${t||'-'}</b>`; return arr;}
    sem.onchange=refresh; stTarget.addEventListener('input',refresh);
    d.querySelector('#sp_all').onclick=()=>{[...sem.options].forEach(o=>o.selected=true);refresh();};
    d.querySelector('#sp_clear').onclick=()=>{[...sem.options].forEach(o=>o.selected=false);refresh();};
    d.querySelector('#sp_fill').onclick=()=>{stSub.value=JSON.stringify(refresh(),null,2);};
  }
  window.addEventListener('load',boot);
})();
