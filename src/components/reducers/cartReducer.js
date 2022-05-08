import Item1 from '../../images/item1.jpeg'
import Item2 from '../../images/item2.jpeg'
import Item3 from '../../images/item3.jpeg'
import Item4 from '../../images/item4.jpeg'
import Item5 from '../../images/item5.jpeg'
import Item6 from '../../images/item6.jpeg'
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_INCOME_RANGE,
    ADD_EXPERIENCE_LEVEL,
    ADD_INVESTMENT_GOAL,
    GET_OPTIONS,
    RESET_CART
} from '../actions/action-types/cart-actions'


const initState = {
    investmentGoal: [
        { id: 1, title: 'GOAL 1', },
        { id: 2, title: 'GOAL 2', },
        { id: 3, title: 'GOAL 3', },
        { id: 4, title: 'GOAL 4', },
        { id: 5, title: 'GOAL 5', },
        { id: 6, title: 'GOAL 6', }
    ],
    items: [
        { id: 1, title: 'Option 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item1, investmentGoal: [1, 4] },
        { id: 2, title: 'Option 2', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item2, investmentGoal: [1, 2, 4] },
        { id: 3, title: 'Option 3', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item3, investmentGoal: [1, 2, 3, 4] },
        { id: 4, title: 'Option 4', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item4, investmentGoal: [5, 4] },
        { id: 5, title: 'Option 5', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item5, investmentGoal: [6] },
        { id: 6, title: 'Option 6', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item6, investmentGoal: [1] },
    ],
    cartItems: [],
    total: 0,
    incomeRange: '',
    experienceLevel: '',
    selectedInvestmentGoal: [],
    availableGoals: []
}
const cartReducer = (state = initState, action) => {

    if (action.type === GET_OPTIONS) {
        const { selectedInvestmentGoal, items } = state;
        const tempAvailableGoals = [];
        selectedInvestmentGoal.forEach(item => {
            const foundItems = items.filter(ele => ele.investmentGoal.includes(item.id));
            if (foundItems.length) {
                tempAvailableGoals.push(...foundItems);
            }
        });

        const tempState = {
            ...state,
            availableGoals: tempAvailableGoals
                .filter((value, index, self) => self.indexOf(value) === index)
                .sort((a, b) => a.title.localeCompare(b.title)),
        }
        localStorage.setItem('HoneyBrickData', JSON.stringify(tempState));

        return {
            ...tempState
        }
    }

    if (action.type === ADD_INCOME_RANGE) {
        const tempState = { ...state, incomeRange: action.range, };

        localStorage.setItem('HoneyBrickData', JSON.stringify(tempState));

        return {
            ...tempState
        }
    }
    if (action.type === ADD_EXPERIENCE_LEVEL) {
        const tempState = { ...state, experienceLevel: action.experienceLevel, };

        localStorage.setItem('HoneyBrickData', JSON.stringify(tempState));

        return {
            ...tempState
        }
    }
    if (action.type === ADD_INVESTMENT_GOAL) {

        const { selectedInvestmentGoal } = state;
        const { selectedInvestmentGoal: actionInvestmentGoal } = action;

        const index = selectedInvestmentGoal.findIndex(item => item.id === actionInvestmentGoal.id);

        if (index === -1) {
            const tempState = {
                ...state,
                selectedInvestmentGoal: [...selectedInvestmentGoal, actionInvestmentGoal],
            }
            localStorage.setItem('HoneyBrickData', JSON.stringify(tempState));
            return {
                ...tempState
            }
        } else {
            selectedInvestmentGoal.splice(index, 1);
            const tempState = {
                ...state,
                selectedInvestmentGoal: [...selectedInvestmentGoal],
            }
            localStorage.setItem('HoneyBrickData', JSON.stringify(tempState));
            return {
                ...tempState
            }
        }
    }
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.cartItems.find(item => action.id === item.id)
        if (!existed_item) {
            addedItem.quantity = 1;
            const tempState = {
                ...state,
                cartItems: [...state.cartItems, addedItem],
            }

            localStorage.setItem('HoneyBrickData', JSON.stringify(tempState));

            return {
                ...tempState
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let new_items = state.cartItems.filter(item => action.id !== item.id);

        const tempState = {
            ...state,
            cartItems: new_items,
        }
        localStorage.setItem('HoneyBrickData', JSON.stringify(tempState));
        return {
            ...tempState
        }
    }

    if(action.type === RESET_CART) {
        const tempState = initState;

        localStorage.setItem('HoneyBrickData', JSON.stringify({}));

        return {
            ...tempState
        }
    }

    else {
        const localData = JSON.parse(localStorage.getItem('HoneyBrickData'));
        if (localData?.availableGoals?.length) {
            return {
                ...state,
                availableGoals: localData.availableGoals
                    .filter((value, index, self) => self.indexOf(value) === index)
                    .sort((a, b) => a.title.localeCompare(b.title)),
                incomeRange: localData.range,
                experienceLevel: localData.experienceLevel,
                selectedInvestmentGoal: localData.selectedInvestmentGoal,
                cartItems: localData.cartItems,
            }
        }
        return state
    }

}

export default cartReducer
