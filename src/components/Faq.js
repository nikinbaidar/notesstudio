import  React from 'react';

import { loadFAQ } from '../dataLoader';
import { SEO } from './Seo';

class Faq extends React.Component {

    faq = loadFAQ().map((item) => {
        const elem = {
            id: crypto.randomUUID(),
            question: item.question,
            answer: item.answer
        };
        return (
            <React.Fragment key={elem.id}>
                <li className="faq q">{elem.question}</li>
                <li className="faq a">{elem.answer}</li>
            </React.Fragment>
        );
    });
    
    render() {
        return(
            <>
            <div class="master">
            <SEO title={`${this.props.title}`} />
            <h1>FAQ</h1>
            {this.faq}
            </div>
            </>
        );
    }
}

export default Faq;
