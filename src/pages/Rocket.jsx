import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Rocket = ({ rocket }) => (
  <div className="rocket">
    <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
    <h2>{rocket.rocket_name}</h2>
    <p>{rocket.description}</p>
    <Button variant="primary">Reserve Rocket</Button>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }).isRequired,
};

export default Rocket;
