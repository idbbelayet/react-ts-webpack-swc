import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { themeReducer } from './themeReducer';
const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

// RootState type for useSelector
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
