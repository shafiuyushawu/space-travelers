import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/missions/missionSlice';
import MissionList from '../components/MissionList';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMission());
  }, []);

  return (
    <section className=" px-10 py-5">
      <table className="border w-full">
        <thead>
          <tr className="border">
            <th className="border text-left p-2">Mission</th>
            <th className="border text-left p-2">Description</th>
            <th className="border text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionList key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
