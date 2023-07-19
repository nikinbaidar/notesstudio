import React from 'react';
// import { SEO } from './allComponents';
import { showCover } from './utils';

export class MathFirst extends React.Component {

    render() {
        return (
            <React.Fragment>
            {showCover("Math1", "fff")}
            <div>
            <h1 className="main_heading">Engineering Mathematics I</h1>
            {LoremIpsum}
            </div>
            </React.Fragment>

        )
    }
};


export class Physics extends React.Component {

    render() {
        return (
            <React.Fragment>
            {showCover("Physics", "31343d")}
            <h1 className="main_heading">Physics</h1>
            {LoremIpsum}
            </React.Fragment>

        )
    }
};

const LoremIpsum = (
            <>
                <p>Insert a subject description here.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus eros non sapien lobortis elementum. Pellentesque ac metus quis magna scelerisque ullamcorper. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus massa vel diam sollicitudin, eget accumsan mi finibus. Ut efficitur tortor eget mi luctus, vel tincidunt urna eleifend. Maecenas posuere velit at eros scelerisque, eu accumsan dui interdum. Aenean eu mauris est. Nunc vitae sapien nunc. In fermentum odio eu turpis lacinia lacinia. Mauris convallis nulla non massa maximus iaculis. Phasellus dictum massa at massa tempus, et varius justo condimentum. Nullam non diam ut nisl scelerisque hendrerit vitae id ipsum. Maecenas congue elit vitae dolor rhoncus, vitae dapibus odio egestas. Suspendisse potenti. Sed in sapien ipsum. Integer vitae finibus ex. Mauris consectetur risus a est tempus, vel cursus mi viverra. Aenean efficitur dapibus sagittis. Donec maximus lectus urna, ac venenatis tortor volutpat at. Fusce maximus aliquam iaculis. Vestibulum tincidunt, est vitae euismod ultrices, eros metus eleifend lacus, non dignissim ante orci in velit. Praesent nec volutpat arcu, nec facilisis tellus. Mauris in congue ipsum. Vivamus vulputate neque nec felis placerat consequat. Aliquam sed feugiat lectus.</p>

                <p>Mauris et consequat ex. Nulla facilisi. Fusce aliquet rutrum dolor, at ullamcorper leo suscipit nec. Suspendisse potenti. Aenean hendrerit nulla vel mi ultrices dapibus. Phasellus pretium aliquet ante, ac congue tortor finibus in. Mauris sed ipsum fringilla, ullamcorper metus in, consequat ligula. Nullam id dapibus tellus. In ut semper est, in facilisis quam. Nulla facilisi.</p>

                <p>Vestibulum semper enim a mi sollicitudin dapibus. Vestibulum vitae efficitur libero. Fusce at ipsum a mauris eleifend viverra. Mauris facilisis, turpis a varius tincidunt, est lorem vulputate metus, ac efficitur massa tortor a arcu. Aenean et nisl a velit tincidunt rutrum id in mi. Sed non magna at elit laoreet dictum non ut tortor. Mauris semper mi eu sem volutpat pellentesque. Sed eget pulvinar sem. Aenean elementum odio urna, ac tempor nulla scelerisque id. Curabitur non nibh augue. Nunc efficitur mi sit amet est eleifend.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus eros non sapien lobortis elementum. Pellentesque ac metus quis magna scelerisque ullamcorper. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus massa vel diam sollicitudin, eget accumsan mi finibus. Ut efficitur tortor eget mi luctus, vel tincidunt urna eleifend. Maecenas posuere velit at eros scelerisque, eu accumsan dui interdum. Aenean eu mauris est. Nunc vitae sapien nunc. In fermentum odio eu turpis lacinia lacinia. Mauris convallis nulla non massa maximus iaculis. Phasellus dictum massa at massa tempus, et varius justo condimentum. Nullam non diam ut nisl scelerisque hendrerit vitae id ipsum. Maecenas congue elit vitae dolor rhoncus, vitae dapibus odio egestas. Suspendisse potenti. Sed in sapien ipsum. Integer vitae finibus ex. Mauris consectetur risus a est tempus, vel cursus mi viverra. Aenean efficitur dapibus sagittis. Donec maximus lectus urna, ac venenatis tortor volutpat at. Fusce maximus aliquam iaculis. Vestibulum tincidunt, est vitae euismod ultrices, eros metus eleifend lacus, non dignissim ante orci in velit. Praesent nec volutpat arcu, nec facilisis tellus. Mauris in congue ipsum. Vivamus vulputate neque nec felis placerat consequat. Aliquam sed feugiat lectus.</p>

                <p>Vestibulum semper enim a mi sollicitudin dapibus. Vestibulum vitae efficitur libero. Fusce at ipsum a mauris eleifend viverra. Mauris facilisis, turpis a varius tincidunt, est lorem vulputate metus, ac efficitur massa tortor a arcu. Aenean et nisl a velit tincidunt rutrum id in mi. Sed non magna at elit laoreet dictum non ut tortor. Mauris semper mi eu sem volutpat pellentesque. Sed eget pulvinar sem. Aenean elementum odio urna, ac tempor nulla scelerisque id. Curabitur non nibh augue. Nunc efficitur mi sit amet est eleifend.</p>
            </>
        );


































