import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  error: null,
  editModalIsOpen: false,
  activeContact: null,
  deleteModalIsOpen: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    openEditModal: (state, action) => {
      state.editModalIsOpen = true;
      state.activeContact = action.payload;
    },
    closeEditModal: state => {
      state.editModalIsOpen = false;
      state.activeContact = null;
    },
    openDeleteModal: (state, action) => {
      state.deleteModalIsOpen = true;
      state.activeContact = action.payload;
    },
    closeDeleteModal: state => {
      state.deleteModalIsOpen = false;
      state.activeContact = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.isLoading = false; // Заміна state.loading на state.isLoading
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const {
  openEditModal,
  closeEditModal,
  openDeleteModal,
  closeDeleteModal,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
