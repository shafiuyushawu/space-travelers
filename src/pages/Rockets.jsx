import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <ul>
      {rockets && rockets.map((rocket) => <li key={rocket.id}>{rocket.rocket_name}</li>)}
    </ul>
  );
};

export default Rockets;
