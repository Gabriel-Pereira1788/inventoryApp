import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Form from '.';
import {Wrapper} from '../JestWrapper';
import {Input} from '../Input/View';

describe('Form', () => {
  describe('Render component', () => {
    it('render component with Login state', () => {
      const {getByText} = render(
        <Wrapper>
          <Form.Login />
        </Wrapper>,
      );

      expect(getByText('Confirmar')).toBeTruthy();
      expect(getByText('Email')).toBeTruthy();
      expect(getByText('Senha')).toBeTruthy();
    });
    it('render component with Register state', () => {
      const {getByText} = render(
        <Wrapper>
          <Form.Register />
        </Wrapper>,
      );

      expect(getByText('Ja possui cadastro? faça o login.')).toBeTruthy();
      expect(getByText('Nome')).toBeTruthy();
      expect(getByText('Email')).toBeTruthy();
      expect(getByText('Senha')).toBeTruthy();
      expect(getByText('Confirmar senha')).toBeTruthy();
    });
    it('render wrapper form component ', () => {
      const mockSubmit = jest.fn();
      const {getByText} = render(
        <Wrapper>
          <Form.Wrapper onSubmit={mockSubmit}>
            <Input title="teste" />
          </Form.Wrapper>
        </Wrapper>,
      );

      expect(getByText('teste')).toBeTruthy();
      expect(getByText('Confirmar')).toBeTruthy();
      expect(getByText('INVENTORY')).toBeTruthy();
    });
  });

  describe('Functions data Form', () => {
    it('change input with state login', () => {
      const {getByTestId} = render(
        <Wrapper>
          <Form.Login />
        </Wrapper>,
      );
      const inputEmail = getByTestId('inputEmail');
      const inputPassword = getByTestId('inputPassword');
      fireEvent.changeText(inputEmail, 'teste@gmail.com');
      fireEvent.changeText(inputPassword, 'teste1234');

      expect(inputEmail.props.value).toEqual('teste@gmail.com');
      expect(inputPassword.props.value).toEqual('teste1234');
    });
    it('change input with state register', () => {
      const {getByTestId} = render(
        <Wrapper>
          <Form.Register />
        </Wrapper>,
      );
      const inputEmail = getByTestId('inputEmail');
      const inputName = getByTestId('inputName');
      const inputPassword = getByTestId('inputPassword');
      const inputConfirmPassword = getByTestId('inputConfirmPassword');

      fireEvent.changeText(inputName, 'paulo');
      fireEvent.changeText(inputEmail, 'teste@gmail.com');
      fireEvent.changeText(inputPassword, 'teste1234');
      fireEvent.changeText(inputConfirmPassword, 'teste1234');

      expect(inputEmail.props.value).toEqual('teste@gmail.com');
      expect(inputName.props.value).toEqual('paulo');
      expect(inputPassword.props.value).toEqual('teste1234');
      expect(inputConfirmPassword.props.value).toEqual('teste1234');
    });

    it('submit data complete', () => {
      const mockSubmit = jest.fn();
      const {getByText} = render(
        <Wrapper>
          <Form.Wrapper onSubmit={mockSubmit}>
            <Input title="Email" value="teste@gmail.com" testID="inputEmail" />
            <Input title="password" value="teste1234" testID="inputPassword" />
          </Form.Wrapper>
        </Wrapper>,
      );

      const submitButton = getByText('Confirmar');

      fireEvent.press(submitButton);
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
