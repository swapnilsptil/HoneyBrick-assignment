import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Tiles from './Index';

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

    it('should Tiles component click', function () {
        const IncomeRangeArr = ['100k', '150k', '250k'];
        const onClick = jest.fn();
        render(
            <RecoilRoot>
                <BrowserRouter>
                    <Tiles items={IncomeRangeArr} onClick={onClick} />
                </BrowserRouter>
            </RecoilRoot>
        );
        fireEvent.click(screen.getByText('100k'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
