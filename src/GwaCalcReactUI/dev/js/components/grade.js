import React                from "react";

class Grade extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subject: props.subject,
            grade: props.grade,
            unit: props.unit
        }
    }

    handleSubjectChange(event)  {this.setState({subject: event.target.value})}
    handleGradeChange(event)    {this.setState({grade: event.target.value})}
    handleUnitChange(event)     {this.setState({unit: event.target.value})}

    render() {
        return (
            <div style={{display: "flex"}}>
                <div>
                    <input onChange={this.handleSubjectChange.bind(this)} type="text" value={this.state.subject} />
                </div>
                <div>
                    <input onChange={this.handleUnitChange.bind(this)} type="text" value={this.state.unit} />
                </div>
                <div>
                    <input onChange={this.handleGradeChange.bind(this)} type="text" value={this.state.grade} />
                </div>
            </div>
        );
    }
}

export default Grade;