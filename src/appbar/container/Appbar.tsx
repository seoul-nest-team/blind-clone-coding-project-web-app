import React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    TextField,
    InputAdornment,
    ButtonGroup,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { actions } from '../state';
import { getSelectedTab } from '../state/selector';
import { useDispatch, useSelector } from 'react-redux';

function Appbar() {
    //useSelector 훅은 리덕스에서 액션이 처리가 되면 반환하는 값의 이전값을 기억했다가 이 값이 변경되었을 때 이 컴포넌트를 다시 렌더링 해 줌
    //const selectedTab = useSelector((state: any) => state.appbar.selectedtab);//구닥다리 방식,
    const [selectedTab] = useSelector((state: any) => [getSelectedTab(state)]); //reselector를 이용한 selector 함수 분리, Caching과 Memoization 지원
    //const selectedTab = useSelector(getSelectedTab);   //여러개를 배열로 설정할 수도 있고, 이것처럼 단일변수로도 설정 가능

    //store에서 dispatch 함수를 가져오지 않고 useDispatch 훅으로 가져와서 사용함. 훅으로 dispatch 함수를 가져온다는 것은 dispatch 함수가 변할수도 있다는 것을 의미함(미들웨어 추가시)
    const dispatch = useDispatch();

    return (
        <Box sx={{ flexGrow: 1, '& button': { m: 1 } }}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ mr: 4 }}
                        onClick={() =>
                            //dispatch(actions.selectTab('home'))
                            dispatch(actions.setValue('selectedtab', 'home'))
                        }
                    >
                        blind
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}>
                        <ButtonGroup
                            variant="text"
                            color={'inherit'}
                            size="large"
                            aria-label="text button group"
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                                flexGrow: 1,
                            }}
                        >
                            <Button
                                sx={{
                                    fontWeight:
                                        selectedTab === 'home'
                                            ? 'bold'
                                            : 'none',
                                    fontSize: 20,
                                }}
                                onClick={() =>
                                    //dispatch(actions.selectTab('home'))
                                    dispatch(
                                        actions.setValue('selectedtab', 'home'),
                                    )
                                }
                            >
                                &nbsp;홈&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                            <Button
                                sx={{
                                    fontWeight:
                                        selectedTab === 'review'
                                            ? 'bold'
                                            : 'none',
                                    fontSize: 20,
                                }}
                                onClick={() =>
                                    //dispatch(actions.selectTab('review'))
                                    dispatch(
                                        actions.setValue(
                                            'selectedtab',
                                            'review',
                                        ),
                                    )
                                }
                                data-tab={'review'}
                            >
                                기업 리뷰
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <TextField
                        id="outlined-basic"
                        label="관심있는 내용을 검색해보세요!"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button color="error" size="large" variant="contained">
                        글쓰기
                    </Button>
                    <Button
                        color="inherit"
                        size="large"
                        variant="outlined"
                        onClick={() => {
                            dispatch(
                                actions.setValue('loginpopupopened', true),
                            );
                        }}
                    >
                        로그인
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Appbar;
