import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, [dispatch, rockets.length]);

  return (
    <div className="rocket-list">
      {rockets
        && rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
    </div>
  );
};

export default Rockets;
