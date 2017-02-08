import React                from "react";
import {bindActionCreators} from "redux";
import {connect}            from "react-redux";
import {SayHello}           from "../actions/main.actions";

import Grade from "../components/grade";

class MainApp extends React.Component {
    constructor(props) {
        super(props)
    }
    renderGrades() {
        return this.props.main.grades.map((grade) => {
            return (
                <Grade subject={grade.subject} unit={grade.unit} grade={grade.grade} />
            )
        });
    }
    render() {
        return (
            <div>
                <h1>GWA Calculator</h1>
                {this.renderGrades()}
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
        SayHello: SayHello
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainApp);