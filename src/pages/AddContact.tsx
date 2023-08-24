import AddContactForm from "../components/AddContactForm";
import ContactCard from "../components/ContactCard";
import DefaultNavbar from "../components/Navbar";
import DefaultSidebar from "../components/SideBar";
import { useAppSelector } from "../store/hooks";

const AddContact = () => {
  const mycontacts=useAppSelector(state=>state.contacts.contacts);

  return (
    <>
      <DefaultNavbar />
      <section className="h-screen flex flex-col sm:flex-row gap-5">
        <DefaultSidebar className="sm:block  " /> {/* Hide sidebar on small screens */}
        <div>
       {/* <div className="h-min p-5 -ml-5 w-screen shadow-sm bg-white">
          <h4>Add Contacts</h4>
        </div> */}
        <div className="p-5 rounded-md w-full  flex flex-wrap flex-row justify-start  gap-5 
        ">
          <div>
            
        <AddContactForm />
          </div> 
       <div className="p-5 rounded-md  flex flex-wrap flex-row justify-start  gap-5 ">
       {
        mycontacts
          .slice(-5).reverse() // Get the last 5 elements from the array
          .map((c: any, k: number) => <ContactCard contact={c} key={k} />)
      }

       </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default AddContact;
