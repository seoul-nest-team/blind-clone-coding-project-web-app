import React from 'react';
import { Provider } from 'react-redux';
import store from './common/store';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	Container,
	TextField,
	Autocomplete,
	Grid,
	InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function App() {
	return (
		//Provider 컴포넌트는 리액트에서 액션이 처리되었을 때 이벤트를 받아서 하위에 있는 다른 컴포넌트가 다시 렌더링 될 수 있도록 도와줌
		<Provider store={store}>
			<div className="App">
				<Box sx={{ flexGrow: 1, '& button': { m: 1 } }}>
					<AppBar position="static" color="inherit">
						<Toolbar>
							<Typography
								variant="h4"
								component="div"
								sx={{ flexGrow: 1 }}
							>
								blind
							</Typography>

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

							<Button
								color="error"
								size="large"
								variant="contained"
							>
								글쓰기
							</Button>

							<Button
								color="inherit"
								size="large"
								variant="outlined"
							>
								로그인
							</Button>
						</Toolbar>
					</AppBar>
				</Box>
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
			</div>
		</Provider>
	);
}

export default App;
