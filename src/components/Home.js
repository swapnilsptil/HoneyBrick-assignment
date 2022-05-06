import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions';
import Wizard from './wizard/Wizard';
import Offers from './Offers';
import { Grid } from '@mui/material';

const Home = ({
    addToCart,
    items,
    selectedInvestmentGoal,
    experienceLevel
}) => {
    const isGoalsAvailable = selectedInvestmentGoal.length > 0 && experienceLevel.length > 0;
    const [showWizard, setShowWizard] = useState(!isGoalsAvailable);

    const handleClick = (id) => {
        addToCart(id);
    }

    return (
        <div className="container">
            <div className="box">
                {
                    !showWizard && <>
                        <Grid container justifyContent="center" spacing={2}>
                            <Offers items={items} handleClick={handleClick} />
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
const mapStateToProps = (state) => {
    return {
        items: state.items,
        selectedInvestmentGoal: state.selectedInvestmentGoal,
        experienceLevel: state.experienceLevel
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)