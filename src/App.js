import React from 'react';

import Navigation from './Components/NavigationBar';
import Sidebar from './Components/Sidebar';
import Advertisements  from './Components/Ads';
import Copyright from './Components/Copyright.js';

import {
    Home,
    Quiz,
    CreateComponent,
} from './Components/Main';

import './App.css';
import './Queries.css';

const componentMap = {
    "2079 Exam": Quiz,
    Semesters : Home,
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: <Home/>
        };
    };

    handleSidebarItem = (item) => {
        const Component = componentMap[item];

        if (Component)
            this.setState({content: <Component />});
        else
            this.setState({content: <CreateComponent />});
    }

    render() {
        return (
            <>
            <Navigation/>
            <section>
            <Sidebar onItemSelected={this.handleSidebarItem}/>
            <div id="main">
                {this.state.content}
            </div>
            <Advertisements/>
            </section>
            <Copyright/>
            </>
        )
    }; 
}

export default App;
