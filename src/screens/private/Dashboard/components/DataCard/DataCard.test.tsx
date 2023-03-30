import React from 'react';
import {render} from '@testing-library/react-native';
import {DataCard} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
describe('DataCard', () => {
  it('renders without crashing', () => {
    render(
      <Wrapper>
        <DataCard textCard="Produtos que entraram" data={5} />
      </Wrapper>,
    );
  });

  it('displays the correct data value', () => {
    const {getByTestId} = render(
      <Wrapper>
        <DataCard textCard="Produtos que entraram" data={5} />,
      </Wrapper>,
    );
    expect(getByTestId('data-value').props.children).toBe(5);
  });

  it('displays the correct text', () => {
    const {getByTestId} = render(
      <Wrapper>
        <DataCard textCard="Produtos que entraram" data={5} />,
      </Wrapper>,
    );
    expect(getByTestId('text-card').props.children).toBe(
      'Produtos que entraram',
    );
  });

  it('displays a skeleton when loadingData is true', () => {
    const {getByTestId} = render(
      <Wrapper>
        <DataCard
          textCard="Produtos que entraram"
          loadingData={true}
          testLoadingId="skeleton"
        />
        ,
      </Wrapper>,
    );
    expect(getByTestId('skeleton')).toBeTruthy();
  });
});
