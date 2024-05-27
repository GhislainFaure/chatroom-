import { combineSlices, configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import logger from "redux-logger";

import { getHighestId } from "./selectors";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messagesArray: [
      { id: 1, author: "Super Chat", content: " Salut ça va ?" },
      { id: 2, author: "Guilux ", content: " bien ou quoi ?" },
      { id: 3, author: "Luc ", content: " oui merci ?" },
      { id: 4, author: "Steven ", content: " j'ai faim ?" },
      { id: 5, author: "bernard ", content: " on s'en tape ?" },
      { id: 6, author: "Guilux ", content: " ouai ouai ouai" },
    ],
    pseudo: "",
  },
  reducers: {
    addMessage: (state, action) => {
      const newMessage = {
        id: getHighestId(state.messagesArray) + 1,
        author: state.pseudo,
        content: action.payload,
      };
      state.messagesArray.push(newMessage);
    },
    saveUser: (state, action) => {
      state.pseudo = action.payload;
    },
  },
});
export const { addMessage, saveUser } = messageSlice.actions;

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isOpen: false,
    email: "",
    password: "",
  },
  reducers: {
    toggleIsOpen: (state, action) => {
      state.isOpen = !state.isOpen;
    },

    changeInputValue: (state, action) => {
      state[action.payload.inputType] = action.payload.inputValue;
    },
  },
});

export const { toggleIsOpen, changeInputValue } = settingsSlice.actions;

const rootReducer = combineSlices(messageSlice, settingsSlice);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const devTools = composeEnhancers(applyMiddleware);

// middleware LoginMD utilisé pour envoyer la requete axios et ensuite dispatcher l'action saveUSer avec la data dans messagesSlice
export const loginMD = (store) => (next) => (action) => {
  switch (action.type) {
    case "LOGIN": {
      const state = store.getState();
      const { email, password } = state.settings;
      axios
        .post("http://localhost:3001/login", { email, password })
        .then((response) => store.dispatch(saveUser(response.data.pseudo)))
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, loginMD),
});
