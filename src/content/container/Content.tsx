import React from 'react';
import {
    Typography,
    Container,
    TextField,
    Autocomplete,
    Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';

function Content() {
    //useSelector 훅은 리덕스에서 액션이 처리가 되면 반환하는 값의 이전값을 기억했다가 이 값이 변경되었을 때 이 컴포넌트를 다시 렌더링 해 줌
    const tab = useSelector((state: any) => state.appbar.tab);

    return (
        <React.Fragment>
            {tab === 'home' ? (
                <Container maxWidth="lg">HOME 화면</Container>
            ) : (
                <Container maxWidth="lg">
                    <Typography variant="h3" component="div" align="center">
                        <br />
                    </Typography>
                    <Typography variant="h3" component="div" align="center">
                        진짜 현직자들의 회사 리뷰
                    </Typography>
                    <Typography variant="h6" component="div" align="center">
                        <br />
                    </Typography>
                    <Typography variant="h5" component="div" align="center">
                        실제 직원들이 평가하는 연봉과 복지는 어떤지 확인하세요.
                    </Typography>
                    <Typography variant="h6" component="div" align="center">
                        <br />
                    </Typography>
                    <Grid container justifyContent={'center'}>
                        <Autocomplete
                            id="combo-box-demo"
                            freeSolo
                            options={['1', '2']}
                            sx={{ width: '70%' }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="회사 이름으로 검색하세요"
                                />
                            )}
                        />
                    </Grid>
                </Container>
            )}
        </React.Fragment>
    );
}

export default Content;
