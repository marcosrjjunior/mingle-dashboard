import React, { Component } from 'react';
import Project from './Project.js';
import ProjectDetail from './ProjectDetail.js';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: '',
            currentProject: {}
        }

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        const projects = this.props.projects.map((project, key) => {
            return (
                <Project project={project} key={project.identifier} user={this.props.user} showModal={this.showModal} currentProject={this.props.currentProject} />
            )
        });

        const modal = this.state.modal;
        const currentProject = this.state.currentProject;

        return (
            <div className="container">
                {modal &&
                    <ProjectDetail user={this.props.user} closeModal={this.closeModal} modal={modal} project={currentProject} />
                }

                <div className="columns is-multiline">
                    {projects}
                </div>
            </div>
        );
    }

    closeModal() {
        this.setState({
            modal: '',
        });
    }

    showModal(project) {
        this.setState({
            modal: 'is-active',
            currentProject: project
        });
    }

}

export default Projects;
