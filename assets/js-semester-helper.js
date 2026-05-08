(function(){
  const semesterCatalog = {
    "1": [{n:"Computer Fundamentals",c:3},{n:"Computer Fundamentals Lab",c:1},{n:"Introduction to Software Engineering",c:3},{n:"English Reading, Writing & Public Speaking / English I",c:3},{n:"Bangladesh Studies",c:3}],
    "2": [{n:"Math-I (Calculus & Geometry / Mathematics I)",c:3},{n:"Structured Programming",c:3},{n:"Structured Programming Lab",c:1},{n:"Physics Mechanics, Electromagnetism & Waves / Physics I",c:3},{n:"Software Requirements Specifications & Analysis",c:3}],
    "3": [{n:"Discrete Mathematics",c:3},{n:"Digital Electronics & Logic Design",c:3},{n:"Math-II (Linear Algebra & Fourier Analysis / Mathematics II)",c:3},{n:"Data Structure",c:3},{n:"Data Structure Lab",c:1}],
    "4": [{n:"Software Development Capstone Project",c:3},{n:"Database System",c:3},{n:"Database System Lab",c:1},{n:"Art of Living",c:3},{n:"Computer Architecture",c:3}],
    "5": [{n:"Probability & Statistics / Software Statistical I",c:3},{n:"Algorithms Design & Analysis",c:3},{n:"Algorithms Design & Analysis Lab",c:1},{n:"Object Oriented Programming",c:3},{n:"Object Oriented Programming Lab",c:1},{n:"Software Project Management & Documentation",c:3}],
    "6": [{n:"Desktop and Web Programming",c:3},{n:"Desktop and Web Programming Lab",c:1},{n:"System Analysis & Design Capstone Project",c:3},{n:"Principles of Accounting, Business & Economics",c:3},{n:"Operating Systems & System Programming",c:3},{n:"Operating Systems & System Programming Lab",c:1}],
    "7": [{n:"Data Communication & Computer Networking",c:3},{n:"Data Communication & Computer Networking Lab",c:1},{n:"Theory of Computing",c:3},{n:"Design Pattern",c:3},{n:"Software Quality Assurance & Testing",c:3},{n:"Software Quality Assurance & Testing Lab",c:1}],
    "8": [{n:"Software Engineering Professional Ethics",c:3},{n:"Software Engineering Web Application",c:3},{n:"Software Engineering Web Application Lab",c:1},{n:"Software Architecture & Design",c:3},{n:"Information System Security",c:3}],
    "9": [{n:"Guided Elective-IV (Non Major Only)",c:3},{n:"Introduction to Robotics",c:3},{n:"Guided Elective-I",c:3},{n:"Software Engineering Design Capstone Project",c:3},{n:"Artificial Intelligence",c:3},{n:"Artificial Intelligence Lab",c:1},{n:"Introduction to Machine Learning",c:3}],
    "10":[{n:"Guided Elective-IV Non Major Only",c:3},{n:"Management Information System",c:3},{n:"Guided Elective-II",c:3},{n:"Final Year Project / Thesis / Internship",c:6}],
    "11":[{n:"Guided Elective-IV Non Major Only",c:3},{n:"Research Methodology & Scientific Writing",c:3},{n:"Numerical Analysis",c:3},{n:"Human Computer Interaction",c:3}],
    "12":[{n:"Guided Elective-IV Non Major Only",c:3},{n:"Business Analysis & Communication",c:3},{n:"Employability Skill Non Major Only",c:3},{n:"Employability 360",c:3},{n:"Robotics & Embedded Systems Major Capstone Project",c:6},{n:"Cyber Security Major Capstone Project",c:6},{n:"Data Science Major Capstone Project",c:6}]
  };
  const gradeScale=[['A+',4],['A',3.75],['A-',3.5],['B+',3.25],['B',3],['B-',2.75],['C+',2.5],['C',2.25],['D',2],['F',0]];

  function distribute(target, subjects){
    const total = subjects.reduce((s,x)=>s+x.c,0);
    let points = target * total;
    return subjects.map(sub=>{
      let pick='F',pv=0;
      for(const [g,v] of gradeScale){
        if(points - v*sub.c >= -0.25){ pick=g; pv=v; break; }
      }
      points -= pv*sub.c;
      return {...sub, grade: pick, gp: pv};
    });
  }

  function boot(){
    if(document.getElementById('semester-planner-ui')) return;
    const wrap=document.createElement('div');
    wrap.id='semester-planner-ui';
    wrap.innerHTML=`<style>
      #semester-planner-ui{background:#fff;border:1px solid #ddd;border-radius:8px;padding:16px;margin:16px;box-shadow:0 2px 8px rgba(0,0,0,.08);font-family:Segoe UI,sans-serif}
      #semester-planner-ui .row{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:10px}
      #semester-planner-ui label{font-weight:600;display:block;margin-bottom:4px}
      #semester-planner-ui select,#semester-planner-ui input{padding:8px;border:1px solid #ccc;border-radius:6px;min-width:220px}
      #semester-planner-ui table{width:100%;border-collapse:collapse;margin-top:10px}
      #semester-planner-ui th,#semester-planner-ui td{border:1px solid #eee;padding:8px;text-align:left}
      #semester-planner-ui .muted{color:#666;font-size:12px}
    </style>
    <h3>Semester Planner (Easy Input)</h3>
    <div class='row'>
      <div><label>Common Semester Code</label><select id='commonCode'><option value=''>Select</option><option value='252'>Summer 2025 (252)</option><option value='253'>Fall 2025 (253)</option><option value='261'>Spring 2026 (261)</option></select></div>
      <div><label>Individual Semesters</label><select id='semesters' multiple size='5'></select><div class='muted'>Hold Ctrl/Cmd to select multiple</div></div>
      <div><label>Target SGPA</label><input id='targetSgpa' type='number' min='0' max='4' step='0.01' placeholder='e.g. 3.99'></div>
    </div>
    <div id='sum'></div>
    <table><thead><tr><th>Semester</th><th>Subject</th><th>Credit</th><th>Suggested Grade</th></tr></thead><tbody id='out'></tbody></table>`;
    document.body.prepend(wrap);

    const semSelect=wrap.querySelector('#semesters');
    for(let i=1;i<=12;i++) semSelect.insertAdjacentHTML('beforeend',`<option value='${i}'>${i}${['st','nd','rd'][i-1]||'th'} Semester</option>`);

    function render(){
      const selected=[...semSelect.selectedOptions].map(o=>o.value);
      const target=parseFloat(wrap.querySelector('#targetSgpa').value||'0');
      const tbody=wrap.querySelector('#out'); tbody.innerHTML='';
      const subjects=[];
      selected.forEach(s=> (semesterCatalog[s]||[]).forEach(x=>subjects.push({semester:s,...x})));
      if(!subjects.length) return;
      const withGrades = target>0 ? distribute(target,subjects): subjects.map(s=>({...s,grade:'-',gp:0}));
      let credits=0; withGrades.forEach(r=>{credits+=r.c;tbody.insertAdjacentHTML('beforeend',`<tr><td>${r.semester}</td><td>${r.n}</td><td>${r.c}</td><td>${r.grade}</td></tr>`)});
      wrap.querySelector('#sum').innerHTML=`<strong>Total Subjects:</strong> ${withGrades.length} | <strong>Total Credits:</strong> ${credits} | <strong>Target SGPA:</strong> ${target||'-'}`;
    }
    semSelect.addEventListener('change',render);
    wrap.querySelector('#targetSgpa').addEventListener('input',render);
    wrap.querySelector('#commonCode').addEventListener('change',render);
  }
  window.addEventListener('load',boot);
})();
