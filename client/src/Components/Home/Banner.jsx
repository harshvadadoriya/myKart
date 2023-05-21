import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../Constants/data';
import styled from '@emotion/styled';

const Image = styled('img')({
	width: '100%',
	height: 280,
});

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const Banner = () => {
	return (
		<Carousel
			swipeable={false}
			draggable={false}
			showDots={false}
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			keyBoardControl={true}
			slidesToSlide={1}
			autoPlaySpeed={4000}
			containerClass="carousel-container"
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-40-px"
		>
			{bannerData.map((data) => (
				<Image key={data.id} src={data.url} alt="banner" />
			))}
		</Carousel>
	);
};

export default Banner;
