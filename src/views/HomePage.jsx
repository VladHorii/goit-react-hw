import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className="wrapper">
      <Link to="/login" className="home-page-link">
        Authorization
      </Link>
      <Link to="/register" className="home-page-link">
        Registration
      </Link>
    </div>
  );
}
export default HomePage;
