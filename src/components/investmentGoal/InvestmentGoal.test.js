import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import InvestmentGoal from './InvestmentGoal';
import { InvestmentGoalsAtom } from "../../atoms/Atoms";


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

    it('should ExperienceLevel component click', function () {
        const InvestmentGoalsAtomState = ({set}) => {
            set(InvestmentGoalsAtom, 
                [
                    { id: 1, title: 'GOAL 1', }
                ]
            );
          };
        render(
            <RecoilRoot initializeState={InvestmentGoalsAtomState}>
                <BrowserRouter>
                    <InvestmentGoal />
                </BrowserRouter>
            </RecoilRoot>
        );
       
        expect(screen.getByTestId('investment-test-id-0')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('investment-test-id-0'))
        expect(screen.getByTestId('investment-test-id-0').querySelector('.Selected')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('investment-test-id-0'));
        expect(screen.getByTestId('investment-test-id-0').querySelector('.Selected')).toBe(null);
    });
});
