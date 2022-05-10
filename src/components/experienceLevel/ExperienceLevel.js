import React from 'react';
import { useRecoilState } from 'recoil';
import Tiles from '../tiles/Index';
import { ExperienceAtom } from '../../atoms/Atoms';

const ExperienceLevel = () => {
    const IncomeRangeArr = ['Beginner', 'Intermediate', 'Expert'];
    const [experienceAtomState, setExperienceAtomState] = useRecoilState(ExperienceAtom);

    return (
        <Tiles 
            items={IncomeRangeArr} 
            onClick={setExperienceAtomState} 
            selectedItems={experienceAtomState}
            testId='experience-test-id'
        />
    )
}

export default ExperienceLevel;
