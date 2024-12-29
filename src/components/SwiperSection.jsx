import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

const SwiperSection = ({ featuredCars }) => {
  return (
    <div className="swiper-container">
      <Swiper
        scrollbar={{ hide: true }}
        loop={true}
        grabCursor={true}
        navigation={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        {featuredCars.map((car, index) => (
          <SwiperSlide key={index}>
            <img src={car.image} alt={car.title} className="swiper-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SwiperSection.propTypes = {
  featuredCars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string,
      specs: PropTypes.string,
    })
  ).isRequired,
};

export default SwiperSection;
