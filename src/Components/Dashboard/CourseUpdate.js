
import React, { useState } from "react";

const CourseUpdate = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(
    JSON.parse(localStorage.getItem("enrolledCourses")) || []
  );
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleCompleteCourse = (course) => {
    const updatedEnrolledCourses = enrolledCourses.map((enrolledCourse) => {
      if (enrolledCourse.id === course.id) {
        return { ...enrolledCourse, completed: true };
      }
      return enrolledCourse;
    });

    // Add the completed course to the completed courses.
    setCompletedCourses([...completedCourses, course]);

    // Update the enrolled courses in state and localStorage.
    setEnrolledCourses(updatedEnrolledCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedEnrolledCourses));
  };

  return (
    <div className="container">
      <h1>Enrolled Courses</h1>
      <div className="row row-cols-1 row-cols-md-3">
        {enrolledCourses.map((course) => (
          <div className="col mb-3" key={course.id}>
            <div className="card">
              <img src={course.thumbnail} alt={course.name} />
              <h2>{course.name}</h2>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Due Date:</strong> {course.dueDate}</p>
              <p><strong>Progress:</strong> {course.progress}%</p>
              <div className="progress">
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <button
                className={`btn btn-sm rounded py-2 px-4 m-3 ${course.completed ? 'btn-secondary' : 'btn-primary'}`}
                style={{ color: "aliceblue" }}
                onClick={() => handleCompleteCourse(course)}
                disabled={course.completed}
              >
                {course.completed ? 'Completed' : 'Mark Completed'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseUpdate;
