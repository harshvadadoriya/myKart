import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
	display: flex;
	margin: 0 3% 0 auto;
	& > button,
	& > p,
	& > div {
		align-items: center;
		margin-right: 40px;
		font-size: 16px;
	}
`;

const Container = styled(Box)`
	display: flex;
`;

const LoginButton = styled(Button)`
	color: #2874f0;
	background: #fff;
	text-transform: none;
	padding: 5px 40px;
	border-radius: 2px;
	box-shadow: none;
	font-weight: 600;
	height: 32px;
	:hover {
		background: white;
		box-shadow: none;
	}
`;

const CustomButtons = () => {
	return (
		<Wrapper>
			<LoginButton variant="contained">Login</LoginButton>
			<Typography style={{ width: 135, marginTop: 4 }}>
				Become a Seller
			</Typography>
			<Typography style={{ marginTop: 4 }}>More</Typography>
			<Container>
				<ShoppingCartIcon />
				<Typography>Cart</Typography>
			</Container>
		</Wrapper>
	);
};

export default CustomButtons;
