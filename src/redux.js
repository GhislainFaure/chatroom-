import { combineSlices, configureStore, createSlice } from "@reduxjs/toolkit";
import { getHighestId } from "./selectors";

const messageSlice = createSlice({
  name: "messages",
  initialState: [
    { id: 1, author: "Super Chat", content: " Salut ça va ?" },
    { id: 2, author: "Guilux ", content: " wesh gros batard ?" },
    { id: 3, author: "Luc ", content: " wesh gros batard ?" },
    { id: 4, author: "Steven ", content: " wesh gros batard ?" },
    { id: 5, author: "bernard ", content: " wesh gros batard ?" },
    { id: 6, author: "Guilux ", content: " wesh gros batard ?" },
  ],
  reducers: {
    addMessage: (state, action) => {
      const newMessage = {
        id: getHighestId(state) + 1,
        author: "Léon",
        content: action.payload,
      };
      state.push(newMessage);
    },
  },
});
export const { addMessage } = messageSlice.actions;

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

export const { toggleIsOpen, changeEmail, changePassword, changeInputValue } =
  settingsSlice.actions;

const rootReducer = combineSlices(messageSlice, settingsSlice);

export const store = configureStore({
  reducer: rootReducer,
});
