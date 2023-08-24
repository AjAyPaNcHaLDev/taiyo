import LineGraph from "../components/LineGraph" 
import DefaultNavbar from "../components/Navbar"
import DefaultSidebar from "../components/SideBar" 
const LineChart = () => { 
  return (
    <>
    <DefaultNavbar/>
    <section className="h-screen w-full flex flex-col sm:flex-row gap-5">
       <DefaultSidebar className="sm:block  " />  {/* Hide sidebar on small screens */}
       <div>
       <div className="p-5 -ml-5  shadow-sm bg-white">
          <h4>All Charts And Map</h4>
        </div>
        <div   className="  p-5  rounded-md   shadow-sm bg-white m-5 ">
       <LineGraph/>
        </div>
       </div>
      </section>
      </>
  )
}

export default LineChart