import React from 'react';
import { connect } from 'react-redux'
import { addIncomeRange } from '../actions/cartActions';
import Tiles from '../tiles/Index';

const IncomeRange = ({ range, addIncomeRange }) => {
    const IncomeRangeArr = ['100k', '150k', '250k'];

    return (
        <Tiles 
            items={IncomeRangeArr} 
            onClick={addIncomeRange} 
            selectedItems={range} 
        />
    )
}

const mapStateToProps = (state)=>{
    return {
      range: state.incomeRange
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addIncomeRange: (range)=>{dispatch(addIncomeRange(range))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncomeRange);
