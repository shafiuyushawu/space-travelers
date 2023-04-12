import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionStatus } from '../redux/missions/missionSlice';

const MissionList = ({ mission }) => {
  const dispatch = useDispatch();

  const changeStatus = () => {
    dispatch(missionStatus({ missionId: mission.mission_id }));
  };

  return (
    <tr className="border">
      <th className="border  p-2">{mission.mission_name}</th>
      <td className=" border p-2">
        <p>
          {mission.description}
        </p>
      </td>
      <td className="border p-2 w-36">
        <span className={
          mission.member
            ? 'bg-info font-bold rounded-xl p-1 text-white'
            : 'bg-slate-500 font-bold rounded-xl p-1 text-white'
        }
        >
          {mission.member ? 'Active Member' : 'Not A Member'}
        </span>
      </td>
      <td className="border p-2  w-36">
        <button
          onClick={changeStatus}
          type="button"
          className={
            mission.member
              ? 'btn btn-outline rounded-none btn-secondary btn-sm'
              : 'btn btn-outline rounded-none btn-slate-500 btn-sm'
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
