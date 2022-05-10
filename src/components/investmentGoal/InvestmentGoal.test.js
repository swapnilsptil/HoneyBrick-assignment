import {render, screen, fireEvent} from "@testing-library/react";
import {RecoilRoot, snapshot_UNSTABLE} from "recoil";
import {BrowserRouter} from "react-router-dom";
import InvestmentGoal from './InvestmentGoal';
import { InvestmentGoalsAtom, SelectedInvestmentGoalAtom } from '../../atoms/Atoms';


describe('ExperienceLevel', function () {

  it('should ExperienceLevel component render', function () {
    render(
        <RecoilRoot>
          <BrowserRouter>
            <InvestmentGoal />
          </BrowserRouter>
        </RecoilRoot>
    );
    expect(screen.getByText('GOAL 1', {})).toBeTruthy();
  });

});

