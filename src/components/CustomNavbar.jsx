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
            className="px-5 py-3"
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
                    {/* <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav navbar>
              {
                login && (user.role==="General") &&  (
                  <>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Market Place
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem tag={ReactLink} to="/user/buysell">Buy-Sell Section</DropdownItem>
                    <DropdownItem tag={ReactLink} to="/user/borrow">Borrow Section</DropdownItem>
                    <DropdownItem tag={ReactLink} to="/user/exchange">Exchange Section</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Requests
                  </DropdownToggle>
                  <DropdownMenu >
                  <DropdownItem tag={ReactLink} to={`/user/exchange-requests/${user.email}`}>Exchange Requests</DropdownItem>
                  <DropdownItem tag={ReactLink} to={`/user/borrow-requests/${user.email}`}>Borrow Requests</DropdownItem>
                  <DropdownItem tag={ReactLink} to={`/user/order-requests/${user.email}`}>Order Requests</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                 
                  <UncontrolledDropdown nav inNavbar direction='left'>
                  <DropdownToggle nav caret>
                    My Section
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem tag={ReactLink} to={`/user/profile/${user.id}`}>My Profile</DropdownItem>
                    <UncontrolledDropdown nav inNavbar direction='down' className='text-black'>
                        <DropdownToggle nav caret className='text-black' >
                          My Posts
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem tag={ReactLink} to={`/user/my-sell-posts/${user.email}`}>My Sell Posts</DropdownItem>
                          <DropdownItem tag={ReactLink} to={`/user/my-borrow-posts/${user.email}`}>My Borrow Posts</DropdownItem>
                          <DropdownItem tag={ReactLink} to={`/user/my-exchange-posts/${user.email}`}>My Exchange Posts</DropdownItem>
                       </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar direction='down' className='text-black'>
                        <DropdownToggle nav caret className='text-black' >
                          My Library
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem tag={ReactLink} to={`/user/my-purchase/${user.email}`}>My Purchase</DropdownItem>
                          <DropdownItem tag={ReactLink} to={`/user/my-borrow/${user.email}`}>My Borrowed Books</DropdownItem>
                          <DropdownItem tag={ReactLink} to={`/user/my-exchange/${user.email}`}>My Exchanged Books</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <DropdownItem tag={ReactLink} to={`/user/my-sell-records/${user.email}`}>My Sell Records</DropdownItem>
                    <DropdownItem tag={ReactLink} to={`/user/my-lend-records/${user.email}`}>My Lend Records</DropdownItem>
                    <DropdownItem tag={ReactLink} to={`/user/my-exchange-records/${user.email}`}>My Exchange Records</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={logout}>Log Out</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                 
                </>
                )
              }
                 {
                login && (user.role==="Publisher") &&  (
                  <>
                  <NavItem>
                  <NavLink tag={ReactLink} to="/user/buysell">Market Place</NavLink>
                </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My Section
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem tag={ReactLink} to={`/user/profile/${user.id}`}>My Profile</DropdownItem>
                    <DropdownItem tag={ReactLink} to={`/user/order-requests/${user.email}`}>Order Requests</DropdownItem>
                    <DropdownItem tag={ReactLink} to={`/user/my-sell-posts/${user.email}`}>My Sell Posts</DropdownItem>
                    <DropdownItem tag={ReactLink} to={`/user/my-sell-records/${user.email}`}>My Sell Records</DropdownItem>

                    <DropdownItem divider />
                    <DropdownItem onClick={logout}>Log Out</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                 
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