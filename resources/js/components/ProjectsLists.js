// resources/assets/js/components/ProjectsList.js

import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectsLists extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get("/projects").then(response => {
            this.setState({
                projects: response.data
            });
        });
    }

    render() {
        const { projects } = this.state;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title display-4">
                                    All projects
                                </div>

                                <Link
                                    className="btn btn-light btn-lg btn-block"
                                    to="/create"
                                >
                                    <i class="fas fa-plus-square"></i> Create
                                    new project
                                </Link>
                                <ul className="list-group list-group-flush">
                                    {projects.map(project => (
                                        <Link
                                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center h4"
                                            to={`/${project.id}`}
                                            key={project.id}
                                        >
                                            {project.name}
                                            <span className="badge badge-primary badge-pill">
                                                {project.tasks_count}
                                            </span>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsLists;
