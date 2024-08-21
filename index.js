function addCourse() {
  const courseWrapper = document.getElementById('course-wrapper');
  const formCount = document.querySelectorAll('form').length;
  const newForm = document.createElement('form');
  newForm.className =` key-${formCount}`;
  newForm.innerHTML = `
    <input type="text" placeholder="Course Code" class="courses key-${formCount}" required />
    <input type="number" class="credit-units key-${formCount}" placeholder="Credit Units" value="" required />
    <select class="grade key-${formCount}" required>
      <option class="grade" value="select">Select</option>
      <option class="grade" value="10">O</option>
      <option class="grade" value="9">A+</option>
      <option class="grade" value="8">A</option>
      <option class="grade" value="7">B+</option>
      <option class="grade" value="6">B</option>
      <option class="grade" value="5">C+</option>
      <option class="grade" value="4">C</option>
      <option class="grade" value="0">U</option>
    </select>
  `;
  courseWrapper.appendChild(newForm);
}

function removeCourse() {
  const courseWrapper = document.getElementById('course-wrapper');
  const formCount = document.querySelectorAll('form').length;
  if (formCount > 1) {
      courseWrapper.removeChild(courseWrapper.lastChild);
  }
}

function calcCgpa() {
  const forms = document.querySelectorAll('form');
  let totalCredits = 0;
  let weightedSum = 0;

  forms.forEach((form) => {
      const creditUnits = parseFloat(form.querySelector('.credit-units').value);
      const gradeValue = parseFloat(form.querySelector('.grade').value);
    
      if (!isNaN(creditUnits) && !isNaN(gradeValue)) {
          totalCredits += creditUnits;
          weightedSum += creditUnits * gradeValue;
      }
  });

  const cgpa = weightedSum / totalCredits;

  document.getElementById('cgpa-calc').innerText = `Your CGPA is: ${cgpa.toFixed(2)} / 10`;
}

