import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './Velocity.css';

class Velocity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            start: '',
            end: '',
            chardData: {}
        };

        this.renderOptions = this.renderOptions.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderVelocity = this.renderVelocity.bind(this);
    }

    componentWillMount() {
        fetch(`http://${process.env.REACT_APP_HOST}/api/mingle/project/velocity?username=${this.props.user.username}&password=${this.props.user.password}&project=${this.props.project.identifier}`).then(function(response) {
            return response.json();
        }).then(function(data) {
            if (data) {
                this.setState({
                    options: data
                });
            }
        }.bind(this));
    }

    renderOptions() {
        let options = []
        if (this.state.options) {
            options = Object.values(this.state.options).map((option, key) => {
                return <option value={option['Sum Velocity']} key={option.Name}>{option.Name}</option>
            });
        }

        return (
            <div className="columns">
                <div className="column">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Start</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="select">
                                    <select
                                        name="start"
                                        type="select"
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select the Start</option>
                                        {options}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">End</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="select">
                                    <select
                                        name="end"
                                        type="select"
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select the End</option>
                                        {options}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    renderVelocity() {
        const data = {
            labels: ['Start', 'End'],
            responsive: true,
            datasets: [{
                label: 'Velocity',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 2,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 20,
                data: [this.state.start, this.state.end]
            }]
        };

        return <Line className="Velocity" data={data} />
    }

    render() {
        return (
            <div className="columns Velocity-m30">
                <div className="column">
                    <h2 className="title">Velocity</h2>
                    {this.renderOptions()}
                    {this.renderVelocity()}
                </div>
            </div>
        )
    }
}

export default Velocity;
