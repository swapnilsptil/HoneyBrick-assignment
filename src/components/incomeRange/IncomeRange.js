import React from 'react';
import { useRecoilState } from 'recoil';
import { IncomeRangeAtom } from '../../atoms/Atoms';
import Tiles from '../tiles/Index';

const IncomeRange = () => {
    const IncomeRangeArr = ['100k', '150k', '250k'];
    const [IncomeRangeState, setIncomeRangeState] = useRecoilState(IncomeRangeAtom);

    return (
        <Tiles 
            items={IncomeRangeArr} 
            onClick={setIncomeRangeState} 
            selectedItems={IncomeRangeState} 
        />
    )
}

export default IncomeRange;
