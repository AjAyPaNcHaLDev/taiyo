import {useState} from "react";
import { Label, Radio, TextInput ,Button} from 'flowbite-react';
import { useAppDispatch } from "../store/hooks";
import { addContact } from "../store/features/contacts/contactsSlice"; 
export default function AddContactForm() {
    const dispatch =useAppDispatch();

    interface ctx{
      first_name:string;
      last_name:string;
      email:string;
      phone:string;
      status:boolean;
    }

  const [contact, setContact] = useState<ctx>({
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
    status:true
  });

  


  const submitHandler=(e:any)=>{
    e.preventDefault();
    dispatch(addContact(contact))
  }
    
  return (
    <form onSubmit={submitHandler}  
    style={{minWidth:"320px" ,width:500}}
    className="flex flex-col gap-4 justify-items-center 
    m-5 p-5 rounded-md bg-white
    ">
      <div>
        <h3 className='font-bold'>Create New Contact</h3>
      </div>
      <div>
        <div className="mb-2  block">
          <Label 
            htmlFor="first_name"
            value="First Name:"
          />
        </div>
        <TextInput
        //   color="success"
        //   helperText={<><span className="font-medium">Alright!</span>Username available!</>}
          id="first_name"
          placeholder="Loram" 
          required
          value={contact?.first_name}
          onChange={(e:any) => {
          setContact({...contact,first_name:e.target.value})
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="last_name"
            value="Last Name: "
          />
        </div>
        <TextInput 
          id="last_name"
          placeholder="Bonnie "
          value={contact?.last_name}
          onChange={(e:any) => {
          setContact({...contact,last_name:e.target.value})
          }}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="email"
            value="Email Address: "
          />
        </div>
        <TextInput 
        type='email'
          id="email"
          placeholder="example@gmail.com "
          value={contact?.email}
          onChange={(e:any) => {
          setContact({...contact,email:e.target.value})
          }}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="phone"
            value="Phone Number: "
          />
        </div>
        <TextInput 
          id="phone"
          type='phone'
          placeholder="+91 1234567890"
          value={contact?.phone}
          onChange={(e:any) => {
          setContact({...contact,phone:e.target.value})
          }}
          required
        />
      </div>
      <div>
        
      <fieldset
      className="flex max-w-md flex-row gap-4"
      id="radio"
    
    >
      <legend className="mb-4">
        Status :
      </legend>
      <div className="flex items-center gap-2">
        <Radio
          defaultChecked
          id="contact-status-1"
          name="contact-status"
          value="true"
          onChange={(e:any) => {
            e.target.checked==true?setContact({...contact,status:true}
              ):null
            }}
        />
        <Label htmlFor="contact-status-1">
          Active
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="contact-status-2"
          name="contact-status"
          value="false" 
          
          onChange={(e:any) => {
            e.target.checked==true?setContact({...contact,status:false}
              ):null
            }}
        />
        <Label htmlFor="contact-status-2">
          Inactive
        </Label>
      </div>
      
    </fieldset>
      </div>
      <div className='flex justify-center'>
      <Button type="submit">
        Create New
      </Button>
      </div>
    </form>
  )
}


