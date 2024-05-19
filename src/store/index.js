import { createStore } from "redux";
import reducer from "src/reducers";

/**
 * le store est le gardien du state
 * il a 3 méthodes principales
 * getState pour lire le state
 * dispatch pour modifier le state
 * suscribe pour s'abonner au changement de state
 *
 * createStore prend en argument la fonction reducer qui permet de retourner le state
 */

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
