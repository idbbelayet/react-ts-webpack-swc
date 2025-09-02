import { ThemeState, ThemeActionTypes, TOGGLE_THEME } from './themeTypes';

const initialState: ThemeState = {
  mode: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
};

export function themeReducer(state = initialState, action: ThemeActionTypes): ThemeState {
  switch (action.type) {
    case TOGGLE_THEME:
      return { mode: state.mode === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}
