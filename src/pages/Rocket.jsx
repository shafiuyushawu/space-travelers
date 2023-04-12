import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const reserveRocket = () => {
    dispatch({
      type: 'RESERVE_ROCKET',
      payload: {
        rocketId: rocket.id,
      },
    });
  };

  return (
    <div className="rocket">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div className="rocket-detail">
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <Button variant="primary" onClick={reserveRocket}>Reserve Rocket</Button>
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
  }).isRequired,
};

export default Rocket;
