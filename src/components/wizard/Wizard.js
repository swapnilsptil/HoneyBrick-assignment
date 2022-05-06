import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IncomeRange from '../incomeRange/IncomeRange';
import InvestmentGoal from '../investmentGoal/InvestmentGoal';
import ExperienceLevel from '../experienceLevel/ExperienceLevel';
import { Container } from '@mui/material';
import { connect } from 'react-redux';

const steps = ['Income Range', 'Primary Investment Goal', 'Experience Level'];

const Wizard = ({
    selectedInvestmentGoal, 
    experienceLevel,
    range,
    onFinish
}) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const handleNext = () => {
        let newSkipped = skipped;

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        if(activeStep === 2) {
            onFinish();
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => setActiveStep(0);

    const isDisabled = () => {
        if(activeStep === 0) {
            return range.length === 0;
        }
        if(activeStep === 1) {
            return selectedInvestmentGoal.length === 0;
        }
        if(activeStep === 2) {
            return experienceLevel.length === 0;
        }
    }

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Container maxWidth="sm" sx={{marginTop: '100px'}}>
                            {activeStep === 0 && <IncomeRange />}
                            {activeStep === 1 && <InvestmentGoal />}
                            {activeStep === 2 && <ExperienceLevel />}
                        </Container>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                        
                            <Button onClick={handleNext} disabled={isDisabled()}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Container>
    );
}

const mapStateToProps = (state)=>{
    return {
        selectedInvestmentGoal: state.selectedInvestmentGoal,
        experienceLevel: state.experienceLevel,
        range: state.incomeRange
    }
  }

export default connect(mapStateToProps)(Wizard);