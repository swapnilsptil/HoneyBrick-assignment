import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { InvestmentGoalsAtom, SelectedInvestmentGoalAtom } from '../../atoms/Atoms';
import Tiles from '../tiles/Index';

const InvestmentGoal = () => {

    const IncomeRangeState = useRecoilValue(InvestmentGoalsAtom);
    const [selectedInvestmentGoal, setSelectedInvestmentGoal] = useRecoilState(SelectedInvestmentGoalAtom);
    
    const onInvestGoalSelection = (actionInvestmentGoal) => {

        const index = selectedInvestmentGoal.findIndex(item => item.id === actionInvestmentGoal.id);

        if (index === -1) {
            setSelectedInvestmentGoal([...selectedInvestmentGoal, actionInvestmentGoal]);
        } else {
            const tempSelectedInvestment = [...selectedInvestmentGoal];
            tempSelectedInvestment.splice(index, 1);
            setSelectedInvestmentGoal([...tempSelectedInvestment]);
        }
    }

    return (
        <Tiles 
            items={IncomeRangeState} 
            onClick={onInvestGoalSelection} 
            selectedItems={selectedInvestmentGoal} 
            testId='investment-test-id'
        />
    )
}

export default InvestmentGoal;