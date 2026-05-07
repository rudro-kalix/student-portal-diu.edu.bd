(function () {
  "use strict";

  window.__OFFLINE_PORTAL__ = true;

  if (window.__OFFLINE_ENTRY_ROUTE) {
    if (!localStorage.getItem("authToken")) {
      location.replace("index.html#/");
      return;
    }
    var normalizedRoute = String(window.__OFFLINE_ENTRY_ROUTE)
      .replace(/^#/, "")
      .replace(/^\/+/, "");
    var targetHash = "#/" + normalizedRoute;
    if (location.hash !== targetHash) {
      location.hash = targetHash;
    }
  }

  var tinyPngBase64 =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO7Z0KsAAAAASUVORK5CYII=";
  var placeholderPdf =
    "%PDF-1.1\n1 0 obj<<>>endobj\n2 0 obj<< /Type /Catalog /Pages 3 0 R >>endobj\n3 0 obj<< /Type /Pages /Count 1 /Kids [4 0 R] >>endobj\n4 0 obj<< /Type /Page /Parent 3 0 R /MediaBox [0 0 300 144] /Contents 5 0 R >>endobj\n5 0 obj<< /Length 53 >>stream\nBT /F1 18 Tf 40 90 Td (Offline placeholder document) Tj ET\nendstream\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000031 00000 n \n0000000080 00000 n \n0000000139 00000 n \n0000000231 00000 n \ntrailer<< /Root 2 0 R /Size 6 >>\nstartxref\n334\n%%EOF";

  var data = {
    profile: {
      id: 1,
      username: "252-35-584",
      firstName: "Md. Julkar Nayen Bin",
      lastName: "Hossain",
      email: "student@diu.edu.bd"
    },
    semesters: [
      { id: 261, code: "261", name: "Spring 261", active: true },
      { id: 260, code: "260", name: "Fall 260", active: true },
      { id: 259, code: "259", name: "Summer 259", active: true }
    ],
    paymentSummary: {
      totalDebit: 236701,
      totalCredit: 236742,
      totalOther: 0
    },
    paymentLedger: [
      {
        id: 1,
        semesterId: 261,
        paymentHead: { name: "Tuition Fee" },
        debit: 60000,
        credit: 45000,
        other: 0,
        date: "2026-01-15"
      },
      {
        id: 2,
        semesterId: 261,
        paymentHead: { name: "Semester Fee" },
        debit: 35000,
        credit: 30000,
        other: 0,
        date: "2026-01-15"
      },
      {
        id: 3,
        semesterId: 261,
        paymentHead: { name: "Lab Fee" },
        debit: 12000,
        credit: 12000,
        other: 0,
        date: "2026-01-15"
      },
      {
        id: 4,
        semesterId: 261,
        paymentHead: { name: "Library Fine" },
        debit: 15000,
        credit: 11500,
        other: 3000,
        date: "2026-02-03"
      }
    ],
    routines: [
      {
        COURSE_TITLE: "Data Structures",
        SECTION_NAME: "A",
        startTime: "10:00 AM",
        endTime: "11:30 AM",
        buildingName: "AB-4",
        room: "703",
        EMPLOYEE_NAME: "Dr. Tanvir Rahman",
        teacherCode: "TR-102",
        weekDay: "Sunday"
      },
      {
        COURSE_TITLE: "Discrete Mathematics",
        SECTION_NAME: "B",
        startTime: "12:00 PM",
        endTime: "01:30 PM",
        buildingName: "AB-4",
        room: "510",
        EMPLOYEE_NAME: "Sharmin Akter",
        teacherCode: "SA-211",
        weekDay: "Sunday"
      },
      {
        COURSE_TITLE: "Web Engineering",
        SECTION_NAME: "A",
        startTime: "02:00 PM",
        endTime: "03:30 PM",
        buildingName: "AB-5",
        room: "405",
        EMPLOYEE_NAME: "Mahmud Hasan",
        teacherCode: "MH-119",
        weekDay: "Sunday"
      }
    ],
    registeredCourses: [
      {
        id: 1,
        courseCode: "CSE261",
        courseTitle: "Data Structures",
        credit: 3,
        sectionName: "A",
        employeeName: "Dr. Tanvir Rahman"
      },
      {
        id: 2,
        courseCode: "MAT203",
        courseTitle: "Discrete Mathematics",
        credit: 3,
        sectionName: "B",
        employeeName: "Sharmin Akter"
      },
      {
        id: 3,
        courseCode: "SWE211",
        courseTitle: "Web Engineering",
        credit: 3,
        sectionName: "A",
        employeeName: "Mahmud Hasan"
      },
      {
        id: 4,
        courseCode: "ENG101",
        courseTitle: "English for Communication",
        credit: 3,
        sectionName: "C",
        employeeName: "Rokeya Sultana"
      },
      {
        id: 5,
        courseCode: "PHY107",
        courseTitle: "Physics",
        credit: 3,
        sectionName: "A",
        employeeName: "Aminul Islam"
      }
    ],
    resultGraph: [
      { semester: "Fall 259", cgpa: 3.48 },
      { semester: "Summer 260", cgpa: 3.63 },
      { semester: "Spring 261", cgpa: 3.74 }
    ],
    courseResults: [
      {
        courseCode: "MAT 102",
        courseTitle: "Mathematics II",
        credit: 3,
        gradeLetter: "A-",
        gradePoint: 3.5,
        status: "Regular"
      },
      {
        courseCode: "SE 123",
        courseTitle: "Discrete Mathematics",
        credit: 3,
        gradeLetter: "A+",
        gradePoint: 4,
        status: "Regular"
      },
      {
        courseCode: "SE 131",
        courseTitle: "Data Structure",
        credit: 4,
        gradeLetter: "A+",
        gradePoint: 4,
        status: "Regular"
      },
      {
        courseCode: "SE 132",
        courseTitle: "Data Structure Lab",
        credit: 1,
        gradeLetter: "A",
        gradePoint: 3.75,
        status: "Regular"
      },
      {
        courseCode: "SE 213",
        courseTitle: "Digital Electronics & Logic Design",
        credit: 3,
        gradeLetter: "A-",
        gradePoint: 3.5,
        status: "Regular"
      }
    ],
    mentorDetail: {
      id: 1,
      mentorName: "Dr. Farhana Yasmin",
      mentorDesignation: "Associate Professor",
      mentorEmail: "farhana.yasmin@offline.local",
      mentorPhone: "01700000000"
    },
    mentorMeetings: {
      student: [
        {
          id: 1,
          created_date: "2026-01-20T10:00:00",
          meeting_topic: "Semester Planning",
          meeting_instruction: "Maintain lab attendance and project progress.",
          meeting_remarks: "On track",
          next_meeting_date: "2026-02-15T00:00:00",
          next_meeting_time: "11:00 AM"
        }
      ],
      guardian: [
        {
          id: 1,
          guardian_name: "Abdul Karim",
          created_date: "2026-02-05T10:00:00",
          meeting_topic: "Academic Update",
          meeting_instruction: "Reviewed Spring 261 performance.",
          meeting_remarks: "Guardian informed",
          next_meeting_date: "2026-03-05T00:00:00",
          next_meeting_time: "10:30 AM"
        }
      ],
      complete: [],
      pending: []
    },
    transportPackages: [
      { id: 1, packageName: "Main Campus Route", locationName: "Mirpur", amount: 4500, active: true },
      { id: 2, packageName: "Main Campus Route", locationName: "Uttara", amount: 5200, active: true }
    ],
    transportApplications: [
      { id: 1, packageName: "Main Campus Route", locationName: "Mirpur", paymentStatus: "Paid", applicationStatus: "Approved" }
    ],
    scholarshipCirculars: [
      { id: 1, title: "Merit Scholarship Spring 261", circularNo: "MSC-261", applicationFee: 500, semester: { name: "Spring 261", code: "261" } }
    ],
    scholarshipApplications: [
      {
        id: 1,
        status: "Approved",
        applicationId: "SCH-261-0001",
        applicantName: "Md. Student",
        studentId: "02425205341584",
        registrationId: "252-35-584",
        semester: { name: "Spring 261", code: "261" },
        scholarshipType: { name: "Merit Scholarship" },
        applicationFee: 500
      }
    ],
    documents: [
      { id: 1, name: "Academic Transcript", documentType: "Transcript", active: true },
      { id: 2, name: "Provisional Certificate", documentType: "Certificate", active: true }
    ],
    documentVersions: [
      { id: 1, name: "Standard", active: true },
      { id: 2, name: "Urgent", active: true }
    ],
    paymentMedia: [
      { id: 1, name: "bKash" },
      { id: 2, name: "Nagad" }
    ],
    documentApplications: [
      {
        id: 1,
        applicationId: "DOC-261-0001",
        applicantName: "Md. Student",
        studentId: "02425205341584",
        documentName: "Academic Transcript",
        applicationStatus: "Delivered"
      }
    ],
    convocation: {
      id: 1,
      title: "13th Convocation",
      active: true,
      registrationLastDate: "2026-06-30"
    },
    convocationStudent: {
      studentId: "02425205341584",
      studentName: "Md. Student",
      eligible: true
    },
    convocationApplyDetails: {
      applicationId: "CON-261-0001",
      status: "Submitted"
    },
    alumniEligible: {
      studentId: "02425205341584",
      studentName: "Md. Student",
      eligible: true
    },
    alumniCards: [
      { id: 1, cardNo: "ALM-0001", status: "Issued" }
    ],
    professions: [
      { id: 1, name: "Software Engineer" },
      { id: 2, name: "Student" }
    ],
    relationships: [
      { id: 1, name: "Father" },
      { id: 2, name: "Mother" },
      { id: 3, name: "Sibling" }
    ],
    teachingCriteria: [
      { id: 1, name: "Clarity of lecture" },
      { id: 2, name: "Course organization" }
    ],
    teachingScales: [
      { id: 1, name: "Excellent", value: 5 },
      { id: 2, name: "Good", value: 4 }
    ],
    liveResultCourses: [
      { courseSectionId: 1001, courseTitle: "Data Structures", sectionName: "A" }
    ],
    liveResultScores: [
      { studentId: "02425205341584", studentName: "Md. Student", marks: 92, status: "Published" }
    ],
    resultTypes: [
      { id: 1, code: "REGULAR", name: "Regular Result" }
    ],
    laptopEligibility: {
      enabled: true,
      eligibility: true,
      semesterName: "Spring 261",
      message: "Eligible for Spring 261 laptop application."
    },
    clearance: {
      accountsClearance: true,
      examClearance: true,
      message: "You are clear for Spring 261."
    },
    searchResult: {
      studentId: "02425205341584",
      studentName: "Md. Student",
      batch: "61",
      program: "B.Sc. in Computer Science and Engineering",
      semester: "Spring 261",
      cgpa: 3.17
    }
  };

  data.studentInformation = {
    id: 1,
    studentId: "02425205341584",
    registrationId: "252-35-584",
    personId: 101,
    studentPerson: {
      id: 101,
      firstName: data.profile.firstName,
      lastName: data.profile.lastName,
      username: data.profile.username,
      email: data.profile.email,
      mobileNumber: "01700000000",
      fatherName: "Abdul Karim",
      motherName: "Shahnaz Begum",
      gender: { id: 1, name: "Male" },
      bloodGroup: { id: 1, name: "B+" },
      religion: { id: 1, name: "Islam" },
      maritalStatus: { id: 1, name: "Single" }
    },
    batch: {
      id: 61,
      name: "46",
      paymentSchemeTemplate: {
        paymentSchemes: [
          { paymentHead: { name: "Tuition Fee" }, amount: 60000 },
          { paymentHead: { name: "Semester Fee" }, amount: 35000 },
          { paymentHead: { name: "Lab Fee" }, amount: 12000 },
          { paymentHead: { name: "Library & Other" }, amount: 18000 }
        ]
      }
    },
    program: {
      id: 10,
      code: "CSE",
      name: "B.Sc. in Software Engineering"
    },
    department: { id: 4, name: "Computer Science & Engineering" },
    faculty: { id: 2, name: "Faculty of Science & Information Technology" },
    waiverStudentSemesters: [
      {
        semester: { name: "Spring 261", code: "261" },
        waiverCategory: { name: "Merit Scholarship" },
        scholarshipApplicationWaiver: { waiverPercentage: 25 },
        remarks: "Spring 261 performance"
      }
    ],
    waiverStudents: [
      {
        semester: { name: "Spring 261", code: "261" },
        waiverApplicationType: { name: "Scholarship" },
        scholarshipApplicationWaiver: { waiverPercentage: 25 },
        isReferenceReg: true,
        referenceId: "REF-261-01"
      }
    ]
  };

  data.studentInformation.studentPerson.fullName = [
    data.studentInformation.studentPerson.firstName,
    data.studentInformation.studentPerson.lastName
  ].join(" ").trim();
  data.studentInformation.batch.code = data.studentInformation.batch.name;

  data.resultDetail = data.courseResults.map(function (course) {
    return {
      studentId: data.studentInformation.studentId,
      regId: data.studentInformation.registrationId,
      cgpa: 3.75,
      courseCode: course.courseCode,
      courseTitle: course.courseTitle,
      courseCredit: course.credit,
      gradeLetter: course.gradeLetter,
      pointEquivalent: course.gradePoint,
      status: course.status,
      studentInformation: {
        studentPerson: {
          fullName: data.studentInformation.studentPerson.fullName
        },
        batch: {
          code: data.studentInformation.batch.code
        },
        program: {
          name: data.studentInformation.program.name
        }
      }
    };
  });

  window.__OFFLINE_PORTAL_DATA__ = data;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function setSessionCache(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function setExpirySessionCache(key, value, ttlMs) {
    sessionStorage.setItem(key, JSON.stringify({
      value: value,
      expiry: Date.now() + ttlMs
    }));
  }

  setSessionCache("offline_profile", data.profile);
  setSessionCache("profile", data.studentInformation);
  setSessionCache("semesters", data.semesters);
  setSessionCache("payment_summery", data.paymentSummary);
  setSessionCache("daily_routine_summery", {
    SEMESTER_ID: 261,
    SEMESTER_NAME: "Spring 261"
  });
  setSessionCache("routines", data.routines);
  setSessionCache("semester_results", data.resultGraph);
  setExpirySessionCache("academicResult_261", data.resultDetail, 1800000);
  setSessionCache("application_lists", data.documentApplications);

  function offlineNotice(message) {
    var existing = document.querySelector(".offline-link-blocked");
    if (existing) {
      existing.textContent = message;
      clearTimeout(existing._timer);
    } else {
      existing = document.createElement("div");
      existing.className = "offline-link-blocked";
      existing.textContent = message;
      document.body.appendChild(existing);
    }
    existing._timer = setTimeout(function () {
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    }, 2800);
  }

  function rewriteAssetUrl(url) {
    if (!url) {
      return url;
    }
    return url
      .replace(/^\/src\/assets\//i, "assets/")
      .replace(/^\/assets\//i, "assets/")
      .replace(/^\.{0,2}\/src\/assets\//i, "assets/");
  }

  function patchAssetAttributes(root) {
    var nodes = (root || document).querySelectorAll("[src],[href]");
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      if (node.hasAttribute("src")) {
        node.setAttribute("src", rewriteAssetUrl(node.getAttribute("src")));
      }
      if (node.hasAttribute("href")) {
        var href = node.getAttribute("href");
        if (href && (/^\/assets\//i.test(href) || /^\/src\/assets\//i.test(href))) {
          node.setAttribute("href", rewriteAssetUrl(href));
        }
      }
    }
  }

  patchAssetAttributes(document);
  new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i += 1) {
      var added = mutations[i].addedNodes;
      for (var j = 0; j < added.length; j += 1) {
        if (added[j].nodeType === 1) {
          patchAssetAttributes(added[j]);
        }
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });

  document.addEventListener(
    "click",
    function (event) {
      var anchor = event.target.closest && event.target.closest("a[href]");
      if (!anchor) {
        return;
      }
      var href = anchor.getAttribute("href");
      if (/^https?:\/\//i.test(href)) {
        event.preventDefault();
        offlineNotice("External service links are disabled in offline mode.");
      }
    },
    true
  );

  function textToArrayBuffer(text) {
    return new TextEncoder().encode(text).buffer;
  }

  function makeResponse(dataValue, status, headers) {
    return {
      status: status || 200,
      headers: headers || { "content-type": "application/json" },
      body: dataValue
    };
  }

  function wrap(dataValue) {
    return makeResponse({ data: clone(dataValue) });
  }

  function blobResponse(type) {
    if (type === "pdf") {
      return {
        status: 200,
        headers: { "content-type": "application/pdf" },
        body: new Blob([placeholderPdf], { type: "application/pdf" })
      };
    }
    var pngBytes = Uint8Array.from(atob(tinyPngBase64), function (c) {
      return c.charCodeAt(0);
    });
    return {
      status: 200,
      headers: { "content-type": "image/png" },
      body: pngBytes.buffer
    };
  }

  function queryParams(url) {
    var params = {};
    url.searchParams.forEach(function (value, key) {
      params[key] = value;
    });
    return params;
  }

  function parseJson(body) {
    if (!body || typeof body !== "string") {
      return {};
    }
    try {
      return JSON.parse(body);
    } catch (error) {
      return {};
    }
  }

  function optionList(items) {
    return items.map(function (name, index) {
      return { id: index + 1, code: String(index + 1), name: name, active: true };
    });
  }

  var lookupMap = {
    "/gender": optionList(["Male", "Female"]),
    "/gender/active": optionList(["Male", "Female"]),
    "/blood/group": optionList(["A+", "B+", "O+", "AB+"]),
    "/blood/group/active": optionList(["A+", "B+", "O+", "AB+"]),
    "/religion": optionList(["Islam", "Hinduism", "Christianity", "Buddhism"]),
    "/religion/active": optionList(["Islam", "Hinduism", "Christianity", "Buddhism"]),
    "/marital/status": optionList(["Single", "Married"]),
    "/marital/status/active": optionList(["Single", "Married"]),
    "/relation": optionList(["Father", "Mother", "Sibling", "Guardian"]),
    "/relation/active": optionList(["Father", "Mother", "Sibling", "Guardian"]),
    "/relationship/list": data.relationships,
    "/profession/list": data.professions,
    "/country": optionList(["Bangladesh"]),
    "/country/active": optionList(["Bangladesh"]),
    "/state": optionList(["Dhaka"]),
    "/state/active": optionList(["Dhaka"]),
    "/city": optionList(["Dhaka North"]),
    "/city/active": optionList(["Dhaka North"]),
    "/sub/district": optionList(["Mirpur"]),
    "/sub/district/active": optionList(["Mirpur"]),
    "/address/type": optionList(["Present", "Permanent"]),
    "/address/type/active": optionList(["Present", "Permanent"]),
    "/bank": optionList(["Dutch-Bangla Bank", "BRAC Bank"]),
    "/bank/active": optionList(["Dutch-Bangla Bank", "BRAC Bank"]),
    "/faculty": [data.studentInformation.faculty],
    "/faculty/active": [data.studentInformation.faculty],
    "/department/active": [data.studentInformation.department],
    "/department/search": [data.studentInformation.department],
    "/program": [data.studentInformation.program],
    "/program/active": [data.studentInformation.program],
    "/program/search": [data.studentInformation.program],
    "/program/faculty": [data.studentInformation.program],
    "/campus": optionList(["Dhanmondi"]),
    "/campus/active": optionList(["Dhanmondi"]),
    "/shift": optionList(["Morning", "Day"]),
    "/shift/active": optionList(["Morning", "Day"]),
    "/type": optionList(["General"]),
    "/type/active": optionList(["General"]),
    "/student/document/verify/active": optionList(["Academic Transcript", "Certificate"]),
    "/student/document/verify": [
      {
        studentId: "02425205341584",
        studentName: "Md. Student",
        verificationStatus: "Verified"
      }
    ],
    "/student/address/information": [],
    "/student/bank/information": [],
    "/student/emergency/contact": [],
    "/student/family": [],
    "/student/job/experience": [],
    "/student/passport/information": [],
    "/student/publication": [],
    "/student/research": [],
    "/student/skill": [],
    "/student/visa/information": [],
    "/skill/category": optionList(["Programming", "Communication"]),
    "/skill/category/active": optionList(["Programming", "Communication"]),
    "/skill/learned/by": optionList(["Self", "Classroom"]),
    "/skill/learned/by/active": optionList(["Self", "Classroom"]),
    "/skill/active": optionList(["JavaScript", "Problem Solving"])
  };

  function resolveGatewayRequest(method, url, body, responseType) {
    var path = url.pathname;
    var params = queryParams(url);
    var jsonBody = parseJson(body);
    var semesterId = params.semesterId || jsonBody.semesterId || "261";

    if (/\/realms\/diu-student\/account$/i.test(path)) {
      return wrap(data.profile);
    }
    if (/\/realms\/diu-student\/account\/sessions\/devices$/i.test(path)) {
      return wrap([{ browser: "Offline Browser", lastAccess: "Now", ipAddress: "127.0.0.1" }]);
    }
    if (/\/f\/IfAllowLocalCache$/i.test(path)) {
      return makeResponse({ success: true });
    }
    if (/\/student\/information\/profile$/i.test(path)) {
      return wrap(data.studentInformation);
    }
    if (/\/student\/information\/find$/i.test(path)) {
      return wrap(data.studentInformation);
    }
    if (/\/student\/information\/search$/i.test(path)) {
      return wrap([data.studentInformation]);
    }
    if (/\/student\/person$/i.test(path) || /\/student\/person\/find$/i.test(path)) {
      return wrap(data.studentInformation.studentPerson);
    }
    if (/\/payment\/ledger\/summary$/i.test(path)) {
      return wrap(data.paymentSummary);
    }
    if (/\/payment\/ledger$/i.test(path)) {
      return wrap(data.paymentLedger.filter(function (item) {
        return String(item.semesterId) === String(semesterId);
      }));
    }
    if (/\/payment\/clearance$/i.test(path) || /\/accounts\/semester-exam-clearance$/i.test(path)) {
      return wrap(data.clearance);
    }
    if (/\/semester\/active$/i.test(path) || /\/semester$/i.test(path)) {
      return wrap(data.semesters);
    }
    if (/\/routine\/registered\/semester$/i.test(path)) {
      return wrap({ SEMESTER_ID: 261, SEMESTER_NAME: "Spring 261" });
    }
    if (/\/routine\/list$/i.test(path)) {
      return wrap(data.routines);
    }
    if (/\/registration\/courses$/i.test(path)) {
      return wrap(data.registeredCourses);
    }
    if (/\/registeredCourse\/semesterList$/i.test(path)) {
      return wrap(data.semesters);
    }
    if (/\/result\/graph$/i.test(path)) {
      return wrap(data.resultGraph);
    }
    if (/\/result\/semester$/i.test(path)) {
      return wrap(data.resultDetail);
    }
    if (/\/result\/type(?:\/active)?$/i.test(path)) {
      return wrap(data.resultTypes);
    }
    if (/\/live\/result$/i.test(path)) {
      return wrap(data.liveResultScores);
    }
    if (/\/liveResult\/semesterList$/i.test(path)) {
      return wrap(data.semesters);
    }
    if (/\/liveResult\/registeredCourseList$/i.test(path)) {
      return wrap(data.liveResultCourses);
    }
    if (/\/liveResult$/i.test(path)) {
      return wrap(data.liveResultScores);
    }
    if (/\/mentor\/detail$/i.test(path)) {
      return wrap(data.mentorDetail);
    }
    if (/\/mentor\/meeting\/with\/mentor$/i.test(path)) {
      return wrap(data.mentorMeetings.student);
    }
    if (/\/mentor\/meeting\/with\/guardian$/i.test(path)) {
      return wrap(data.mentorMeetings.guardian);
    }
    if (/\/mentor\/meeting\/with\/course\/teacher\/complete$/i.test(path)) {
      return wrap(data.mentorMeetings.complete);
    }
    if (/\/mentor\/meeting\/with\/course\/teacher\/pending$/i.test(path)) {
      return wrap(data.mentorMeetings.pending);
    }
    if (/\/laptop\/eligibility$/i.test(path)) {
      return wrap(data.laptopEligibility);
    }
    if (/\/transport\/package\/list$/i.test(path)) {
      return wrap(data.transportPackages);
    }
    if (/\/transport\/application\/list$/i.test(path)) {
      return wrap(data.transportApplications);
    }
    if (/\/scholarship\/circular(?:\/active)?$/i.test(path)) {
      return wrap(data.scholarshipCirculars);
    }
    if (/\/scholarship\/application$/i.test(path)) {
      return wrap(data.scholarshipApplications);
    }
    if (/\/document\/list$/i.test(path)) {
      return wrap(data.documents);
    }
    if (/\/document\/version\/list$/i.test(path)) {
      return wrap(data.documentVersions);
    }
    if (/\/payment\/media\/list$/i.test(path)) {
      return wrap(data.paymentMedia);
    }
    if (/\/document\/application\/all$/i.test(path)) {
      return wrap(data.documentApplications);
    }
    if (/\/document\/application\/detail$/i.test(path)) {
      return wrap(data.documentApplications[0]);
    }
    if (/\/convocation\/active$/i.test(path)) {
      return wrap(data.convocation);
    }
    if (/\/convocation\/apply\/student\/info$/i.test(path)) {
      return wrap(data.convocationStudent);
    }
    if (/\/convocation\/apply\/details$/i.test(path)) {
      return wrap(data.convocationApplyDetails);
    }
    if (/\/alumni\/card\/eligible\/student\/info$/i.test(path)) {
      return wrap(data.alumniEligible);
    }
    if (/\/alumni\/card\/list$/i.test(path)) {
      return wrap(data.alumniCards);
    }
    if (/\/teaching\/evaluation\/submission\/enable$/i.test(path)) {
      return wrap({ enabled: false });
    }
    if (/\/teval\/courseRegistrationTevalList$/i.test(path)) {
      return wrap([]);
    }
    if (/\/teaching\/evaluation\/criteria$/i.test(path)) {
      return wrap(data.teachingCriteria);
    }
    if (/\/teaching\/evaluation\/scale$/i.test(path)) {
      return wrap(data.teachingScales);
    }
    if (/\/check\/result\/captcha$/i.test(path)) {
      return wrap({ image: tinyPngBase64, hidden: "261" });
    }
    if (/\/check\/result\/semester$/i.test(path)) {
      return wrap([data.semesters[0]]);
    }
    if (/\/check\/result$/i.test(path) && method === "POST") {
      return wrap(data.resultDetail);
    }
    if (/\/check\/result\/load4$/i.test(path) && method === "POST") {
      return wrap(data.resultDetail);
    }
    if (/\/student\/document\/find$/i.test(path) || /\/admission\/document\/find$/i.test(path)) {
      return responseType === "blob" ? blobResponse("pdf") : blobResponse("image");
    }
    if (/\/pdf$/i.test(path) || /\/pdf\?/i.test(url.href)) {
      return blobResponse("pdf");
    }
    if (method !== "GET") {
      return wrap({
        success: true,
        id: Date.now(),
        payload: jsonBody
      });
    }

    var lookupKey = Object.keys(lookupMap).find(function (key) {
      return path.endsWith(key);
    });
    if (lookupKey) {
      return wrap(lookupMap[lookupKey]);
    }

    if (/\/find$/i.test(path) || /\/profile$/i.test(path) || /\/detail$/i.test(path)) {
      return wrap({});
    }
    return wrap([]);
  }

  function shouldMock(url) {
    return /gateway7\.diu\.edu\.bd|auth1\.diu\.edu\.bd|127\.0\.0\.1:18622/i.test(url.host);
  }

  function resolveMock(method, requestUrl, body, responseType) {
    var url = new URL(requestUrl, location.href);
    if (!shouldMock(url)) {
      return null;
    }
    return resolveGatewayRequest(method, url, body, responseType);
  }

  var NativeXHR = window.XMLHttpRequest;

  function OfflineXHR() {
    this._headers = {};
    this._responseHeaders = {};
    this._native = null;
    this._async = true;
    this._method = "GET";
    this._url = "";
    this.readyState = 0;
    this.status = 0;
    this.response = null;
    this.responseText = "";
    this.responseURL = "";
    this.responseType = "";
    this.withCredentials = false;
    this.timeout = 0;
    this.onreadystatechange = null;
    this.onload = null;
    this.onerror = null;
    this.onloadend = null;
  }

  OfflineXHR.prototype.open = function (method, url, async, user, password) {
    this._method = method;
    this._url = url;
    this._async = async !== false;
    this._user = user;
    this._password = password;
    this.readyState = 1;
    if (this.onreadystatechange) {
      this.onreadystatechange();
    }
  };

  OfflineXHR.prototype.setRequestHeader = function (key, value) {
    this._headers[key] = value;
  };

  OfflineXHR.prototype.getAllResponseHeaders = function () {
    var lines = [];
    Object.keys(this._responseHeaders).forEach(
      function (key) {
        lines.push(key + ": " + this._responseHeaders[key]);
      }.bind(this)
    );
    return lines.join("\r\n");
  };

  OfflineXHR.prototype.getResponseHeader = function (name) {
    return this._responseHeaders[(name || "").toLowerCase()] || null;
  };

  OfflineXHR.prototype.abort = function () {
    if (this._native) {
      this._native.abort();
    }
  };

  OfflineXHR.prototype.send = function (body) {
    var mock = resolveMock(this._method, this._url, body, this.responseType);
    if (mock) {
      this._responseHeaders = {};
      Object.keys(mock.headers || {}).forEach(
        function (key) {
          this._responseHeaders[key.toLowerCase()] = mock.headers[key];
        }.bind(this)
      );
      setTimeout(
        function () {
          this.readyState = 4;
          this.status = mock.status;
          this.responseURL = new URL(this._url, location.href).href;
          if (this.responseType === "arraybuffer") {
            this.response = mock.body instanceof ArrayBuffer ? mock.body : textToArrayBuffer(JSON.stringify(mock.body));
            this.responseText = "";
          } else if (this.responseType === "blob") {
            this.response = mock.body instanceof Blob ? mock.body : new Blob([JSON.stringify(mock.body)], { type: this.getResponseHeader("content-type") || "application/octet-stream" });
            this.responseText = "";
          } else if (this.responseType === "json") {
            this.response = mock.body;
            this.responseText = JSON.stringify(mock.body);
          } else {
            this.responseText = typeof mock.body === "string" ? mock.body : JSON.stringify(mock.body);
            this.response = this.responseText;
          }
          if (this.onreadystatechange) {
            this.onreadystatechange();
          }
          if (this.onload) {
            this.onload();
          }
          if (this.onloadend) {
            this.onloadend();
          }
        }.bind(this),
        0
      );
      return;
    }

    var native = new NativeXHR();
    this._native = native;
    native.open(this._method, this._url, this._async, this._user, this._password);
    native.withCredentials = this.withCredentials;
    native.timeout = this.timeout;
    if (this.responseType) {
      native.responseType = this.responseType;
    }
    Object.keys(this._headers).forEach(
      function (key) {
        native.setRequestHeader(key, this._headers[key]);
      }.bind(this)
    );
    native.onreadystatechange = function () {
      this.readyState = native.readyState;
      this.status = native.status;
      this.response = native.response;
      this.responseText = native.responseText;
      this.responseURL = native.responseURL;
      if (this.onreadystatechange) {
        this.onreadystatechange();
      }
      if (native.readyState === 4) {
        if (this.onload) {
          this.onload();
        }
        if (this.onloadend) {
          this.onloadend();
        }
      }
    }.bind(this);
    native.onerror = function (event) {
      if (this.onerror) {
        this.onerror(event);
      }
      if (this.onloadend) {
        this.onloadend(event);
      }
    }.bind(this);
    native.send(body);
  };

  window.XMLHttpRequest = OfflineXHR;

  var nativeFetch = window.fetch ? window.fetch.bind(window) : null;
  if (nativeFetch) {
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : input.url;
      var method = (init && init.method) || (typeof input === "object" && input.method) || "GET";
      var body = init && init.body;
      var mock = resolveMock(method, url, body, "");
      if (!mock) {
        return nativeFetch(input, init);
      }
      return Promise.resolve(
        new Response(
          mock.body instanceof Blob ? mock.body : JSON.stringify(mock.body),
          {
            status: mock.status,
            headers: mock.headers
          }
        )
      );
    };
  }
})();
