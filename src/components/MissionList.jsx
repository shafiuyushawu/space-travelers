import PropTypes from 'prop-types';

const MissionList = ({ mission }) => (
  <tr className="border">
    <th className="border  p-2">{mission.mission_name}</th>
    <td className=" border p-2">
      <p>
        {mission.description}
      </p>
    </td>
    <td className="border p-2"><span className="">Active Member</span></td>
    <td className="border p-2">Blue</td>
  </tr>
);

MissionList.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default MissionList;
