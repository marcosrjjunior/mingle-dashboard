import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {}
        }
    }

    render() {
        const { project } = this.props;
        const { showModal } = this.props;

        return (
            <div className="column is-one-quarter Project">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {project.name}
                        </p>
                        <a className="card-header-icon">
                            <span className="icon">
                                <i className="fa fa-angle-down"></i>
                            </span>
                        </a>
                    </header>

                    <div className="card-content">
                        <div className="content">
                            <small>{project.created_at}</small>
                        </div>
                    </div>

                    <footer className="card-footer">
                        <a className="card-footer-item" onClick={() => showModal(project)}>Details</a>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Project;
