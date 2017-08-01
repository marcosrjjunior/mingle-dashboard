import React, { Component } from 'react';
import './Story.css';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    findProperty(property, name) {
        var result = property.filter(function(p) {
            return p.name === name;
        })[0];

        if (name === 'Status') {
            return result ? (typeof result.value === 'string') ? result.value : '' : '';
        }

        return result ? (typeof result.value === 'string') ? result.value : result : '';
    }

    render() {
        let story = <div className="column"><span>Empty</span></div>;
        if (this.props.story) {
            story = this.props.story.map((story, key) => {
                let properties = story.properties ? story.properties : '';
                let status = this.findProperty(properties.property, 'Status');
                let owner = this.findProperty(properties.property, 'Owner');
                let priority = this.findProperty(properties.property, 'Priority');

                return (
                    <div key={story.id} className="column is-one-quarter">
                        <div className="card Story-card">
                            <header className={"card-header Story-card-header " + priority}>
                                <a className="card-header-icon">
                                    <span>#{story.number} {status ? status : ''}</span>
                                </a>
                            </header>
                            <div className="card-content Story-card-content">
                                <div className="content">
                                    <small>{owner.value.name ? '@'+owner.value.name+': ' : ''} {story.name}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }

        return (
            <div className="columns is-multiline">
                {story}
            </div>
        );
    }
}

export default Story;
