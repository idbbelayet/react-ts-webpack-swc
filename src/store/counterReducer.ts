import { CounterState, CounterActionTypes, INCREMENT, DECREMENT } from './counterTypes';

const initialState: CounterState = {
  value: 0,
};

export function counterReducer(state = initialState, action: CounterActionTypes): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
