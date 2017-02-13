import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { reducer as formReducer } from 'redux-form';

// import user from './user';
// import app from './app';
// import space from './space';

// export { app, user, space }

export default combineReducers({
  // user, app, space,
  // form: formReducer,
  routing: routerReducer,
});
