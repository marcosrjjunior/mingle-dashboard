import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Projects from './Projects.js';
import 'bulma/css/bulma.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {username: '', password: ''},
            projects: [],
            currentProject: {},
        };

        this.submitLogin = this.submitLogin.bind(this);
        this.makeRequest = this.makeRequest.bind(this);
        this.currentProject = this.currentProject.bind(this);
    }

    render() {
        const isLoggedIn = this.state.projects.length === 0;

        return (
            <div className="App">
                <div className="App-header">
                </div>

                {isLoggedIn ? (
                    <Login submitLogin={this.submitLogin} />
                ) : (
                    <Projects projects={this.state.projects} user={this.state.user} currentProject={this.currentProject} />
                )}
            </div>
        );
    }

    submitLogin(data) {
        this.setState({user: data}, this.makeRequest(data));
    }

    currentProject(project) {
        this.setState({currentProject: project});
    }

    makeRequest(data) {
        fetch(`http://${process.env.REACT_APP_HOST}/api/mingle/projects?password=${data.password}&username=${data.username}`).then(function(response) {
            return response.json();
        }).then(function(data) {
            this.setState({
                projects: data.project
            });
        }.bind(this));
    }

}

export default App;
