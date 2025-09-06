export type NavBarMode = 'open' | 'closed';

export interface NavBarState {
  mode: NavBarMode;
}

export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

interface ToggleNavAction {
  type: typeof TOGGLE_NAVBAR;
}

export type NavBarActionTypes = ToggleNavAction;
