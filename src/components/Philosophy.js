import React from 'react';

class Philosophy extends React.Component {

    render() {
        return (
            <>
            <div className="master no-sidebar terms spacebelow">

            <article>
            <h1 className="main_heading">Philosophy</h1>
            <hr/>

            <div>

            <p>Our philosophy centers around simplicity, minimalism, and
            usability. This web app is built using ReactJS. Each component does
            one thing and, does it well. We strongly believe that this approach
            should be the prevailing philosophy in the IT industry.
            Unfortunately, the current software industry seems to lean towards
            complexity, error-proneness, and sluggishness. Code complexity is
            the mother of bloated, hard to use and totally inconsistent
            software. With complex code, problems can only be solved in
            suboptimal ways, valuable resources are endlessly tied up,
            performance slows to a halt, and vulnerabilitites become a
            commonplace. Our aim is to challenge this trend through our
            software projects, demonstrating the opposite. Simplicity is the
            heart of our philosophy. Ingenious ideas are simple. Ingenious
            software is simple. </p>


            <p>Creating applications that is simple and elegant proves to be more challenging than allowing ad-hoc or overly ambitious features to clutter the code over time. However, it is a necessary price to pay in order to achieve reliability and maintainability. Additionally, adopting minimalism sets realistic and achievable goals. We are committed to upholding minimalism and clarity in order to drive development towards fruition. The web is a practical example why corportate software development does not work and never will. It only ruins our environment, sanity and many brains which could beused for the better of humanity.</p>

            </div>

            <div>
            <h2 className="main_heading">Manifest</h2>

            <div>
            <h3>The defaults are trash</h3><p>Dont' let your text hit the side of the browser. You ever see a book like that? Yes? What a shitty book.</p>
            </div>


            <div> <h3>A little less contrast</h3>
            <p>Pure black on pure white?
            How often do you see that kind of contrast in real life? Tone it
            down a bit. The print on your newspaper is not true black, nor is the text on your screen. I love what the creator of <a
            href="https://pineapplegiant.github.io/spaceduck/"
            className="need-attention">this site's color inspiration</a> did.</p> 

            <div>
            <h3>Related Links</h3>

            <ul>
            <li><a className="need-attention" href="https://contrastrebellion.com/">Contrast rebellion</a></li>
            <li><a href="https://darkcoding.net/software/facebooks-code-quality-problem/" className="need-attention">Facebook's code quality problem</a></li>
            <li><a href="https://www.youtube.com/watch?v=RD_SLJG7oi8" className="need-attention">Why design should include everyone</a></li>
            </ul>
            </div>
            </div>

            </div>
            </article>


            </div>
            </>
        );
    }
}

export default Philosophy;
