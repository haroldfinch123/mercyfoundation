import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchUserInfoUsingUserName } from '../../services/userService';
import Swal from 'sweetalert2';
import { fetchUserDetailsUsingUserName } from '../../services/mercyAdminServices';

function AdminSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let [userInfo,setUserInfo] = useState('');
     const navigate = useNavigate();

    useEffect(() => {
        let userName = localStorage.getItem("mercyUserName");
        fetchUserDetailsUsingUserName(userName).then(resp => {
            console.log("🚀 ~ fetchUserInfoUsingUserName ~ resp:", resp)
            setUserInfo(resp.data);
        }).catch(error => {
            console.log("🚀 ~ fetchUserInfoUsingUserName ~ error:", error)                        
        })
    },[])

    const toggleSidebar = () => {
        console.log("Executing toggleSidebar : ", isSidebarOpen)
        setIsSidebarOpen(!isSidebarOpen);
    };

    const logout = () =>{
        console.log("Logout button Clicked");
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("mercyUserName");
        localStorage.removeItem("loggedUser");
        Swal.fire("Logout","Log Out Successfull","success");
        navigate("/login");
    }
    return (
        <>

            <nav className={`sidebar sidebar-offcanvas ${isSidebarOpen ? 'open' : ''}`} id="sidebar" >
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src="admin_assets/assets/images/faces/face6.jpg" alt="profile" />
                                <span className="login-status online" />
                                {/*change to offline or busy as needed*/}
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2">{userInfo.firstName + " "+ userInfo.lastName}.</span>
                                <span className="text-secondary text-small">{userInfo.about}</span>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/dashboard"}>
                            <span className="menu-title" style={{ fontSize: "18px" }}>Dashboard</span>
                            <i className="mdi mdi-home menu-icon" style={{ fontSize: "18px" }} />
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to={"/blank"}>
                            <span className="menu-title" style={{ fontSize: "18px" }}>Blank</span>
                            <i className="mdi mdi-home menu-icon" style={{ fontSize: "18px" }} />
                        </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#bank-pages" aria-expanded="false" aria-controls="bank-pages">
                            <span className="menu-title " style={{ fontSize: "18px" }}>Users</span>
                            <i className="menu-person" />
                            <i className="mdi mdi-person" />
                        </a>
                        <div className="collapse" id="bank-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link f18" to={"/register-user"}> Register User </NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to={"/view-authorized-users"}> View Users </NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#user-pages" aria-expanded="false" aria-controls="user-pages">
                            <span className="menu-title " style={{ fontSize: "18px" }}>Bank Accounts</span>
                            <i className="menu-arrow" />
                            <i className="mdi mdi-person" />
                        </a>
                        <div className="collapse" id="user-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link f18" to={"/add-account-info"}> Add Account Info </NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to={"/view-accounts-info"}> View Accounts </NavLink></li>
                            </ul>
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#volunteers-pages" aria-expanded="false" aria-controls="volunteers-pages">
                            <span className="menu-title " style={{ fontSize: "18px" }}>Mercy Donors</span>
                            <i className="menu-arrow" />
                            <i className="mdi mdi-account-circle" />
                        </a>
                        <div className="collapse" id="volunteers-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link f18" to={"/register-volunteer"}> Register Donors </NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to={"/view-volunteers"}> View Donors </NavLink></li>
                                {/* <li className="nav-item"> <NavLink className="nav-link" to={"/view-volunteers"}> Register </NavLink></li>     */}
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#donation-pages" aria-expanded="false" aria-controls="donation-pages">
                            <span className="menu-title " style={{ fontSize: "18px" }}>Donations</span>
                            <i className="menu-arrow" />
                            <i className="mdi mdi-medical-bag menu-icon" />
                        </a>
                        <div className="collapse" id="donation-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link f18" to={"/register-donation"}> Register Donation </NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to={"/view-donations"}> View Donations </NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#expenses-pages" aria-expanded="false" aria-controls="expenses-pages">
                            <span className="menu-title " style={{ fontSize: "18px" }}>Mercy Expenses</span>
                            <i className="menu-arrow" />
                            <i className="mdi mdi-cash-usd" />
                        </a>
                        <div className="collapse" id="expenses-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link f18" to={"/register-expense"}> Register Expense </NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to={"/view-expenses-report"}> View Expenses Report </NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#requests-pages" aria-expanded="false" aria-controls="requests-pages">
                            <span className="menu-title " style={{ fontSize: "18px" }}>Requests For Help</span>
                            <i className="menu-arrow" />
                            <i className="mdi mdi-cash-usd" />
                        </a>
                        <div className="collapse" id="requests-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link f18" to={"/register-request"}> Register Help </NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to={"/view-requests"}> View Registered Requests </NavLink></li>
                            </ul>
                        </div>
                    </li>
                   
                   

                    <li className="nav-item sidebar-actions">
                        <span className="nav-link">

                            <button className="btn btn-block btn-lg btn-gradient-primary mt-4" onClick={logout}>Log Out</button>

                        </span>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AdminSidebar