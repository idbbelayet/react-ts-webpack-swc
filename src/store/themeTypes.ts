export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
}

export const TOGGLE_THEME = 'TOGGLE_THEME';

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export type ThemeActionTypes = ToggleThemeAction;
