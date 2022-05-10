import React, { useState } from 'react';
import Wizard from './wizard/Wizard';
import Offers from './Offers';
import { Grid } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { ExperienceAtom, SelectedInvestmentGoalAtom } from '../atoms/Atoms';

const Home = () => {

    const selectedInvestmentGoal = useRecoilValue(SelectedInvestmentGoalAtom);
    const experienceLevel = useRecoilValue(ExperienceAtom);

    const isGoalsAvailable = selectedInvestmentGoal.length > 0 && experienceLevel.length > 0;
    const [showWizard, setShowWizard] = useState(!isGoalsAvailable);


    return (
        <div className="container">
            <div className="box">
                {
                    !showWizard && <>
                        <Grid container justifyContent="center" spacing={2}>
                            <Offers />
                        </Grid>
                    </>
                }
                {
                    showWizard &&
                    <Wizard onFinish={() => setShowWizard(false)} />
                }
            </div>
        </div>
    )
}

export default Home;