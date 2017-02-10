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
            <div className="gwa-container">
                <div className="row form-horizontal grade-row-set">
                    <div className="col-md-4 grade-row">
                        <input onChange={this.handleSubjectChange.bind(this)} type="text" value={this.state.subject} className="form-control" />
                    </div>
                    <div className="col-md-2 grade-row">
                        <input onChange={this.handleUnitChange.bind(this)} type="text" value={this.state.unit} className="form-control" />
                    </div>
                    <div className="col-md-2 grade-row">
                        <input onChange={this.handleScoreChange.bind(this)} type="text" value={this.state.grade} className="form-control" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Grade;