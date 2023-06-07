import React from 'react';
import { Master } from './allComponents';

class Subject extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Master name={this.props.name} />
            </React.Fragment>
        );
    };
}

export default Subject;
