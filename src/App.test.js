import {render, screen} from '@testing-library/react';
import App from './App';
import { RecoilRoot } from 'recoil';
import {unmountComponentAtNode} from "react-dom";

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App', function () {
  it('should render main component', function () {
    render(
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    );
    expect(screen.getByText('shopping_cart', {})).toBeEnabled();
  });
});