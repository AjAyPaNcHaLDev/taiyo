import { Sidebar } from 'flowbite-react';
import { HiHome,  HiUser,HiUserAdd ,HiUsers , HiPresentationChartLine ,HiMap} from 'react-icons/hi';
import { AiFillGithub} from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function MultiLevelDropdown(props:any) {
  return (
    <div className={"sidebar-wrapper  h-full "+props.className} >
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/">
            <Sidebar.Item 
              icon={HiHome}
            
            >
              <p>
              Dashboard
              </p>
            </Sidebar.Item> 

            </Link>
            <Link  target='_black' to="https://github.com/AjAyPaNcHaLDev/taiyo">
            <Sidebar.Item 
              icon={AiFillGithub}
            
            >
              <p>
              Documentation
              </p>
            </Sidebar.Item> 
            
            </Link>
            <Sidebar.Collapse
              icon={HiUser}
              label="Contacts"
            >
              <Link to="/contacts">
              <Sidebar.Item 
              icon={HiUsers}
              >
                Contacts
              </Sidebar.Item>
              </Link>
              <Link to="/add-contact">
              <Sidebar.Item  
              icon={HiUserAdd}
              >
                Add Contact
              </Sidebar.Item> 
              </Link>
            
            </Sidebar.Collapse> 

            <Sidebar.Collapse 
              label="Charts And Map"
            > 
             <Link to="/chart">
              <Sidebar.Item  
              icon={HiPresentationChartLine}
              >
                Line Chart
              </Sidebar.Item> 
              </Link>
              <Link to="/map">
              <Sidebar.Item 
              icon={HiMap}
              >
                Map
              </Sidebar.Item>
              </Link>
            
            
            </Sidebar.Collapse>


          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
