import React from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';



function PageElement(props) {


    const {pages, currentPage} = props;

    switch (currentPage) {
        case 'aboutme':
            return (<AboutMe />);
        case 'portfolio':
            return (<Portfolio />);
        default:
            return (<AboutMe />);
    }
}


export default PageElement;