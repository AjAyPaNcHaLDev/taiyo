import { Navbar } from 'flowbite-react'; 
import { Link } from "react-router-dom";
import { Dropdown } from 'flowbite-react';
export default function DefaultNavbar() {
  window.document.title="Taiyo.AI Assignment - Front End Engineer";
  return (
    <Navbar
      fluid
      className=' w-screen m-0'
      rounded
    >
      <Navbar.Brand
        href="https://flowbite-react.com"
      >
        <img
          alt="Taiyo React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://taiyo.ai/wp-content/uploads/Taiyo-logo.png"
        />
        <span className="self-center whitespace  font-semibold dark:text-white">
        Taiyo.AI Assignment - Front End Engineer
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Link className={classOf.link} to={'/'}>Dashboard</Link>
      <Link className={classOf.link}   target='_black' to="https://github.com/AjAyPaNcHaLDev/taiyo">Documentation</Link>
      <div className={classOf.link} >
      <Dropdown
          inline
          label={'Contact'}
        >
          <Dropdown.Item>
            
      <Link className={classOf.link} to={'/contacts'}>Contacts</Link>
          </Dropdown.Item>
          <Dropdown.Item>
      <Link className={classOf.link} to={'/add-contact'}>Add Contacts</Link>
          </Dropdown.Item>  
        </Dropdown>
          </div>

      <div className={classOf.link} >
      <Dropdown
          inline
          label={'Charts And Map'}
        >
          <Dropdown.Item>
            
      <Link className={classOf.link} to={'/chart'}>Line Chart</Link>
          </Dropdown.Item>
          <Dropdown.Item>
      <Link className={classOf.link} to={'/map'}>Leaflet Map</Link>
          </Dropdown.Item>  
        </Dropdown>
          </div>
      </Navbar.Collapse>
    </Navbar>
  )
}



const classOf={
  link:"block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
}