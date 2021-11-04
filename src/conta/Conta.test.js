import React from 'react';
import { render, screen } from '@testing-library/react';
import Conta from './Conta';

describe('Component de conta', () => {
  it('Exibir o saldo da conta como valor monetário', () => {
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId('saldo-conta');
    expect(saldo.textContent).toBe('R$ 1000');
  });

  it('Chama a função de realizar transação, quando o botão é clicado', () => {
    const realizarTransacao = jest.fn();
    render(<Conta saldo={1000} realizarTransacao={realizarTransacao} />);
    const botao = screen.getByText('Realizar operação');
    // fireEvent.click(botao); Da pra fazer das duas maneiras
    botao.click();
    expect(realizarTransacao).toHaveBeenCalled();
  });
});
