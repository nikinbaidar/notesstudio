import React from 'react';
import { showCover } from './utils';
import { Master } from './allComponents';

class Subject extends React.Component {

    render() {

        return (
            <React.Fragment>
                {showCover(`${this.props.cover}`, `${this.props.bgc}`)}
                <Master name={this.props.name} />
            </React.Fragment>
        );
    };
}

export default Subject;
