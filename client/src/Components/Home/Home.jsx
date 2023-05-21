import { Box, styled } from '@mui/material';
import Banner from './Banner';
import NavBar from './NavBar';

const Container = styled(Box)`
	padding: 10px 10px;
	background: #f2f2f2;
`;

const Home = () => {
	return (
		<>
			<NavBar />
			<Container>
				<Banner />
			</Container>
		</>
	);
};

export default Home;
