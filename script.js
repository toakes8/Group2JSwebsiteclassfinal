// data 
const courses = [
    { id: 1, title: 'Science', teacher: 'Declan Rice' },
    { id: 2, title: 'English', teacher: 'Ray Wilkins' },
    { id: 3, title: 'Geology', teacher: 'David Seaman' }
  ];
  
 // Function to display all courses
function displayCourses() {
    const courseList = document.getElementById('course-list');
  
    // Clear previous course list
    courseList.innerHTML = '';
  
    // Add each course to the list
    courses.forEach(course => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="course.html?id=${course.id}">${course.title}</a> (Teacher: ${course.teacher})
        <button onclick="deleteCourse(${course.id})">Delete</button>
      `;
      courseList.appendChild(listItem);
    });
  }
  
  // Function to delete a course
  function deleteCourse(courseId) {
    // Find the index of the course with the given ID
    const courseIndex = courses.findIndex(course => course.id === courseId);
  
    if (courseIndex !== -1) {
      // Remove the course from the list
      courses.splice(courseIndex, 1);
    }
  
    // Re-display the courses after deleting
    displayCourses();
  }
  
  // Call the displayCourses function when the page loads
  window.onload = displayCourses;
  
  