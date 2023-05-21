import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
	background: #fff;
	width: 30%;
	height: 35px;
	border-radius: 2px;
	margin-left: 15px;
	display: flex;
	align-items: center;
`;

const InputSearchBase = styled(InputBase)`
	padding-left: 15px;
	width: 100%;
	color: #000;
`;

const SearchIconWrapper = styled(SearchIcon)`
	color: #2874f0;
	margin-right: 10px;
	cursor: pointer;
`;

const Search = () => {
	return (
		<SearchContainer>
			<InputSearchBase placeholder="Search for products, brands and more" />
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
		</SearchContainer>
	);
};

export default Search;
