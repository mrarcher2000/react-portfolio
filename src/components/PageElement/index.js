import React from 'react';
import AboutMe from '../AboutMe';



function PageElement(props) {


    const {pages, currentPage} = props;

    switch (pages) {
        case 'aboutme':
            return (<AboutMe />);
        default:
            return (<AboutMe />);
    }
}


export default PageElement;