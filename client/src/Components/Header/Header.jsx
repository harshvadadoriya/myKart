// import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';
// import Search from '../Search';

// const StyledHeader = styled(AppBar)`
// 	background: #2874f0;
// 	height: 55px;
// 	display: flex;
// 	justify-content: center;
// `;

// const Component = styled(Box)`
// 	margin-left: 12%;
// 	line-height: 0;
// `;

// const SubHeading = styled(Typography)`
// 	font-size: 10px;
// 	font-style: italic;
// `;

// // const PlusImg = styled('img')({
// // 	width: 10,
// // });

// const Header = () => {
// 	const FlipkartLogo = '/public/flipkart-logo.png';
// 	const PlusLogo = '/public/plus.png';
// 	return (
// 		<StyledHeader>
// 			<Toolbar>
// 				<Component>
// 					<img src={FlipkartLogo} alt="logo" style={{ width: 90 }} />

// 					<Box style={{ display: 'flex' }}>
// 						<SubHeading>
// 							Explore&nbsp;
// 							<Box
// 								component="span"
// 								style={{ color: '#FFE500', fontWeight: 'bold' }}
// 							>
// 								Plus&nbsp;
// 							</Box>
// 						</SubHeading>
// 						<img
// 							src={PlusLogo}
// 							alt="+"
// 							style={{ width: 10, height: 10, marginTop: 2 }}
// 						/>
// 					</Box>
// 				</Component>
// 				<Search />
// 			</Toolbar>
// 		</StyledHeader>
// 	);
// };

// export default Header;

import { AppBar, Box, Toolbar, styled } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
	background: #2874f0;
	height: 55px;
	display: flex;
	justify-content: center;
`;

const Component = styled(Box)`
	margin-left: 12%;
	line-height: 0;
`;

const CustomButtonWrapper = styled(Box)`
	margin: 0 10% 0 auto;
`;

const Header = () => {
	const ShopzifyLogo = '/public/Logos/shopzify-logo.png';
	return (
		<StyledHeader>
			<Toolbar>
				<Component>
					<img src={ShopzifyLogo} alt="logo" style={{ width: 100 }} />
				</Component>
				<Search />
				<CustomButtonWrapper>
					<CustomButtons />
				</CustomButtonWrapper>
			</Toolbar>
		</StyledHeader>
	);
};

export default Header;
