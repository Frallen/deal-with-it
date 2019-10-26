import { firestoreReducer, getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { getFirestore, reduxFirestore} from "redux-firestore";
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from "redux-form";
import firebase from "./../config/firebase"

import thunk from "redux-thunk";
import authReducer from "./authReducer";
import NavigationReducer from "./navigationReducer";
import projectReducer from "./projectReducer";
import registrationReducer from "./registrationReducer";

let reducers = combineReducers({
  Navigation: NavigationReducer,
  Auth: authReducer,
  Regis: registrationReducer,
  form: formReducer,
  project: projectReducer,
  firebase:firebaseReducer,
   firestore:firestoreReducer,
 
});

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, 
}
// ДЛЯ РАСШИРЕНИЯ В ХРОМЕ
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
////////// 

let store = createStore(
  reducers,
  composeEnhancers(
    reactReduxFirebase(firebase,rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    
  )
);



export default store;
