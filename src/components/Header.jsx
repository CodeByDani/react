const Header = () => {
  return (
    <header className="bg-dark fixed-top border-bottom border-light text-white">
      <div className="d-flex justify-content-between align-items-center container py-3">
        <div className="text-warning fw-bold fs-4">اتو لوکس</div>

        <nav className="d-none d-md-flex">
          {['خانه', 'محصولات', 'درباره ما', 'تماس'].map((item) => (
            <a
              key={item}
              href="#"
              className="nav-link hover position-relative mx-3"
            >
              <span className="text-decoration-none">{item}</span>
              <span className="position-absolute bg-danger bottom-0 start-0 h-1 w-0 transition-all"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
