import CovidCards from "../components/CovidCards"
import DefaultNavbar from "../components/Navbar"
import DefaultSidebar from "../components/SideBar" 
import DashItems from "../components/DashItems"
const Home = () => {
 
  return (
    <>
    <DefaultNavbar/>
    <section className="h-screen w-full flex flex-col sm:flex-row gap-5">
        <DefaultSidebar className="sm:block  " /> {/* Hide sidebar on small screens */}
       <div>
       <div className="h-min p-5 -ml-5 w-screen shadow-sm bg-white">
          <h4>Dashboard -Covid-19 </h4>
        </div>
        <div   className="  p-5 rounded-md w-full  flex flex-wrap flex-row justify-start  gap-5    ">  
        <DashItems/>
        </div>
        <div   className="  p-5 rounded-md   flex flex-wrap flex-row justify-start  gap-5    ">  
         <CovidCards  />
        </div>
       </div>
      </section></>
  )
}

export default Home