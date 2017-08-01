import React, { Component } from 'react';
import Velocity from './Velocity.js';
import Sprint from './Sprint.js';
import './ProjectDetail.css';

class ProjectDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: props.modal
        };

        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        const { modal } = this.state;
        const { project } = this.props;

        return (
            <div id="modal" className={'ProjectDetail modal '+modal}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <Sprint user={this.props.user} project={project} />
                        <Velocity user={this.props.user} project={project} />
                    </div>
                </div>

                <button className="modal-close is-large" onClick={this.closeModal}></button>
            </div>
        );
    }

    closeModal() {
        this.setState({modal: ''});
        this.props.closeModal();
    }
}

export default ProjectDetail;
