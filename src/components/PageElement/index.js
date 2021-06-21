import React from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';



function PageElement(props) {


    const {pages, currentPage} = props;

    switch (currentPage) {
        case 'aboutme':
            return (<AboutMe />);
        case 'portfolio':
            return (<Portfolio />);
        case 'resume':
            return (<Resume />);
        case 'contact':
            return (<Contact />);
        default:
            return (<AboutMe />);
    }
}


export default PageElement;