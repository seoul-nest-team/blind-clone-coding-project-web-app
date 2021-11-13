import React from 'react';
import {
    Typography,
    Container,
    TextField,
    Autocomplete,
    Grid,
} from '@mui/material';

function CompanyReview() {
    return (
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
    );
}

export default CompanyReview;
