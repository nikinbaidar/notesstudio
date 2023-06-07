import  React from 'react';
import { NavLink } from "react-router-dom";
import { SEO } from './Seo';

import { loadCards, covers } from '../dataLoader';

class Card extends React.Component {

    constructor(props) {
        super(props);
        const selection = parseInt(props.name);
        const subjects = loadCards("semesters").map(({semester, subjects}) => {
            return subjects.map((
                {name, path, cover, description}) => ({
                    name, path, cover, description
                }));
        });
        this.selection = selection;
        this.allSub = subjects;
        this.state = {
            selection: selection,
            subjects: subjects[selection],
        };
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

    generateSubjectElements = () => {
        const subjects = this.state.subjects.map((item, index) => {
            const elem = {
                id: crypto.randomUUID(),
                label: item.name,
                path: item.path,
                cover: (item.cover) ? item.cover : "Escape",
                description: (item.description) ? item.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            };

            return(
                <React.Fragment key={elem.id}>
                <NavLink to={elem.path}>
                <div className="options card">
                    <div className="img-container">
                    <img src={covers[elem.cover]} alt=""/> 
                    </div>
                    <p>
                    {elem.label}
                    <span id="rule"></span>
                    <span className="info">
                    {elem.description}</span>
                    </p> 
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
            <SEO 
            title={`${this.props.title}`} 
            name="Biomedical Engineering" type="article"
            description="biomedical engineering, nepal engineering council"
            />
            <h1 style={{ marginLeft: '1rem' }}
            className="main_heading">{this.props.title.toLowerCase()}</h1>
            <div className="congroup">
            <div className="grid-container">{subjects}</div>
            </div>
            </>
        );
    }
}

export default Card;
