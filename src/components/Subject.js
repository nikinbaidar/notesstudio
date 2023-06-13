import React from 'react';
import { Master, SEO } from './allComponents';

class Subject extends React.Component {

    render() {

        return (
            <React.Fragment>
                <SEO title={this.props.name} />
                <Master name={this.props.name} />
            </React.Fragment>
        );
    };
}

export default Subject;
