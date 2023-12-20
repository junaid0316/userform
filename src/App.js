import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink, Navigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import UserForm from './screens/UserForm';
import UserTable from './screens/UserTable';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaRectangleList } from "react-icons/fa6";
import { MdTableChart } from "react-icons/md";

function App() {

  const [toggle, settoggle] = useState(false);

  const toggleSidebar = () => {
    settoggle(!toggle);
  };

  console.log(window.innerWidth)
  return (
    <Router>
      <div className="main">
        <div className={`sidebar ${toggle ? 'togg' : ""}`}>
          <button className="btntoggle" onClick={toggleSidebar}>
            {toggle ? <IoClose size={18} /> : <FaBars size={18} />}
          </button>
          <Sidebar collapsed={window.innerWidth < 768 ? false : toggle} backgroundColor='#fff' collapsedWidth="140px" style={{ border: "none" }} className={window.innerWidth < 768 ? 'mobsidebar' : ""}>
            {
              window.innerWidth < 768 && <button className="btntoggle" onClick={toggleSidebar}>
                {toggle ? <IoClose size={18} /> : <FaBars size={18} />}
              </button>
            }
            <Menu
              menuItemStyles={{

                button: {

                  borderRadius: "6px",
                  backgroundColor: "#fff",
                  color: "#848484",
                  padding: "16px",
                  // the active class will be added automatically by react router
                  // so we can use it to style the active menu item
                  [`&.active`]: {
                    backgroundColor: '#7A5CFA',
                    color: '#fff',
                    borderRadius: "6px",
                  },
                },
              }}

            >
              <MenuItem active={true} component={<NavLink to="/userform" />} icon={<FaRectangleList size={18} />} rootStyles={{
                marginTop: "20px"

              }}> User Form</MenuItem>
              <MenuItem component={<NavLink to="/usertable" />} icon={<MdTableChart size={18} />} rootStyles={{
                marginTop: "20px",

              }}> User Table</MenuItem>
            </Menu>
          </Sidebar>
        </div>
        <div className="dash_content">
          <div className='dash_inner'>
            <Routes>
              <Route path="/userform" index element={<UserForm />} />
              <Route path="/usertable" element={<UserTable />} />
              <Route index element={<Navigate to="/userform" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router >
  );
}

export default App;
