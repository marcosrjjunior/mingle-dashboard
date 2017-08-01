import React, { Component } from 'react';
import Story from './Story.js';

class Sprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            story: {},
        }
    }

    componentWillMount() {
        fetch(`http://${process.env.REACT_APP_HOST}/api/mingle/project?project=${this.props.project.identifier}&password=${this.props.user.password}&username=${this.props.user.username}`).then(function(response) {
            return response.json();
        }).then(function(data) {
            this.setState({
                loaded: true,
                story: data.card
            });
        }.bind(this));
    }

    renderSprint() {
        return <span>CARD</span>;
    }

    render() {
        const loaded = this.state.loaded;
        const story = this.state.story;

        return (
            <div>
                <h2 className="title">Current Sprint</h2>
                {! loaded ? (
                    <span>Loading..</span>
                ) : (
                    <Story story={story} />
                )}
            </div>
        );
    }
}

export default Sprint;
