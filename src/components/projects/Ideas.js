import React from 'react';

class Ideas extends React.Component {

    render() {
        return (
            <React.Fragment>

            <div>
            <h1 className="main_heading">Project Ideas</h1>  
            <hr/>
            <div>
            <h3>Current small tasks</h3>
            <ul>
            <li>A dark theme.</li>
            <li>Fix typos and formatting errors. </li>
            {/* <li>Write content for Blog. Maybe start with a bunch of essays.</li> */}
            {/* <li>A dark theme.</li> */}
            </ul>
            </div>

            <div>
            <h3>Current major tasks</h3>
            <ul>
            <li>Write content for this site.</li>
            <li>A backend.</li>
            </ul>
            </div>

            <div>

            <h3>Hardware projects</h3>

            <p>The listed ideas generally require a basic knowledge of C and/or Python and may also require experinece with UNIX-like operating systems. The difficulty may range from medium to high.</p>
            </div>

            </div>
            </React.Fragment>
        );
    }
}

export default Ideas;
