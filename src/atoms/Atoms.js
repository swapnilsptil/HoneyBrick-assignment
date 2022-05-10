import { atom, selector } from "recoil";
import Item1 from '../images/item1.jpeg';
import Item2 from '../images/item2.jpeg';
import Item3 from '../images/item3.jpeg';
import Item4 from '../images/item4.jpeg';
import Item5 from '../images/item5.jpeg';
import Item6 from '../images/item6.jpeg';

export const InvestmentGoalsAtom = atom({
    key: 'InvestmentGoalsAtom',
    default: [
        { id: 1, title: 'GOAL 1', },
        { id: 2, title: 'GOAL 2', },
        { id: 3, title: 'GOAL 3', },
        { id: 4, title: 'GOAL 4', },
        { id: 5, title: 'GOAL 5', },
        { id: 6, title: 'GOAL 6', }
    ]
});


export const IncomeRangeAtom = atom({
    key: 'IncomeRangeAtom',
    default: JSON.parse(localStorage?.getItem('HoneyBrickData'))?.incomeRangeAtom || ''
});

export const ExperienceAtom = atom({
    key: 'ExperienceAtom',
    default: JSON.parse(localStorage?.getItem('HoneyBrickData'))?.experienceAtom || ''
});

export const SelectedInvestmentGoalAtom = atom({
    key: 'SelectedInvestmentGoalAtom',
    default: JSON.parse(localStorage?.getItem('HoneyBrickData'))?.selectedInvestmentGoal || []
});

export const AvailableGoalsAtom = atom({
    key: 'AvailableGoalsAtom',
    default: []
});

export const CartItemsAtom = atom({
    key: 'CartItemsAtom',
    default: JSON.parse(localStorage?.getItem('HoneyBrickData'))?.cartItems || []
});

export const ItemsAtom = atom({
    key: 'items',
    default: [
        { id: 1, title: 'Option 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item1, investmentGoal: [1, 4] },
        { id: 2, title: 'Option 2', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item2, investmentGoal: [1, 2, 4] },
        { id: 3, title: 'Option 3', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item3, investmentGoal: [1, 2, 3, 4] },
        { id: 4, title: 'Option 4', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item4, investmentGoal: [5, 4] },
        { id: 5, title: 'Option 5', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item5, investmentGoal: [6] },
        { id: 6, title: 'Option 6', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item6, investmentGoal: [1] },
    ]
});

export const getOffersSelector = selector({
    key: "getOffersSelector",
    get: ({ get }) => {
        const items = get(ItemsAtom);
        const incomeRangeAtom = get(IncomeRangeAtom);
        const experienceAtom = get(ExperienceAtom);
        const selectedInvestmentGoal = get(SelectedInvestmentGoalAtom);

        localStorage.setItem('HoneyBrickData', JSON.stringify({incomeRangeAtom, experienceAtom, selectedInvestmentGoal}));

        const tempAvailableGoals = [];
        selectedInvestmentGoal.forEach(item => {
            const foundItems = items.filter(ele => ele.investmentGoal.includes(item.id));
            if (foundItems.length) {
                tempAvailableGoals.push(...foundItems);
            }
        });

        return tempAvailableGoals
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort((a, b) => a.title.localeCompare(b.title));

    }
});
