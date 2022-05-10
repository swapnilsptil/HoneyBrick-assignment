import {fireEvent, render, screen, RecoilObserver} from "@testing-library/react";
import {RecoilRoot, useRecoilState} from "recoil";
import {BrowserRouter} from "react-router-dom";
import Tiles from './Index';
import { IncomeRangeAtom } from "../../atoms/Atoms";


describe('Tiles', function () {

  it('should Tiles component render', function () {
    const IncomeRangeArr = ['100k', '150k', '250k'];
    render(
        <RecoilRoot>
          <BrowserRouter>
            <Tiles items={IncomeRangeArr} />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('100k', {})).toBeTruthy();
  });
});
