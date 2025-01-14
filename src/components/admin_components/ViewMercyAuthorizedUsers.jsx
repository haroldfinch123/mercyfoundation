import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import {  fetchAuthorizedUsersInfo } from '../../services/mercyAdminServices';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

function ViewMercyAuthorizedUsers() {
    const [authorizedUsers,setAuthorizedUsers] = useState([]);
    const location = useLocation();
    useEffect(() => {
        document.title = "Project Mercy | View Authorized Users"
        const fetchData = () => {
            fetchAuthorizedUsersInfo().then(resp => {
                console.log("🚀 ~ fetchAuthorizedUsersInfo ~ resp:", resp.data)  
                setAuthorizedUsers(resp.data);          
            }).catch(error => {
                console.log("🚀 ~ fetchAuthorizedUsersInfo ~ error:", error)                        
            })
        }
        fetchData();
        if (location.state?.refresh) {
            console.log("🚀 ~ useEffect ~ refresh:", location.state?.refresh)
            fetchData();
        }
    },[location.state])

    // const deleteDonorInfo = (volunteerId) => {
    //     console.log("🚀 ~ deleteDonorInfo ~ volunteerId:", volunteerId)
    //     deleteVolunteerInfo(volunteerId).then(resp=>{
    //         console.log("🚀 ~ deleteVolunteerInfo ~ resp.data:", resp.data)
    //         let updatedVolunteers = volunteers.filter(vol => vol.uniqueMemberId != volunteerId);
    //         Swal.fire("Delete Volunteer Info",resp.data.message,"error");
    //         setVolunteers(updatedVolunteers);
    //     }).catch(error => {
    //         Swal.fire("Delete Volunteer Info",error.response.data.message,"error");
    //         console.log("🚀 ~ deleteVolunteerInfo ~ error:", error)            
    //     }) 
    // }
    return (
        <div className="container-scroller">
            <AdminHeader />
            {/* partial */}
            <div className="container-fluid page-body-wrapper">
                {/* partial:partials/_sidebar.html */}
                <AdminSidebar />
                {/* partial */}
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">
                                <span className="page-title-icon bg-gradient-primary text-white me-2">
                                    <i className="mdi mdi-table-large" />
                                </span> View Registered Mercy Donors
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">List of Registered Mercy Donors</h4>

                                    <table className="table table-striped table-responsive">
                                        <thead>
                                            <tr>
                                                <th> S.No </th>
                                                <th> First Name </th>
                                                <th> Last Name </th>
                                                <th> Contact Number </th>
                                                <th> Email </th>
                                                <th> Address </th>
                                                <th> Role </th>
                                                {/* <th> Delete </th> */}

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                authorizedUsers.map((user,index)=>(
                                                    <tr>
                                                        
                                                        <td> {index + 1} </td>                                                   
                                                        <td> {user.firstName} </td>
                                                        <td> {user.lastName} </td>
                                                        <td> {user.contactNumber} </td>
                                                        <td> {user.email} </td>
                                                        <td> {user.city} </td>
                                                        <td> {user.about} </td>
                                                    
                                                        {/* <td> <button  name="" className='btn btn-info' >Edit </button> </td>
                                                        <td> <button  name="" className='btn btn-danger' onClick={() => deleteDonorInfo(volunteer.uniqueMemberId)} > Delete </button> </td> */}

                                                    </tr>
                                                ))
                                            }
                                            
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>

                    <AdminFooter />

                </div>
            </div>
        </div>
    )
}

export default ViewMercyAuthorizedUsers