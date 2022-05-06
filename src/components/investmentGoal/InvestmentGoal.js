import React from 'react';
import { connect } from 'react-redux';
import { addInvestmentGoals } from '../actions/cartActions';
import Tiles from '../tiles/Index';

const InvestmentGoal = ({ 
    investmentGoal, 
    addInvestmentGoals, 
    selectedInvestmentGoal 
}) => {
    return (
        <Tiles 
            items={investmentGoal} 
            onClick={addInvestmentGoals} 
            selectedItems={selectedInvestmentGoal} 
        />
    )
}

const mapStateToProps = (state)=>{
    return {
        investmentGoal: state.investmentGoal,
        selectedInvestmentGoal: state.selectedInvestmentGoal,
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addInvestmentGoals: (range)=>{dispatch(addInvestmentGoals(range))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InvestmentGoal);