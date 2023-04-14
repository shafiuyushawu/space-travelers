import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rocket from '../components/Rocket';

afterEach(cleanup);
describe('Testing rocket component', () => {
  test('Generating the snapshots for rocket component', () => {
    const rocket = {
      id: '123',
      rocket_name: 'Test Rocket',
      flickr_images: ['image1.jpg', 'image2.jpg'],
      description: 'Test rocket description',
      reserved: false,
    };
    const { container } = render(
      <Provider store={store}>
        <Rocket rocket={rocket} />
      </Provider>,
    );
    expect(screen.getByText(/Test rocket description/)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
