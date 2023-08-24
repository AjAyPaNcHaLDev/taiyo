import React from 'react'; 
import { Card } from 'flowbite-react';

import {  useAppDispatch } from "../store/hooks";
import { deleteContact } from '../store/features/contacts/contactsSlice';
import ContactUpdateModal from './ContactUpdateModal';

interface ctx {
  first_name: string;
  last_name: string;
  phone: number;
  email: string;
  status:boolean;
  id:number
}
 
interface ContactCardProps {
  contact: ctx;
}

const ContactCard: React.FC<ContactCardProps> = (props) => {
    const contact:ctx=props.contact; 
    const dispatch=useAppDispatch()


  return (
   <Card className=' h-min '>
      <div className="flex justify-center px-4 pt-4">
        Status: {contact.status==true?<span className=' text-green-500 '> Active </span>:
        <span className=' text-red-500 '> Inactive</span>}
         
      </div>
      <div className="flex flex-col items-center pb-10">
        
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white capitalize">
          {contact.first_name} {contact.last_name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {contact.email}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {contact.phone}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
        <ContactUpdateModal contact={contact}  />
          <a
            className="inline-flex items-center rounded-lg border border-red-300 bg-white px-4 py-2 text-center text-sm font-medium text-red-900 hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-200 dark:border-red-600 dark:bg-red-800 dark:text-white dark:hover:border-red-700 dark:hover:bg-red-700 dark:focus:ring-red-700"
            href="#"
            onClick={()=>{
                dispatch(deleteContact(contact.id))
            }}
          >
            <p>
              Delete
            </p>
          </a>
        </div>
      </div>
    </Card>
  );
};




export default ContactCard;
