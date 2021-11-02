import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '20ch',
			'&:focus': {
				width: '28ch',
			},
		},
	},
}));

function App() {
	return (
		<div className="App">
			<Box sx={{ flexGrow: 1, '& button': { m: 1 } }}>
				<AppBar position="static" color="inherit">
					<Toolbar>
						{/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
						<Typography
							variant="h4"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							blind
						</Typography>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{ 'aria-label': 'search' }}
							/>
						</Search>
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
