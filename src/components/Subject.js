import React from 'react';
import { showCover } from './utils';
import { DynamicComponent } from './allComponents';

class Subject extends React.Component {

    render() {

        return (
            <React.Fragment>
                {showCover(`${this.props.cover}`, `${this.props.bgc}`)}
                <DynamicComponent name={this.props.name} />
            </React.Fragment>
        );
    };
}

export default Subject;
