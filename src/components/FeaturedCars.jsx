import PropTypes from 'prop-types';

const FeaturedCars = ({ featuredCars }) => {
  return (
    <div className="container py-5">
      <h2 className="text-danger mb-5 text-center">
        <span className="text-gradient">خودروهای ویژه</span>
      </h2>
      <div className="row g-4">
        {featuredCars.map((car) => (
          <div key={car.id} className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="position-relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="card-img-top transition-scale"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title text-danger">{car.title}</h3>
                <p className="card-text text-muted">{car.specs}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">{car.price}</span>
                  <button className="btn btn-danger btn-sm">
                    جزئیات بیشتر
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FeaturedCars.propTypes = {
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

export default FeaturedCars;
