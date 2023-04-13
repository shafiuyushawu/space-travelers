import { useSelector } from 'react-redux';
import MissionProfile from '../components/MissionProfile';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missionMembers = missions.filter((mission) => mission.member);

  return (
    <div className="flex pl-10 pr-16">
      <ul className="w-50">
        <h1>My Missions</h1>
        {!missionMembers.length ? (
          <li className="p-1 text-2xl border">You have no active member</li>
        ) : (
          missionMembers.map((member) => (
            <MissionProfile
              key={member.mission_id}
              member={member}
              missionMembers={missionMembers}
            />
          ))
        )}
      </ul>
      <ul className="w-50">
        <h1>My Rockets</h1>
        {
          reservedRockets.map((rocket) => (
            <li key={rocket.id} className="p-1 text-2xl border">
              {rocket.rocket_name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};
export default Profile;
