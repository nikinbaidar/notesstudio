import  React from 'react';

class Advertisements extends React.Component {

    render() {
        return(
            <div id="ads">

            <a href="https://bit.ly/3Fw7B3R">
                <div className="coffee">
                <img src={require("../Images/BuyMeACoffee.jpg")} alt=""/>
                <p>A cup of coffee and your support keeps me fueled!</p> 
                </div>
            </a>

            </div>
        );
    }
}

export default Advertisements;
