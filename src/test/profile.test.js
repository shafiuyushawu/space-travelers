import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionProfile from '../components/MissionProfile';

afterEach(cleanup);

describe('Testing profile components', () => {
  test('Generating the snapshots for MissionProfile', () => {
    const member = {
      mission_name: 'Test Profile',
      member: true,
    };
    const { container } = render(
      <Provider store={store}>
        <MissionProfile member={member} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
