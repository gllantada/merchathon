import { createStore, compose } from "redux";
import rootReducer from ".";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "merchathon:",
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, composeEnhancers());

  let persistor = persistStore(store);
  return { store, persistor };
};
// export default store;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistConfig = {
//   key: "falabella_persist",
//   storage,
//   stateReconciler: hardSet,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducers);

// export default () => {
//   let store = createStore(
//     persistedReducer,
//     composeEnhancers(applyMiddleware(thunk, actionMidlewares))
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
