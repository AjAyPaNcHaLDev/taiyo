import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for a single contact
interface Contact{
    first_name:string;
    last_name:string;
    phone:number;
    email:string;
  status:boolean;
id:number
}

// Define a type for the slice state
interface ContactState {
  contacts:Contact[]
}

// Define the initial state using that type
const initialState: ContactState = {
    contacts:[{first_name:"ajay",last_name:"panchal",phone:8570091377,email:"ajay8570091@gmail.com",status:false,id:1}] 
}

export const contactSlice = createSlice({
  name: 'contact',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addContact: (state,action: PayloadAction<any>) => {
      state.contacts.push({...action.payload,id:state.contacts.length+1})
    },
    deleteContact: (state,action:PayloadAction<any>) => { 

      state.contacts=state.contacts.filter(ct=>{
      if(ct.id!=action.payload)
      return ct;
      })
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateContact: (state, action: PayloadAction<any>) => {
      const updatedContact = action.payload;
        state.contacts = state.contacts.map(contact => 
          contact.id === updatedContact.id ? updatedContact : contact
        );
    },
  },
})
 export const {addContact,deleteContact,updateContact} =contactSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectContact = (state: RootState) => state.contacts.contacts

export default contactSlice.reducer