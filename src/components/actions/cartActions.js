
import { ADD_TO_CART,
    REMOVE_ITEM, 
    ADD_INCOME_RANGE, 
    ADD_INVESTMENT_GOAL, 
    ADD_EXPERIENCE_LEVEL,
    GET_OPTIONS
} from './action-types/cart-actions'

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

export const addIncomeRange= (range)=>{
    return{
        type: ADD_INCOME_RANGE,
        range
    }
}

export const addExperienceLevel = (experienceLevel)=>{
    return{
        type: ADD_EXPERIENCE_LEVEL,
        experienceLevel
    }
}

export const addInvestmentGoals = (selectedInvestmentGoal)=>{
    return{
        type: ADD_INVESTMENT_GOAL,
        selectedInvestmentGoal
    }
}

export const getOptions = () => {
    return {
        type : GET_OPTIONS
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
