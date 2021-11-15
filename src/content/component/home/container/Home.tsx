import React from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { getSelectedTab } from '../../../../appbar/state/selector';

function Home() {
    const [selectedTab] = useSelector((state: any) => [getSelectedTab(state)]);

    return (
        <Container
            maxWidth="lg"
            sx={selectedTab === 'home' ? {} : { display: 'none' }}
        >
            HOME 화면
        </Container>
    );
}

export default Home;
