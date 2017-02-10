import React                from "react";
import {bindActionCreators} from "redux";
import {connect}            from "react-redux";
import {
    AddNewRow,
    Calculate,
    HandleUnitChange,
    HandleScoreChange,
    HandleSubjectChange
} from "../actions/main.actions";

import Grade from "../components/grade";

class MainApp extends React.Component {
    constructor(props) {
        super(props)
    }
    renderGrades() {
        return this.props.main.grades.map((grade) => {
            return (
                <Grade
                    key={grade.id}
                    gradeId={grade.id}
                    subject={grade.subject}
                    unit={grade.unit}
                    score={grade.score}
                    onUnitChange={this.props.HandleUnitChange}
                    onScoreChange={this.props.HandleScoreChange}
                    onSubjectChange={this.props.HandleSubjectChange}
                    />
            )
        });
    }
    render() {
        return (
            <div>
                <h1>GWA Calculator</h1>
                <div className="row">
                    <span className="col-md-4 grade-row">
                        <strong>Subject</strong>
                    </span>
                    <span className="col-md-2 grade-row">
                        <strong>Unit</strong>
                    </span>
                    <span className="col-md-2 grade-row">
                        <strong>Grade</strong>
                    </span>
                </div>

                {this.renderGrades()}

                <div className="row gwa-container">
                    <div className="col-md-2">
                        <button onClick={this.props.AddNewRow}
                            className="btn btn-info btn-block" type="button">Add New</button>
                    </div>
                    <div className="col-md-2">
                        <button onClick={() => {this.props.Calculate(this.props.main.grades)}}
                            className="btn btn-info btn-block" type="button">Calculate</button>
                    </div>
                </div>
                {
                    (this.props.main.gwa !== undefined)
                    ?
                    <div className="row gwa-container">
                        <div className="col-md-6">
                            <div className="alert alert-info gwa-result">
                                <h4>Your GWA is {Number(this.props.main.gwa).toFixed(4)}</h4>
                                <p>Total Units: {this.props.main.total_units}</p>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        );
    }


}

function mapStateToProps(state) {
    return {
        main: state.mainReducer
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        AddNewRow: AddNewRow,
        Calculate: Calculate,
        HandleUnitChange: HandleUnitChange,
        HandleScoreChange: HandleScoreChange,
        HandleSubjectChange: HandleSubjectChange
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainApp);