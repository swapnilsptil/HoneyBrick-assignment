import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import Cart from './Cart';
import { CartItemsAtom } from "../atoms/Atoms";


describe('Cart', function () {

  it('should Cart component render', function () {
    const initialUserState = ({set}) => {
        set(CartItemsAtom, [{ id: 1, title: 'Option 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: '', investmentGoal: [1, 4] }]);
    };    
    render(
        <RecoilRoot initializeState={initialUserState}>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('Option 1', {})).toBeTruthy();
  });

  it('should Cart component render - No items', function () {
    const initialUserState = ({set}) => {
        set(CartItemsAtom, []);
    };    
    render(
        <RecoilRoot initializeState={initialUserState}>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('No Item in Cart', {})).toBeTruthy();
  });

});

