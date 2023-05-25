import  React from 'react';
import { NavLink } from "react-router-dom";
import { SEO } from './Seo';

import { loadCurriculum } from '../dataLoader';

class Semesters extends React.Component {

    constructor(props) {
        super(props);
        const selection = parseInt(props.name);
        const subjects = loadCurriculum().map(({semester, subjects}) => {
            return subjects.map(({name, path}) => ({name, path}));
        });
        this.selection = selection;
        this.allSub = subjects;
        this.state = {
            selection: selection,
            subjects: subjects[selection],
        }

    }
    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            const newSelection = parseInt(this.props.name);
            this.setState({
                selection: newSelection,
                subjects: this.allSub[newSelection],
            });
        }
    }

    handleClick = (event) => {
        alert("You've just clicked " + event.target.textContent);
    }

    generateSubjectElements = () => {
        const subjects = this.state.subjects.map((item, index) => {
            const elem = {
                id: crypto.randomUUID(),
                label: item.name,
                path: item.path
            };

            return(
                <React.Fragment key={elem.id}>
                <NavLink to={elem.path}>
                    <div className="options">
                    <p>{elem.label}</p>
                    </div>
                </NavLink>
                </React.Fragment>
            );
        });
        return subjects;
    }

    render() {
        const subjects = this.generateSubjectElements();

        return (
            <>
            <SEO title={this.props.title} name="Biomedical Engineering" type="article"
            description="biomedical engineering, nepal engineering council" />
            <div class="congroup">
                <h1 className="main_heading">{this.props.title} semester</h1>
                <hr/>
                <div className="grid-container">{subjects}</div>
            </div>
            </>
        );
    }
}

export default Semesters;
