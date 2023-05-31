import React from 'react';

import { showCover } from './utils';
import DynamicComponent from './Dynamic';

class Subject extends React.Component {

    render() {

        return (
            <React.Fragment>
            {showCover(`${this.props.cover}`, `${this.props.bgc}`)}
            <DynamicComponent props={this.props} />
            </React.Fragment>
        )
    }
}

export default Subject;
