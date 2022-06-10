import * as Action from '../actions/home-actions';

const initialState = [];

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case Action.UPDATE_HOME: {
      return [...action.data];
    }
    default: {
      return state;
    }
  }
}
