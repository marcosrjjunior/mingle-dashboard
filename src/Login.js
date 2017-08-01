import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitLogin(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title">Mingle Dashboard</h1>
                    </div>
                    <div className="column">
                        <form onSubmit={this.handleSubmit}>
                            <div className="field is-horizontal">
                                <label className="field-label is-normal">Username</label>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                name="username"
                                                className="input"
                                                type="text"
                                                placeholder="username@minglecompany.com"
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <label className="field-label is-normal">Password</label>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                name="password"
                                                className="input"
                                                type="password"
                                                placeholder="Af21fG1#"
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="control">
                                <button className="button is-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
