import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionList from '../components/MissionList';

afterEach(cleanup);

describe('Testing mission components', () => {
    test('Generating the snapshots for missionlist', () => {
        const mission = {
            mission_name: 'Test Mission',
            description: 'Test mission description',
            mission_id: '123',
            member: true,
        };
        const { container } = render(
            <Provider store={store}>
                <MissionList mission={mission} />
            </Provider>,
        );
        expect(container).toMatchSnapshot();
    });
});
