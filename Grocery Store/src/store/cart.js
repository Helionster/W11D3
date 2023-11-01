export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: 
      const newState = Object.assign({},Object.freeze(state.cart));
      newState[action.item.id] = action.item;
      return newState;
    default:
      return state;
    }
}

const POPULATE = 'cart/POPULATE'

export const populateCart = (item) => ({
    type: POPULATE,
    item
});