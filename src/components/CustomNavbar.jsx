/* eslint-disable no-template-curly-in-string */
    import {NavLink as ReactLink, useNavigate} from 'react-router-dom'; 
    import React, { useEffect, useState } from 'react';
    import { doLogout, getCurrentUser, isLoggedIn } from '../auth';
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
      
    } from 'reactstrap';
    const CustomNavbar = ()=>{
      let navigate = useNavigate();
      const [isOpen, setIsOpen] = useState(false);
      const [login,setLogin]=useState(false);  
      const [user,setUser]=useState(undefined);  
      useEffect(()=>{
        setLogin(isLoggedIn());
        setUser(getCurrentUser());
      },[login]);
      
    const toggle = () => setIsOpen(!isOpen);
    const logout=()=>{
      doLogout(()=>{
        setLogin(false);
        navigate("/");
      });
    }
      return (
        <div>
          <Navbar 
            color="dark"
            dark
            expand="md"
            fixed="true"
            className="px-4"
            >
            <NavbarBrand tag={ReactLink} to="/">Bookaholics Hub</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink tag={ReactLink} to="">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink   tag={ReactLink}  to="">
                    Contact
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    More
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem tag={ReactLink} to="/services">Our Policies</DropdownItem>
                    <DropdownItem>Licenses</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav navbar>
              {
                login &&  (
                  <>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Market Place
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem tag={ReactLink} to="/user/buysell">Buy-Sell Section</DropdownItem>
                    <DropdownItem tag={ReactLink} to="/user/borrow">Borrow Section</DropdownItem>
                    <DropdownItem tag={ReactLink} to="/user/exchange">Exchange Section</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                  {/* <NavItem>
                  <NavLink tag={ReactLink} to={`/user/profile/${user.id}`}>{user.name}</NavLink>
                </NavItem> */}
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My Section
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem tag={ReactLink} to={`/user/profile/${user.id}`}>My Profile</DropdownItem>
                    <DropdownItem tag={ReactLink} to="">My Books</DropdownItem>
                    <DropdownItem tag={ReactLink} to="">My Orders</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                  <NavItem>
                  <NavLink onClick={logout}>Log out</NavLink>
                </NavItem>
                </>
                )
              }
              {
                !login && (
                  <>
                  <NavItem>
                  <NavLink tag={ReactLink} to="/signup">Sign up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signin">Sign in</NavLink>
                </NavItem>
                </>
                )
              }
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
export default CustomNavbar;