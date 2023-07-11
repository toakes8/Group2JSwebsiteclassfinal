// Function to get the course ID from the URL query parameter
function getCourseId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  
  // Function to display the details of an individual course
  function displayCourse() {
    const courseId = getCourseId();
  
    // Find the course with the given ID
    const course = courses.find(course => course.id === parseInt(courseId));
  
    if (course) {
      const courseDetails = document.getElementById('course-details');
      courseDetails.innerHTML = `
        <h3>${course.title}</h3>
        <p>Teacher: ${course.teacher}</p>
      `;
    } else {
      const courseDetails = document.getElementById('course-details');
      courseDetails.innerHTML = '<p>Course not found.</p>';
    }
  }
  
  // Call the displayCourse function when the page loads
  window.onload = displayCourse;
  