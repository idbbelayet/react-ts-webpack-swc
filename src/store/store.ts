import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { themeReducer } from './themeReducer';
import { navbarReducer } from './navBarReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  navbar: navbarReducer,
  form: reduxFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
