import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionStatus } from '../redux/missions/missionSlice';

const MissionList = ({ mission }) => {
  const dispatch = useDispatch();

  const changeStatus = () => {
    dispatch(missionStatus({ missionId: mission.mission_id }));
  };

  return (
    <tr>
      <th className="p-2 border">{mission.mission_name}</th>
      <td className="p-2 border ">
        <p>{mission.description}</p>
      </td>
      <td className="p-2 border w-36">
        <span
          className={
            mission.member
              ? 'bg-[#00e5ff] font-bold rounded-xl p-1 text-white'
              : 'bg-slate-500 font-bold rounded-xl p-1 text-white'
          }
        >
          {mission.member ? 'Active Member' : 'Not A Member'}
        </span>
      </td>
      <td className="p-2 border w-36">
        <button
          onClick={changeStatus}
          type="button"
          className={
            mission.member
              ? '  border-2 border-[#ff0044] text-[#ff0044] font-bold p-1'
              : 'border-2 border-[#adaaab] text-[#adaaab] font-bold p-1'
          }
        >
          {mission.member ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MissionList.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mission_id: PropTypes.string.isRequired,
    member: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionList;
