import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => (
  <div className="flex flex-col justify-center items-center">
    <p className="text-7xl font-bold ">Ooops</p>
    <p className="text-4xl font-bold">404: Page not found</p>
    <Link
      to="/"
      className="btn btn-lg btn-info p-3 py-10  flex flex-col justify-center font-bold items-center"
    >
      <FaHome className="inline  text-5xl mr-2" />
      Back Home
    </Link>
  </div>
);

export default NotFound;
