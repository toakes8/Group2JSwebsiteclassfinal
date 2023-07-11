// Function to handle the form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the form inputs
    const titleInput = document.getElementById('title');
    const teacherInput = document.getElementById('teacher');
  
    // Create a new course object
    const newCourse = {
      id: courses.length + 1, // Generate a new ID based on the number of existing courses
      title: titleInput.value,
      teacher: teacherInput.value
    };
  
    // Add the new course to the list of courses
    courses.push(newCourse);
  
    // Clear the form inputs
    titleInput.value = '';
    teacherInput.value = '';
  
    // Redirect to the All Courses page after adding the course
    window.location.href = 'courses.html';
  }
  
  // Add event listener to the form submission
  const addCourseForm = document.getElementById('add-course-form');
  addCourseForm.addEventListener('submit', handleFormSubmission);
  