import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import Home from './Home';
import { ExperienceAtom, SelectedInvestmentGoalAtom } from "../atoms/Atoms";


describe('Home', function () {

  it('should Home component render', function () {
    const initialUserState = ({set}) => {
        set(SelectedInvestmentGoalAtom, [{ id: 1, title: 'Option 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: '', investmentGoal: [1, 4] }]);
        set(ExperienceAtom, 'Intermediate')
    };    
    render(
        <RecoilRoot initializeState={initialUserState}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('Option 1', {})).toBeTruthy();
  });

  it('should Home component render wizard', function () {
    const initialUserState = ({set}) => {
        set(SelectedInvestmentGoalAtom, []);
        set(ExperienceAtom, '')
    };    
    render(
        <RecoilRoot initializeState={initialUserState}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('Income Range', {})).toBeTruthy();
  });

});

