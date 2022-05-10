import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import Navbar from './Navbar';


describe('ExperienceLevel', function () {

  it('should ExperienceLevel component render', function () {
    render(
        <RecoilRoot>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('My cart', {})).toBeTruthy();
  });

});

