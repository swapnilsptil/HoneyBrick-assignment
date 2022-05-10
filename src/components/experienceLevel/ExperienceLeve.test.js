
   
import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import ExperienceLevel from './ExperienceLevel';

describe('ExperienceLevel', function () {

  it('should ExperienceLevel component render', function () {
    // TODO do something and validate a token
    // When token is mock-validated, it should redirect to /dashboard with user details
    render(
        <RecoilRoot>
          <BrowserRouter>
            <ExperienceLevel />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('Beginner', {})).toBeTruthy();
  });

});