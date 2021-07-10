import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <>
      <Link to="/login">Authorization</Link>
      <Link to="/register">Registration</Link>
    </>
  );
}
export default HomePage;
