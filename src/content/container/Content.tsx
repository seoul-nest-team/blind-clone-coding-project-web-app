import React from 'react';
import CompanyReview from '../component/companyreview/container/CompanyReview';
import Home from '../component/home/container/Home';

function Content() {
    return (
        <React.Fragment>
            <Home />
            <CompanyReview />
        </React.Fragment>
    );
}

export default Content;
