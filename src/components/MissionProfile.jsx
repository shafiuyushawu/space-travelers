import PropTypes from 'prop-types';

const MissionProfile = ({ member }) => (
  <li className="p-1 text-2xl border">{member.mission_name}</li>
);

MissionProfile.propTypes = {
  member: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    member: PropTypes.bool.isRequired,
  }).isRequired,
};
export default MissionProfile;
