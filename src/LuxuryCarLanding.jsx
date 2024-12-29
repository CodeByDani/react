// pages/LuxuryCarLanding.js
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedCars from './components/FeaturedCars';
import SwiperSection from './components/SwiperSection';

const featuredCars = [
  {
    id: 1,
    image:
      'https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/vlp/desktop/MY23Challenger_VLP_Desktop_galleryfull3.jpg',
    title: 'BMW M4 Competition',
    price: '۲,۵۰۰,۰۰۰,۰۰۰ تومان',
    specs: '۵۰۳ اسب بخار | صفر تا صد ۳.۵ ثانیه',
  },
  {
    id: 2,
    image:
      'https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/vlp/desktop/MY23Challenger_VLP_Desktop_galleryfull2.jpg',
    title: 'Mercedes-AMG GT',
    price: '۳,۲۰۰,۰۰۰,۰۰۰ تومان',
    specs: '۵۲۳ اسب بخار | صفر تا صد ۳.۲ ثانیه',
  },
  {
    id: 3,
    image:
      'https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/vlp/desktop/MY23Challenger_VLP_Desktop_galleryfull5.jpg',
    title: 'Audi RS e-tron GT',
    price: '۳,۸۰۰,۰۰۰,۰۰۰ تومان',
    specs: '۵۹۰ اسب بخار | صفر تا صد ۳.۳ ثانیه',
  },
];

const LuxuryCarLanding = () => {
  return (
    <div dir="rtl" className="luxury-car-landing">
      <Header />
      <div className="content-container">
        <SwiperSection featuredCars={featuredCars} />
        <FeaturedCars featuredCars={featuredCars} />
      </div>
      <Footer />
    </div>
  );
};

export default LuxuryCarLanding;
