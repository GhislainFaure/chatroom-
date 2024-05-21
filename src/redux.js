import { configureStore, createSlice } from "@reduxjs/toolkit";
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
  newMessage: "",
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

export const store = configureStore({
  reducer: {
    messages: messageSlice.reducer,
  },
});

// function pour ajouter un id dans un tableau d'objets
