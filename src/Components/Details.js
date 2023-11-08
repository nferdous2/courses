import { useLoaderData } from "react-router-dom";

const Details = () => {
    const courses = useLoaderData();

    const {name,thumbnail,instructor,description,enrollmentStatus,duration,schedule,location,prerequisites,syllabus
       , dueDate} = courses;
       const enrollInCourse = () => {
        const enrolledCourse = {
          id: courses.id,
          name: courses.name,
          instructor: courses.instructor,
          thumbnail: courses.thumbnail,
          dueDate: courses.dueDate,
        };
      
        // Retrieve the list of enrolled courses from local storage
        const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
      
        // Check if the course is already enrolled
        const isAlreadyEnrolled = enrolledCourses.some((course) => course.id === courses.id);
      
        if (isAlreadyEnrolled) {
          alert('You have already enrolled in this course!');
        } else {
          // If not already enrolled, add it to the list of enrolled courses
          enrolledCourses.push(enrolledCourse);
          localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
          alert('Course enrolled successfully!');
          window.location.href = '/dashboard';
        }
      };
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <img src={thumbnail} className="card-img-top" alt={name} />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Instructor:</strong> {instructor}</li>
                            <li className="list-group-item"><strong>Enrollment Status:</strong> {enrollmentStatus}</li>
                            <li className="list-group-item"><strong>Duration:</strong> {duration}</li>
                            <li className="list-group-item"><strong>Schedule:</strong> {schedule}</li>
                            <li className="list-group-item"><strong>Location:</strong> {location}</li>
                            <li className="list-group-item"><strong>Due:</strong> {dueDate}</li>

                            <li className="list-group-item">
                                <strong>Prerequisites:</strong> {prerequisites.join(', ')}
                            </li>
                            <li className="list-group-item">
                                <strong>Syllabus:</strong>
                                <ul>
                                    {syllabus.map((item) => (
                                        <li key={item.week}>
                                            <strong>Week {item.week}:</strong> {item.topic}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        <div>
                        <button type="button"  onClick={enrollInCourse}
                           className="btn btn-warning m-2 w-100">Enroll</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
