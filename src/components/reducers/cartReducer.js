import Item1 from '../../images/item1.jpeg'
import Item2 from '../../images/item2.jpeg'
import Item3 from '../../images/item3.jpeg'
import Item4 from '../../images/item4.jpeg'
import Item5 from '../../images/item5.jpeg'
import Item6 from '../../images/item6.jpeg'
import { ADD_TO_CART,
    REMOVE_ITEM,
    ADD_INCOME_RANGE, 
    ADD_EXPERIENCE_LEVEL, 
    ADD_INVESTMENT_GOAL,
    GET_OPTIONS
} from '../actions/action-types/cart-actions'


const initState = {
    investmentGoal: [
        {id:1,title:'GOAL 1',},
        {id:2,title:'GOAL 2',},
        {id:3,title:'GOAL 3',},
        {id:4,title:'GOAL 4',},
        {id:5,title:'GOAL 5',},
        {id:6,title:'GOAL 6',}
    ],
    items: [
        {id:1,title:'Option 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img:Item1, investmentGoal: [1,4]},
        {id:2,title:'Option 2', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img: Item2, investmentGoal: [1, 2,4]},
        {id:3,title:'Option 3', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img: Item3, investmentGoal: [1,2, 3, 4]},
        {id:4,title:'Option 4', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img:Item4, investmentGoal: [5,4]},
        {id:5,title:'Option 5', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item5, investmentGoal: [6]},
        {id:6,title:'Option 6', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item6, investmentGoal: [1]},
    ],
    cartItems:[],
    total: 0,
    incomeRange: '',
    experienceLevel : '',
    selectedInvestmentGoal : [],
    availableGoals: []
}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === GET_OPTIONS){
        const {selectedInvestmentGoal, items} = state;
        const tempAvailableGoals = [];
        selectedInvestmentGoal.forEach(item => {
            const foundItems = items.filter(ele => ele.investmentGoal.includes(item.id));
            if(foundItems.length) {
                tempAvailableGoals.push(...foundItems);
            }
        })
        return{
            ...state,
            availableGoals: tempAvailableGoals,
        }
    }

    if(action.type === ADD_INCOME_RANGE){
        return{
            ...state,
            incomeRange: action.range,
        }
    }
    if(action.type === ADD_EXPERIENCE_LEVEL){
        return{
            ...state,
            experienceLevel: action.experienceLevel,
        }
    }
    if(action.type === ADD_INVESTMENT_GOAL){

        const {selectedInvestmentGoal} = state;
        const {selectedInvestmentGoal : actionInvestmentGoal} = action;

        const index = selectedInvestmentGoal.findIndex(item => item.id === actionInvestmentGoal.id);

        if(index === -1) {
            return{
                ...state,
                selectedInvestmentGoal: [...selectedInvestmentGoal, actionInvestmentGoal],
            }
        } else {
            selectedInvestmentGoal.splice(index, 1);
            return{
                ...state,
                selectedInvestmentGoal: [...selectedInvestmentGoal],
            }
        }
    }
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
         let existed_item= state.cartItems.find(item=> action.id === item.id)
         if(!existed_item){
            addedItem.quantity = 1;
            
            return{
                ...state,
                cartItems: [...state.cartItems, addedItem],
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.cartItems.find(item=> action.id === item.id)
        let new_items = state.cartItems.filter(item=> action.id !== item.id)
        
        console.log(itemToRemove)
        return{
            ...state,
            cartItems: new_items,
        }
    }

  else{
    return state
    }
    
}

export default cartReducer
