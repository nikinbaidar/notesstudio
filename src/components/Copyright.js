import React from 'react';
import { NavLink } from "react-router-dom";
import { loadPolicies } from '../dataLoader.js';
import { movetoTop } from './utils'

class Copyright extends React.Component {

    generatePolicy = () => {
        const policies = loadPolicies().map((item) => {
            const elem = {
                id: crypto.randomUUID(),
                label: item.name,
                path: item.path,
            };

            return (
                <li key={elem.id}>
                <NavLink to={item.path} onClick={movetoTop}>
                {elem.label}
                </NavLink>
                </li>
            );
        });

        return policies;
    }


    render() {
        const terms = this.generatePolicy();
        return(
            <div className="copyright-info">
            <ul className="terms nav_items" >{terms}</ul>
            <p>Copyright © 2023 <a title="Contact Nikin Baidar"
            href="mailto:nikinbaidarr@gmail.com">nikinbaidar</a>.
            All Rights Reserved.</p>
            </div>
        );
    }
}

export default Copyright;
