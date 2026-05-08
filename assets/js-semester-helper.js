(function(){
  const semesterCatalog={"1":[{n:"Computer Fundamentals",c:3},{n:"Computer Fundamentals Lab",c:1},{n:"Introduction to Software Engineering",c:3},{n:"English Reading, Writing & Public Speaking / English I",c:3},{n:"Bangladesh Studies",c:3}],"2":[{n:"Math-I (Calculus & Geometry / Mathematics I)",c:3},{n:"Structured Programming",c:3},{n:"Structured Programming Lab",c:1},{n:"Physics Mechanics, Electromagnetism & Waves / Physics I",c:3},{n:"Software Requirements Specifications & Analysis",c:3}],"3":[{n:"Discrete Mathematics",c:3},{n:"Digital Electronics & Logic Design",c:3},{n:"Math-II (Linear Algebra & Fourier Analysis / Mathematics II)",c:3},{n:"Data Structure",c:3},{n:"Data Structure Lab",c:1}],"4":[{n:"Software Development Capstone Project",c:3},{n:"Database System",c:3},{n:"Database System Lab",c:1},{n:"Art of Living",c:3},{n:"Computer Architecture",c:3}],"5":[{n:"Probability & Statistics / Software Statistical I",c:3},{n:"Algorithms Design & Analysis",c:3},{n:"Algorithms Design & Analysis Lab",c:1},{n:"Object Oriented Programming",c:3},{n:"Object Oriented Programming Lab",c:1},{n:"Software Project Management & Documentation",c:3}],"6":[{n:"Desktop and Web Programming",c:3},{n:"Desktop and Web Programming Lab",c:1},{n:"System Analysis & Design Capstone Project",c:3},{n:"Principles of Accounting, Business & Economics",c:3},{n:"Operating Systems & System Programming",c:3},{n:"Operating Systems & System Programming Lab",c:1}],"7":[{n:"Data Communication & Computer Networking",c:3},{n:"Data Communication & Computer Networking Lab",c:1},{n:"Theory of Computing",c:3},{n:"Design Pattern",c:3},{n:"Software Quality Assurance & Testing",c:3},{n:"Software Quality Assurance & Testing Lab",c:1}],"8":[{n:"Software Engineering Professional Ethics",c:3},{n:"Software Engineering Web Application",c:3},{n:"Software Engineering Web Application Lab",c:1},{n:"Software Architecture & Design",c:3},{n:"Information System Security",c:3}],"9":[{n:"Guided Elective-IV (Non Major Only)",c:3},{n:"Introduction to Robotics",c:3},{n:"Guided Elective-I",c:3},{n:"Software Engineering Design Capstone Project",c:3},{n:"Artificial Intelligence",c:3},{n:"Artificial Intelligence Lab",c:1},{n:"Introduction to Machine Learning",c:3}],"10":[{n:"Guided Elective-IV Non Major Only",c:3},{n:"Management Information System",c:3},{n:"Guided Elective-II",c:3},{n:"Final Year Project / Thesis / Internship",c:6}],"11":[{n:"Guided Elective-IV Non Major Only",c:3},{n:"Research Methodology & Scientific Writing",c:3},{n:"Numerical Analysis",c:3},{n:"Human Computer Interaction",c:3}],"12":[{n:"Guided Elective-IV Non Major Only",c:3},{n:"Business Analysis & Communication",c:3},{n:"Employability Skill Non Major Only",c:3},{n:"Employability 360",c:3},{n:"Robotics & Embedded Systems Major Capstone Project",c:6},{n:"Cyber Security Major Capstone Project",c:6},{n:"Data Science Major Capstone Project",c:6}]};
  const gradeScale=[['A+',4],['A',3.75],['A-',3.5],['B+',3.25],['B',3],['B-',2.75],['C+',2.5],['C',2.25],['D',2],['F',0]];
  const suffix=(i)=>i===1?'st':i===2?'nd':i===3?'rd':'th';
  function distribute(target,subjects){const total=subjects.reduce((s,x)=>s+x.c,0);let points=target*total;return subjects.map(sub=>{let pick='F',pv=0;for(const[g,v]of gradeScale){if(points-v*sub.c>=-0.25){pick=g;pv=v;break;}}points-=pv*sub.c;return{...sub,grade:pick};});}
  function boot(){
    if(document.getElementById('sp-launcher')) return;
    const host=document.createElement('div');
    host.innerHTML=`<style>
      #sp-launcher{position:fixed;right:16px;bottom:16px;z-index:9999;background:#2d6cdf;color:#fff;border:none;padding:10px 14px;border-radius:24px;cursor:pointer;font-weight:600}
      #sp-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9998}
      #sp-card{background:#fff;max-width:980px;max-height:90vh;overflow:auto;margin:4vh auto;padding:16px;border-radius:10px;font-family:Segoe UI,sans-serif}
      #sp-card .row{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:10px} #sp-card label{font-weight:600;display:block;margin-bottom:4px}
      #sp-card select,#sp-card input{padding:8px;border:1px solid #ccc;border-radius:6px;min-width:230px}
      #sp-card table{width:100%;border-collapse:collapse;margin-top:10px} #sp-card th,#sp-card td{border:1px solid #eee;padding:8px;text-align:left}
      #sp-card .btn{background:#f4f4f4;border:1px solid #ddd;padding:8px 10px;border-radius:6px;cursor:pointer}
    </style>
    <button id='sp-launcher'>Open Semester Planner</button>
    <div id='sp-modal'><div id='sp-card'>
      <div style='display:flex;justify-content:space-between;align-items:center'><h3 style='margin:0'>Semester Planner (Easy Input)</h3><button class='btn' id='sp-close'>Close</button></div>
      <div class='row'>
        <div><label>Common Semester Code</label><select id='commonCode'><option value=''>Select</option><option value='252'>Summer 2025 (252)</option><option value='253'>Fall 2025 (253)</option><option value='261'>Spring 2026 (261)</option></select></div>
        <div><label>Individual Semesters</label><select id='semesters' multiple size='6'></select><div style='font-size:12px;color:#666'>Ctrl/Cmd for multiple</div></div>
        <div><label>Target SGPA</label><input id='targetSgpa' type='number' min='0' max='4' step='0.01' placeholder='e.g. 3.99'></div>
      </div>
      <div class='row'><button class='btn' id='select-all'>Select all semesters</button><button class='btn' id='clear-all'>Clear selection</button></div>
      <div id='sum'></div>
      <table><thead><tr><th>Semester</th><th>Subject</th><th>Credit</th><th>Suggested Grade</th></tr></thead><tbody id='out'></tbody></table>
    </div></div>`;
    document.body.appendChild(host);
    const modal=host.querySelector('#sp-modal'),openBtn=host.querySelector('#sp-launcher'),closeBtn=host.querySelector('#sp-close');
    const sem=host.querySelector('#semesters'),sgpa=host.querySelector('#targetSgpa'),sum=host.querySelector('#sum'),out=host.querySelector('#out');
    for(let i=1;i<=12;i++) sem.insertAdjacentHTML('beforeend',`<option value='${i}'>${i}${suffix(i)} Semester</option>`);
    openBtn.onclick=()=>modal.style.display='block'; closeBtn.onclick=()=>modal.style.display='none'; modal.onclick=(e)=>{if(e.target===modal)modal.style.display='none';};
    host.querySelector('#select-all').onclick=()=>{[...sem.options].forEach(o=>o.selected=true);render();};
    host.querySelector('#clear-all').onclick=()=>{[...sem.options].forEach(o=>o.selected=false);render();};
    function render(){const selected=[...sem.selectedOptions].map(o=>o.value);const target=parseFloat(sgpa.value||'0');out.innerHTML='';const subs=[];selected.forEach(s=>(semesterCatalog[s]||[]).forEach(x=>subs.push({semester:s,...x})));if(!subs.length){sum.innerHTML='';return;}const rows=target>0?distribute(target,subs):subs.map(s=>({...s,grade:'-'}));let credits=0;rows.forEach(r=>{credits+=r.c;out.insertAdjacentHTML('beforeend',`<tr><td>${r.semester}</td><td>${r.n}</td><td>${r.c}</td><td>${r.grade}</td></tr>`)});sum.innerHTML=`<strong>Total Subjects:</strong> ${rows.length} | <strong>Total Credits:</strong> ${credits} | <strong>Target SGPA:</strong> ${target||'-'}`;}
    sem.onchange=render; sgpa.oninput=render;
  }
  window.addEventListener('load',boot);
})();
