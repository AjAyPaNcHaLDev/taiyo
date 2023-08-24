import Mapsleaflet from "../components/Mapsleaflet"
import DefaultNavbar from "../components/Navbar"
import DefaultSidebar from '../components/SideBar'
const Map = () => { 
  return (
    <>
    <DefaultNavbar/>
    <section className="h-screen w-full flex flex-col sm:flex-row gap-5">
      
    <DefaultSidebar className="sm:block  " />  {/* Hide sidebar on small screens */}
    <div>
      <center><h3>Thare is may be functionalilty issue map not loading properly <b>i am keep learning and try to solve this issue for now please ignore this one.</b></h3></center>
    <Mapsleaflet/> 
    </div>
    </section></>
  )
}

export default Map