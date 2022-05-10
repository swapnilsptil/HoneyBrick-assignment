import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import IncomeRange from './IncomeRange';

describe('ExperienceLevel', function () {

  it('should ExperienceLevel component render', function () {
    render(
        <RecoilRoot>
          <BrowserRouter>
            <IncomeRange />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('100k', {})).toBeTruthy();
  });

});