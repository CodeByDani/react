import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-top border-light pt-5">
      <div className="container">
        <div className="d-flex row mb-5 flex-row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-danger mb-3">درباره اتو لوکس</h5>
            <p className="text-white">
              اتو لوکس، پیشرو در ارائه خودروهای لوکس و اسپرت در ایران...
            </p>
          </div>
          <div className="col-lg-3 mb-4">
            <h5 className="text-danger mb-3">دسترسی سریع</h5>
            <ul className="list-unstyled">
              {[
                'خودروهای موجود',
                'مقایسه خودروها',
                'خدمات پس از فروش',
                'اخبار و مقالات',
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-decoration-none text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-danger mb-3">اطلاعات تماس</h5>
            <ul className="list-unstyled text-white">
              <li className="d-flex align-items-center mb-3">
                <MapPin className="text-danger me-2" />
                <span>تهران، خیابان ولیعصر...</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Phone className="text-danger me-2" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Mail className="text-danger me-2" />
                <span>info@autolux.ir</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-danger mb-3">خبرنامه</h5>
            <p className="mb-4 text-white">
              برای اطلاع از آخرین خودروها و اخبار مارو دنبال کنید
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
