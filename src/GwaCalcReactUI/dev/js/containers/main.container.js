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
                {this.renderGrades()}

                <button onClick={this.props.AddNewRow}>Add New Row</button>

                <button onClick={() => {this.props.Calculate(this.props.main.grades)}}>Calculate</button>

                <div className="result">
                    <h3>Your GWA is {this.props.main.gwa}</h3>
                    <h3>Total Units {this.props.main.total_units}</h3>
                </div>
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