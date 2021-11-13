import React from 'react';
import { useSelector } from 'react-redux';
import CompanyReview from '../component/companyreview/container/CompanyReview';
import Home from '../component/home/container/Home';

function Content() {
    //useSelector 훅은 리덕스에서 액션이 처리가 되면 반환하는 값의 이전값을 기억했다가 이 값이 변경되었을 때 이 컴포넌트를 다시 렌더링 해 줌
    const tab = useSelector((state: any) => state.appbar.tab);
    
    return tab === 'home' ? <Home /> : <CompanyReview />;
}

export default Content;
