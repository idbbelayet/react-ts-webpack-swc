import { NavBarState, NavBarActionTypes, TOGGLE_NAVBAR } from './navBarTypes';

const initialState: NavBarState = {
  mode:
    localStorage.getItem('navbar') === 'open'
      ? 'open'
      : localStorage.getItem('navbar') === 'closed'
        ? 'closed'
        : 'open',
};

export function navbarReducer(state = initialState, action: NavBarActionTypes): NavBarState {
  switch (action.type) {
    case TOGGLE_NAVBAR: {
      localStorage.setItem('navbar', state.mode === 'open' ? 'closed' : 'open');
      return { mode: state.mode === 'open' ? 'closed' : 'open' };
    }
    default:
      return state;
  }
}
