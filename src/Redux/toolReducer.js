const SORT_TO_ASC = 'SORT_TO_ASC';
const SORT_TO_DESC = 'SORT_TO_DESC';

let initialState = {
    items:[

    ],
    setItems: null,
}

const toolsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_TO_ASC:
            let sorted = state.items.sort((a,b) => a.price > b.price? -1 : 1);
            state.setItems(sorted);
            return state;
        case SORT_TO_DESC:
            let sorted_ = state.items.sort((a,b) => a.price > b.price? 1 : -1);
            state.setItems(sorted_);
            return state;
        default:
            return state;
    }
}

export default toolsReducer;

export const sortToolsAscending = () => {
    return {
        type: SORT_TO_ASC,
    }
}

export const sortToolsDescending = () => {
    return {
        type: SORT_TO_DESC,
    }
}