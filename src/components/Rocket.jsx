import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <div className="rocket">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div className="rocket-detail">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && (
          <Badge bg="info">
            Reserved
          </Badge>
          )}
          {rocket.description}
        </p>
        {
          rocket.reserved
            ? <Button variant="outline-secondary" onClick={handleReservation}>Reserve Rocket</Button>
            : <Button variant="primary" onClick={handleReservation}>Reserve Rocket</Button>
        }
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    rocket_name: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
