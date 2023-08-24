import ContactCard from "../components/ContactCard";
import DefaultNavbar from "../components/Navbar"
import DefaultSidebar from "../components/SideBar"
import {  useAppSelector } from "../store/hooks";

const Contacts =()=>{
  
  const mycontacts=useAppSelector(state=>state.contacts.contacts);
  interface ctx{
    first_name:string;
    last_name:string;
    phone:number;
    email:string;
    status:boolean;
    id:number
    }
    return<> 
    <DefaultNavbar/>
    <section className="h-screen w-full flex flex-col sm:flex-row gap-5">
        <DefaultSidebar className="sm:block  " /> {/* Hide sidebar on small screens */}
       <div>
       <div className="h-min p-5 -ml-5 w-screen shadow-sm bg-white">
          <h4>All Contacts</h4>
        </div>
        <div className="p-5 rounded-md w-full  flex flex-wrap flex-row justify-start  gap-5 
        ">
      {
        mycontacts.map((c:ctx,k:number)=><ContactCard contact={c} key={k} />)
      }
        </div>
       </div>
      </section>
    
    </>

}
export default Contacts