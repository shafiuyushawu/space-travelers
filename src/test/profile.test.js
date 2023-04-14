import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionProfile from '../components/MissionProfile';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Testing profile components', () => {
  it('Generating the snapshots for MissionProfile', () => {
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

    const missionName = screen.getByText('Test Profile');
    expect(missionName).toBeInTheDocument();
  });
});
