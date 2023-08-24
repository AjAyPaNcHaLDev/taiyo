import React ,{useState}from 'react'; 
import {Button,Label, Radio, TextInput , Modal} from 'flowbite-react';
import {  useAppDispatch } from "../store/hooks";
import {  updateContact } from '../store/features/contacts/contactsSlice';
 
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
const ContactUpdateModal: React.FC<ContactCardProps> = (props) =>{
    const contact:ctx=props.contact; 
    const [openModal, setOpenModal] = useState<string | undefined>();
    const prop = { openModal, setOpenModal };

    const dispatch =useAppDispatch();
  const [uContact, setUContact] = useState<any>({
    first_name:contact.first_name,
    last_name:contact.last_name,
    email:contact.email,
    phone:contact.phone,
    status:contact.status,
    id:contact.id
  });

 
  const submitHandler=(e:any)=>{
    e.preventDefault();
    prop.setOpenModal(undefined)
    console.log(uContact)
    dispatch(updateContact(uContact))
  }
    return( <>
      <Button onClick={() => prop.setOpenModal('default')}>Edit</Button>
    <Modal show={prop.openModal === 'default'} onClose={() => prop.setOpenModal(undefined)}>
      <form onSubmit={submitHandler} className="flex  flex-col gap-4 justify-items-center  ">
      <Modal.Header>Update Contact id <b>#{contact.id}</b></Modal.Header>
      <Modal.Body> 
      <div>
        <div className="mb-2 block">
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
          value={uContact?.first_name}
          onChange={(e:any) => {
          setUContact({...uContact,first_name:e.target.value})
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
          value={uContact?.last_name}
          onChange={(e:any) => {
          setUContact({...uContact,last_name:e.target.value})
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
          value={uContact?.email}
          onChange={(e:any) => {
            setUContact({...uContact,email:e.target.value})
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
          value={uContact?.phone}
          onChange={(e:any) => {
          setUContact({...uContact,phone:e.target.value})
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
        defaultChecked={uContact.status==true?true:false}
          id="contact-status-1"
          name="contact-status"
          value="true"
          onChange={(e:any) => {
            e.target.checked==true?setUContact({...uContact,status:true}
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
          defaultChecked={uContact.status==false?true:false}
          onChange={(e:any) => {
            e.target.checked==true?setUContact({...uContact,status:false}
              ):null
            }}
        />
        <Label htmlFor="contact-status-2">
          Inactive
        </Label>
      </div>
      
    </fieldset>
      </div> 
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" >Update </Button>
        <Button color="gray" onClick={() => prop.setOpenModal(undefined)}>
          Cancel
        </Button>
      </Modal.Footer>
    </form>
    </Modal></>
        )
}
export default ContactUpdateModal;