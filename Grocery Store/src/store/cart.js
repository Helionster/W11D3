import produceData from '../mockData/produce.json'

export default function cardReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE: 
        const newState = {};
        action.produce.forEach(produce => {
            newState[produce.id] = produce;
        })
        return newState;
      default:
        return state;
    }
}

const POPULATE = 'produce/POPULATE'

export const populateCart = () => ({
    type: POPULATE,
    produce: produceData
});