import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

function App() {
	return (
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
								)
							}}
						/>

						<Button color="error" size="large" variant="contained">
							글쓰기
						</Button>

						<Button color="inherit" size="large" variant="outlined">
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
	);
}

export default App;
