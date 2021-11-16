import React from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import {
    getLoginPopupOpened,
    getSelectedTab,
} from '../../../../appbar/state/selector';

function Home() {
    const [selectedTab, loginPopupOpened] = useSelector((state: any) => [
        getSelectedTab(state),
        getLoginPopupOpened(state),
    ]);

    return (
        <Container
            maxWidth="lg"
            sx={
                !loginPopupOpened && selectedTab === 'home'
                    ? {}
                    : { display: 'none' }
            }
        >
            HOME 화면
        </Container>
    );
}

export default Home;
