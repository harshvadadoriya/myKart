import { Box, Typography, styled } from '@mui/material';
import { navData } from '../../Constants/data';

const Component = styled(Box)`
	display: flex;
	justify-content: space-between;
	margin: 55px 130px 0 130px;
`;

const Container = styled(Box)`
	padding: 12px 8px;
	text-align: center;
`;

const Text = styled(Typography)`
	font-size: 14px;
`;

const NavBar = () => {
	return (
		<Component>
			{navData.map((data, ind) => {
				return (
					<Container key={ind}>
						<img src={data.url} alt="nav" style={{ width: 64 }} />
						<Text>{data.text}</Text>
					</Container>
				);
			})}
		</Component>
	);
};

export default NavBar;
