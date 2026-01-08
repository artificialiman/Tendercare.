// Sample student data with grades
const studentData = {
  subjects: [
    'Mathematics',
    'English Language',
    'Biology',
    'Chemistry',
    'Physics',
    'Further Mathematics',
    'Civic Education',
    'Agricultural Science',
    'Computer Science'
  ],
  
  // JSS grades (JSS1, JSS2, JSS3)
  jssGrades: {
    jss1: [
      { subject: 'Mathematics', ca: 28, exam: 48, total: 76, grade: 'B' },
      { subject: 'English Language', ca: 32, exam: 52, total: 84, grade: 'A' },
      { subject: 'Basic Science', ca: 30, exam: 50, total: 80, grade: 'A' },
      { subject: 'Basic Technology', ca: 26, exam: 46, total: 72, grade: 'B' },
      { subject: 'Civic Education', ca: 35, exam: 54, total: 89, grade: 'A' },
      { subject: 'Social Studies', ca: 29, exam: 48, total: 77, grade: 'B' },
      { subject: 'Agricultural Science', ca: 31, exam: 51, total: 82, grade: 'A' },
      { subject: 'Computer Studies', ca: 33, exam: 53, total: 86, grade: 'A' },
      { subject: 'Physical Education', ca: 36, exam: 56, total: 92, grade: 'A' }
    ],
    jss2: [
      { subject: 'Mathematics', ca: 30, exam: 50, total: 80, grade: 'A' },
      { subject: 'English Language', ca: 31, exam: 51, total: 82, grade: 'A' },
      { subject: 'Basic Science', ca: 28, exam: 47, total: 75, grade: 'B' },
      { subject: 'Basic Technology', ca: 27, exam: 48, total: 75, grade: 'B' },
      { subject: 'Civic Education', ca: 34, exam: 55, total: 89, grade: 'A' },
      { subject: 'Social Studies', ca: 30, exam: 49, total: 79, grade: 'B' },
      { subject: 'Agricultural Science', ca: 32, exam: 52, total: 84, grade: 'A' },
      { subject: 'Computer Studies', ca: 35, exam: 54, total: 89, grade: 'A' },
      { subject: 'Physical Education', ca: 37, exam: 57, total: 94, grade: 'A' }
    ],
    jss3: [
      { subject: 'Mathematics', ca: 32, exam: 52, total: 84, grade: 'A' },
      { subject: 'English Language', ca: 33, exam: 53, total: 86, grade: 'A' },
      { subject: 'Basic Science', ca: 31, exam: 51, total: 82, grade: 'A' },
      { subject: 'Basic Technology', ca: 29, exam: 49, total: 78, grade: 'B' },
      { subject: 'Civic Education', ca: 36, exam: 56, total: 92, grade: 'A' },
      { subject: 'Social Studies', ca: 32, exam: 52, total: 84, grade: 'A' },
      { subject: 'Agricultural Science', ca: 34, exam: 54, total: 88, grade: 'A' },
      { subject: 'Computer Studies', ca: 36, exam: 57, total: 93, grade: 'A' },
      { subject: 'Physical Education', ca: 38, exam: 58, total: 96, grade: 'A' }
    ]
  },
  
  // SS grades (SS1, SS2, SS3)
  ssGrades: {
    ss1: [
      { subject: 'Mathematics', ca: 34, exam: 54, total: 88, grade: 'A' },
      { subject: 'English Language', ca: 35, exam: 55, total: 90, grade: 'A' },
      { subject: 'Biology', ca: 33, exam: 53, total: 86, grade: 'A' },
      { subject: 'Chemistry', ca: 32, exam: 52, total: 84, grade: 'A' },
      { subject: 'Physics', ca: 31, exam: 51, total: 82, grade: 'A' },
      { subject: 'Further Mathematics', ca: 30, exam: 50, total: 80, grade: 'A' },
      { subject: 'Civic Education', ca: 36, exam: 57, total: 93, grade: 'A' },
      { subject: 'Agricultural Science', ca: 34, exam: 54, total: 88, grade: 'A' },
      { subject: 'Computer Science', ca: 37, exam: 58, total: 95, grade: 'A' }
    ],
    ss2: [
      { subject: 'Mathematics', ca: 33, exam: 53, total: 86, grade: 'A' },
      { subject: 'English Language', ca: 34, exam: 54, total: 88, grade: 'A' },
      { subject: 'Biology', ca: 32, exam: 52, total: 84, grade: 'A' },
      { subject: 'Chemistry', ca: 31, exam: 51, total: 82, grade: 'A' },
      { subject: 'Physics', ca: 30, exam: 50, total: 80, grade: 'A' },
      { subject: 'Further Mathematics', ca: 29, exam: 49, total: 78, grade: 'B' },
      { subject: 'Civic Education', ca: 35, exam: 56, total: 91, grade: 'A' },
      { subject: 'Agricultural Science', ca: 33, exam: 53, total: 86, grade: 'A' },
      { subject: 'Computer Science', ca: 36, exam: 57, total: 93, grade: 'A' }
    ],
    ss3: [
      { subject: 'Mathematics', ca: 35, exam: 55, total: 90, grade: 'A' },
      { subject: 'English Language', ca: 36, exam: 56, total: 92, grade: 'A' },
      { subject: 'Biology', ca: 34, exam: 54, total: 88, grade: 'A' },
      { subject: 'Chemistry', ca: 33, exam: 53, total: 86, grade: 'A' },
      { subject: 'Physics', ca: 32, exam: 52, total: 84, grade: 'A' },
      { subject: 'Further Mathematics', ca: 31, exam: 51, total: 82, grade: 'A' },
      { subject: 'Civic Education', ca: 37, exam: 58, total: 95, grade: 'A' },
      { subject: 'Agricultural Science', ca: 35, exam: 55, total: 90, grade: 'A' },
      { subject: 'Computer Science', ca: 38, exam: 59, total: 97, grade: 'A' }
    ]
  }
};

