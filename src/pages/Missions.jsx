import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/missions/missionSlice';
import MissionList from '../components/MissionList';
import Loading from '../components/Loading';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMission());
  }, [dispatch, missions.length]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <section className="px-10 py-5 ">
      <table className="w-full border">
        <thead>
          <tr className="border">
            <th className="p-2 text-left border">Mission</th>
            <th className="p-2 text-left border">Description</th>
            <th className="p-2 text-left border">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions
            && missions.map((mission) => (
              <MissionList key={mission.mission_id} mission={mission} />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
