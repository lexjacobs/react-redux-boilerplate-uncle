import { combineReducers } from 'redux';

export function exampleState(state = {count: 0}, action) {
  switch (action.type) {
  case 'EXAMPLE_ACTION_INCREASE':

    return {
      ...state,
      count: state.count + 1
    };

  default:
    return state;
  }
}

export const rootReducer = combineReducers({
  exampleState
});
