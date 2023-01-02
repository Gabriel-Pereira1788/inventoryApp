import {render} from '@testing-library/react-native';
import {Dashboard} from '.';
import {Wrapper} from '../../../components/JestWrapper';

describe('Dashboard', () => {
  describe('Render component', () => {
    it('Render component correctly', () => {
      render(
        <Wrapper>
          <Dashboard />
        </Wrapper>,
      );
    });
  });
});
