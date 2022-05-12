import {fireEvent, render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import Checkout from './Checkout';


describe('Checkout', function () {

  it('should Checkout component render', function () {
     
    render(
        <RecoilRoot>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('Reset Cart', {})).toBeTruthy();
  });

  it('should Checkout component Reset', function () {
     
    render(
        <RecoilRoot>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </RecoilRoot>
    );

    fireEvent.click(screen.getByTestId('reset-cart'));
    expect(window.location.pathname).toBe('/');
  });

  it('should Checkout component Email check - Invalid', function () {
     
    const {queryByPlaceholderText} = render(
        <RecoilRoot>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </RecoilRoot>
    );

    const searchInput = queryByPlaceholderText('Enter Email id');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(screen.getByText('Enter Valid Email', {})).toBeTruthy();
  });

  it('should Checkout component Email check - Valid', function () {
     
    const {queryByPlaceholderText} = render(
        <RecoilRoot>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </RecoilRoot>
    );

    const searchInput = queryByPlaceholderText('Enter Email id');
    fireEvent.change(searchInput, { target: { value: 'test@gmail.com' } });
    expect(screen.getByTestId('checkout-btn')).toBeEnabled;
  });

});

