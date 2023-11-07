import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [service, setService] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data);
                setFilteredCourses(data); // Initialize filtered courses with all courses
            });
    }, []);

    const handleSearch = () => {
        const searchText = searchInput.toLowerCase();
        const filtered = service.filter(pd => pd.name.toLowerCase().includes(searchText));
        setFilteredCourses(filtered);
    };

    const handleSearchInputChange = (e) => {
        const searchText = e.target.value.toLowerCase();
        setSearchInput(searchText);

        const filtered = service.filter(pd => pd.name.toLowerCase().includes(searchText));
        setFilteredCourses(filtered);
    };

    return (
        <div>
            <div className="container">
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Courses"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                    <div className="col">
                        <button
                            className="btn btn-primary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {filteredCourses.map((pd) => (
                        <div className="col" key={pd.id}>
                            <div className="card h-100">
                                <div className="position-relative h-50">
                                    <img src={pd.thumbnail} className="card-img h-100" alt="" />
                                    <small style={{ backgroundColor: "orange" }}
                                        className="position-absolute translate-middle-y text-white rounded py-1 px-3 top-100 start-0">New Course</small>
                                </div>
                                <div className="card-body d-flex flex-column mt-5">
                                    <h5>{pd.name}</h5>
                                    <p>{pd.description}</p>
                                    <p><strong>Instructor:</strong> {pd.instructor}</p>
                                    <div className="mt-auto d-flex justify-content-between">
                                    <Link to={`/details/${pd.id}`} className="btn btn-sm rounded py-2 px-4" style={{ backgroundColor: "orange", color: "aliceblue" }}>
                                View Detail
                            </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
