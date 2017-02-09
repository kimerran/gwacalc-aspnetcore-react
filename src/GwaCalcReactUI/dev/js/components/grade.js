import React from "react";

class Grade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.gradeId
        }

        this.onUnitChange = props.onUnitChange;
        this.onScoreChange = props.onScoreChange;
        this.onSubjectChange = props.onSubjectChange;
    }

    handleSubjectChange(event) {
        this.onSubjectChange(this.state.id, event.target.value);
    }

    handleScoreChange(event) {
        this.onScoreChange(this.state.id, event.target.value);
    }

    handleUnitChange(event) {
        this.onUnitChange(this.state.id, event.target.value);
    }

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
                    <input onChange={this.handleScoreChange.bind(this)} type="text" value={this.state.grade} />
                </div>
            </div>
        );
    }
}

export default Grade;