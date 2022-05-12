import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Wizard from './Wizard';
import { IncomeRangeAtom, SelectedInvestmentGoalAtom } from "../../atoms/Atoms";


describe('Wizard', function () {

    it('should Wizard component render', function () {
        render(
            <RecoilRoot>
                <BrowserRouter>
                    <Wizard />
                </BrowserRouter>
            </RecoilRoot>
        );
        expect(screen.getByText('Income Range', {})).toBeTruthy();
    });

    it('should Wizard component Next & Back button disabled', function () {
        render(
            <RecoilRoot>
                <BrowserRouter>
                    <Wizard />
                </BrowserRouter>
            </RecoilRoot>
        );
        expect(screen.getByTestId('wizard-next-btn')).toBeDisabled();
        expect(screen.getByTestId('wizard-back-btn')).toBeDisabled();
    });

    it('should Wizard component Next Enabled', function () {
        const initialUserState = ({ set }) => {
            set(IncomeRangeAtom, '100k'
            );
        };

        render(
            <RecoilRoot initializeState={initialUserState}>
                <BrowserRouter>
                    <Wizard />
                </BrowserRouter>
            </RecoilRoot>
        );
        expect(screen.getByTestId('wizard-next-btn')).toBeTruthy();
        fireEvent.click(screen.getByTestId('wizard-next-btn'));
        expect(screen.getByText('GOAL 1', {})).toBeTruthy();
        fireEvent.click(screen.getByTestId('wizard-back-btn'));
        expect(screen.getByText('100k', {})).toBeTruthy();
    });

    it('should Wizard component Last step click', function () {
        const initialUserState = ({ set }) => {
            set(IncomeRangeAtom, '100k');
            set(SelectedInvestmentGoalAtom, [{ id: 1, title: 'GOAL 1', }]);
        };

        render(
            <RecoilRoot initializeState={initialUserState}>
                <BrowserRouter>
                    <Wizard />
                </BrowserRouter>
            </RecoilRoot>
        );
        expect(screen.getByTestId('wizard-next-btn')).toBeTruthy();
        fireEvent.click(screen.getByTestId('wizard-next-btn'));
        fireEvent.click(screen.getByTestId('wizard-next-btn'));
        expect(screen.getByTestId('wizard-next-btn')).toBeDisabled();
      
    });
});
