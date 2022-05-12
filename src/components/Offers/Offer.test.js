import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Offer from './Index';
import { SelectedInvestmentGoalAtom } from "../../atoms/Atoms";


describe('Offer', function () {

    it('should Offer component render', function () {
        const initialUserState = ({ set }) => {
            set(SelectedInvestmentGoalAtom,
                [
                    { id: 1, title: 'GOAL 1', },
                    { id: 2, title: 'GOAL 2', }
                ]
            );
        };

        render(
            <RecoilRoot initializeState={initialUserState}>
                <BrowserRouter>
                    <Offer />
                </BrowserRouter>
            </RecoilRoot>
        );
        expect(screen.getByText('Option 6', {})).toBeTruthy();
    });

    it('should Offer component Add', function () {
        const initialUserState = ({ set }) => {
            set(SelectedInvestmentGoalAtom,
                [
                    { id: 1, title: 'GOAL 1', }
                ]
            );
        };

        render(
            <RecoilRoot initializeState={initialUserState}>
                <BrowserRouter>
                    <Offer />
                </BrowserRouter>
            </RecoilRoot>
        );
        expect(screen.getByTestId('offer-btn-1')).toBeInTheDocument();
        expect(screen.getByTestId('offer-btn-1')).toHaveTextContent('Add');
        fireEvent.click(screen.getByTestId('offer-btn-1'));
        expect(screen.getByTestId('offer-btn-1')).toHaveTextContent('Remove');
    });

    it('should Offer component Remove', function () {
        const initialUserState = ({ set }) => {
            set(SelectedInvestmentGoalAtom,
                [
                    { id: 1, title: 'GOAL 1', }
                ]
            );
        };

        render(
            <RecoilRoot initializeState={initialUserState}>
                <BrowserRouter>
                    <Offer />
                </BrowserRouter>
            </RecoilRoot>
        );
        expect(screen.getByTestId('offer-btn-1')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('offer-btn-1'));
        expect(screen.getByTestId('offer-btn-1')).toHaveTextContent('Remove');
        fireEvent.click(screen.getByTestId('offer-btn-1'));
        expect(screen.getByTestId('offer-btn-1')).toHaveTextContent('Add');
    });

});
