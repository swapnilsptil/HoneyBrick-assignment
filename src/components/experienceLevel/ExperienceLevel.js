import React from 'react';
import { connect } from 'react-redux';
import { addExperienceLevel } from '../actions/cartActions';
import Tiles from '../tiles/Index';

const ExperienceLevel = ({experienceLevel, addExperienceLevel}) => {
    const IncomeRangeArr = ['Beginner', 'Intermediate', 'Expert'];

    return (
        <Tiles 
            items={IncomeRangeArr} 
            onClick={addExperienceLevel} 
            selectedItems={experienceLevel} 
        />
    )
}

const mapStateToProps = (state)=>{
    return {
      experienceLevel: state.experienceLevel
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addExperienceLevel: (expLevel)=>{dispatch(addExperienceLevel(expLevel))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExperienceLevel);