// Calculate average
function calculateAverage(grades) {
  const total = grades.reduce((sum, g) => sum + g.total, 0);
  return (total / grades.length).toFixed(2);
}

// Get letter grade from average
function getLetterGrade(avg) {
  if (avg >= 90) return 'A';
  if (avg >= 80) return 'B';
  if (avg >= 70) return 'C';
  if (avg >= 60) return 'D';
  if (avg >= 50) return 'E';
  return 'F';
}

// Calculate CGPA (on 4.0 scale)
function calculateCGPA(avg) {
  if (avg >= 90) return 4.0;
  if (avg >= 80) return 3.5;
  if (avg >= 70) return 3.0;
  if (avg >= 60) return 2.5;
  if (avg >= 50) return 2.0;
  return 1.0;
}

// Generate report card HTML
function generateReportCard(year, grades, yearLabel) {
  const average = calculateAverage(grades);
  const letterGrade = getLetterGrade(average);
  
  return `
    <div class="accordion" style="margin-bottom: 24px;">
      <div class="accordion-header" onclick="toggleAccordion(this)" style="cursor: pointer;">
        <h3>${yearLabel}</h3>
        <svg class="accordion-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="accordion-content">
        <div class="report-card" style="
          background: #f9f7f1;
          border: 3px double #8b7355;
          border-radius: 8px;
          padding: 32px;
          margin-top: 16px;
          font-family: Georgia, 'Times New Roman', serif;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        ">
          <div class="report-header" style="
            text-align: center;
            border-bottom: 3px double #8b7355;
            padding-bottom: 16px;
            margin-bottom: 24px;
          ">
            <h2 style="
              font-size: 28px;
              color: #2d3748;
              margin-bottom: 8px;
              letter-spacing: 1px;
            ">TENDERCARE SCHOOL</h2>
            <p style="
              font-size: 14px;
              color: #4a5568;
              text-transform: uppercase;
              letter-spacing: 2px;
            ">Academic Report Card</p>
            <p style="
              font-size: 16px;
              color: #2d3748;
              margin-top: 12px;
              font-weight: bold;
            ">${yearLabel} • Session 2025/2026</p>
          </div>
          
          <table class="grades-table" style="
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
          ">
            <thead>
              <tr style="background: #e2dcc8;">
                <th style="
                  padding: 12px;
                  text-align: left;
                  border: 1px solid #8b7355;
                  font-weight: bold;
                  color: #2d3748;
                ">Subject</th>
                <th style="
                  padding: 12px;
                  text-align: center;
                  border: 1px solid #8b7355;
                  font-weight: bold;
                  color: #2d3748;
                ">CA (40)</th>
                <th style="
                  padding: 12px;
                  text-align: center;
                  border: 1px solid #8b7355;
                  font-weight: bold;
                  color: #2d3748;
                ">Exam (60)</th>
                <th style="
                  padding: 12px;
                  text-align: center;
                  border: 1px solid #8b7355;
                  font-weight: bold;
                  color: #2d3748;
                ">Total (100)</th>
                <th style="
                  padding: 12px;
                  text-align: center;
                  border: 1px solid #8b7355;
                  font-weight: bold;
                  color: #2d3748;
                ">Grade</th>
              </tr>
            </thead>
            <tbody>
              ${grades.map(g => `
                <tr>
                  <td style="
                    padding: 10px 12px;
                    border: 1px solid #8b7355;
                    color: #2d3748;
                  ">${g.subject}</td>
                  <td style="
                    padding: 10px 12px;
                    text-align: center;
                    border: 1px solid #8b7355;
                    color: #2d3748;
                  ">${g.ca}</td>
                  <td style="
                    padding: 10px 12px;
                    text-align: center;
                    border: 1px solid #8b7355;
                    color: #2d3748;
                  ">${g.exam}</td>
                  <td style="
                    padding: 10px 12px;
                    text-align: center;
                    border: 1px solid #8b7355;
                    font-weight: bold;
                    color: #2d3748;
                  ">${g.total}</td>
                  <td style="
                    padding: 10px 12px;
                    text-align: center;
                    border: 1px solid #8b7355;
                    font-weight: bold;
                    color: #2d3748;
                    font-family: 'Brush Script MT', cursive;
                    font-size: 18px;
                  ">${g.grade}</td>
                </tr>
              `).join('')}
            </tbody>
            <tfoot>
              <tr style="background: #e2dcc8; font-weight: bold;">
                <td style="
                  padding: 12px;
                  border: 1px solid #8b7355;
                  color: #2d3748;
                " colspan="3">Average</td>
                <td style="
                  padding: 12px;
                  text-align: center;
                  border: 1px solid #8b7355;
                  color: #2d3748;
                ">${average}%</td>
                <td style="
                  padding: 12px;
                  text-align: center;
                  border: 1px solid #8b7355;
                  color: #2d3748;
                  font-family: 'Brush Script MT', cursive;
                  font-size: 20px;
                ">${letterGrade}</td>
              </tr>
            </tfoot>
          </table>
          
          <div style="
            margin-top: 32px;
            padding-top: 16px;
            border-top: 2px solid #8b7355;
          ">
            <p style="
              font-size: 13px;
              color: #4a5568;
              margin-bottom: 24px;
            "><strong>Grading Scale:</strong> A (90-100) | B (80-89) | C (70-79) | D (60-69) | E (50-59) | F (0-49)</p>
            
            <div style="display: flex; justify-content: space-between; margin-top: 32px;">
              <div>
                <p style="
                  font-size: 14px;
                  color: #2d3748;
                  margin-bottom: 4px;
                ">Class Teacher</p>
                <div style="
                  border-bottom: 2px solid #2d3748;
                  width: 200px;
                  margin-top: 24px;
                "></div>
              </div>
              <div>
                <p style="
                  font-size: 14px;
                  color: #2d3748;
                  margin-bottom: 4px;
                ">Principal</p>
                <div style="
                  border-bottom: 2px solid #2d3748;
                  width: 200px;
                  margin-top: 24px;
                "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Generate testimonial HTML
function generateTestimonial() {
  const studentId = sessionStorage.getItem('signedInStudent');
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return `
    <div class="testimonial-card" style="
      background: #f9f7f1;
      border: 4px double #8b7355;
      border-radius: 12px;
      padding: 48px;
      font-family: Georgia, 'Times New Roman', serif;
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    ">
      <div style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.05;
        font-size: 200px;
        color: #8b7355;
      ">TC</div>
      
      <div class="school-seal" style="
        width: 100px;
        height: 100px;
        margin: 0 auto 24px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: bold;
        color: white;
        border: 4px solid #8b7355;
      ">TC</div>
      
      <h1 style="
        text-align: center;
        font-size: 36px;
        color: #2d3748;
        margin-bottom: 8px;
        letter-spacing: 2px;
        text-transform: uppercase;
      ">Tendercare School</h1>
      
      <p style="
        text-align: center;
        font-size: 16px;
        color: #4a5568;
        margin-bottom: 32px;
        font-style: italic;
      ">Excellence in Education Since 2000</p>
      
      <h2 style="
        text-align: center;
        font-size: 28px;
        color: #2d3748;
        margin-bottom: 32px;
        text-decoration: underline;
        text-decoration-color: #8b7355;
      ">TESTIMONIAL</h2>
      
      <div style="
        line-height: 2;
        font-size: 16px;
        color: #2d3748;
        text-align: justify;
      ">
        <p style="margin-bottom: 24px;">
          This is to certify that <strong>Student ${studentId}</strong> has been a student 
          of Tendercare School from <strong>September 2019</strong> to <strong>June 2026</strong>, 
          completing their secondary education in the Science Division.
        </p>
        
        <p style="margin-bottom: 24px;">
          During their time at our institution, the student demonstrated:
        </p>
        
        <ul style="margin-bottom: 24px; padding-left: 40px;">
          <li style="margin-bottom: 12px;"><strong>Attendance Rate:</strong> 96.5% - Excellent</li>
          <li style="margin-bottom: 12px;"><strong>Academic Performance:</strong> Consistently high grades across all subjects</li>
          <li style="margin-bottom: 12px;"><strong>Conduct:</strong> Exemplary behavior and character</li>
          <li style="margin-bottom: 12px;"><strong>Participation:</strong> Active in school activities and clubs</li>
        </ul>
        
        <p style="margin-bottom: 32px;">
          The student has completed the full secondary school curriculum (JSS1 through SS3) 
          and has met all requirements for graduation. They have shown dedication to their 
          studies and have been a valued member of our school community.
        </p>
        
        <p style="margin-bottom: 48px;">
          This testimonial is issued upon request for official purposes.
        </p>
      </div>
      
      <div style="
        display: flex;
        justify-content: space-between;
        margin-top: 64px;
        padding-top: 24px;
        border-top: 2px solid #8b7355;
      ">
        <div style="text-align: center;">
          <p style="
            font-family: 'Brush Script MT', cursive;
            font-size: 32px;
            color: #2d3748;
            margin-bottom: 8px;
          ">Mrs. A. Johnson</p>
          <p style="
            font-size: 14px;
            color: #4a5568;
            font-weight: bold;
          ">Principal</p>
          <p style="
            font-size: 12px;
            color: #718096;
            margin-top: 4px;
          ">Tendercare School</p>
        </div>
        
        <div style="text-align: center;">
          <div class="school-seal" style="
            width: 80px;
            height: 80px;
            margin: 0 auto 8px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: bold;
            color: white;
            border: 3px solid #8b7355;
          ">TC</div>
          <p style="
            font-size: 12px;
            color: #718096;
          ">Official Seal</p>
        </div>
      </div>
      
      <p style="
        text-align: center;
        font-size: 13px;
        color: #718096;
        margin-top: 32px;
        font-style: italic;
      ">Date Issued: ${today}</p>
    </div>
  `;
}

// Toggle accordion
function toggleAccordion(header) {
  const accordion = header.parentElement;
  accordion.classList.toggle('active');
}

// Load transcript content
function loadTranscript() {
  const transcriptContent = document.getElementById('transcriptContent');
  
  let html = '<h2 style="text-align: center; font-size: 32px; margin-bottom: 32px; color: var(--text-primary);">Complete Academic Transcript</h2>';
  
  // JSS Years
  html += '<h3 style="font-size: 24px; margin: 32px 0 16px; color: var(--text-primary);">Junior Secondary School</h3>';
  html += generateReportCard('jss1', studentData.jssGrades.jss1, 'JSS 1');
  html += generateReportCard('jss2', studentData.jssGrades.jss2, 'JSS 2');
  html += generateReportCard('jss3', studentData.jssGrades.jss3, 'JSS 3');
  
  // SS Years
  html += '<h3 style="font-size: 24px; margin: 32px 0 16px; color: var(--text-primary);">Senior Secondary School</h3>';
  html += generateReportCard('ss1', studentData.ssGrades.ss1, 'SS 1');
  html += generateReportCard('ss2', studentData.ssGrades.ss2, 'SS 2');
  html += generateReportCard('ss3', studentData.ssGrades.ss3, 'SS 3');
  
  transcriptContent.innerHTML = html;
}

// Load testimonial content
function loadTestimonial() {
  const testimonialContent = document.getElementById('testimonialContent');
  testimonialContent.innerHTML = generateTestimonial();
}

// Calculate and display CGPAs
function displayCGPAs() {
  const jssAvg = [
    calculateAverage(studentData.jssGrades.jss1),
    calculateAverage(studentData.jssGrades.jss2),
    calculateAverage(studentData.jssGrades.jss3)
  ].reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / 3;
  
  const ssAvg = [
    calculateAverage(studentData.ssGrades.ss1),
    calculateAverage(studentData.ssGrades.ss2),
    calculateAverage(studentData.ssGrades.ss3)
  ].reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / 3;
  
  const overallAvg = (jssAvg + ssAvg) / 2;
  
  const jssGPA = calculateCGPA(jssAvg);
  const ssGPA = calculateCGPA(ssAvg);
  const overallGPA = calculateCGPA(overallAvg);
  
  // Animate counters
  animateValue('jssGPA', 0, jssGPA, 1000);
  animateValue('ssGPA', 0, ssGPA, 1000);
  animateValue('overallGPA', 0, overallGPA, 1000);
}

// Animate number counter
function animateValue(id, start, end, duration) {
  const element = document.getElementById(id);
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = current.toFixed(2);
  }, 16);
}

// Initialize on page load
window.addEventListener('load', () => {
  loadTranscript();
  loadTestimonial();
  displayCGPAs();
});