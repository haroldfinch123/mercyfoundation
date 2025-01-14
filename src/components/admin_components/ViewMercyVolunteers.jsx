import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { deleteVolunteerInfo, fetchAllVolunteers } from '../../services/mercyAdminServices';
import Swal from 'sweetalert2';

function ViewMercyVolunteers() {
    const [volunteers,setVolunteers] = useState([]);

    useEffect(() => {
        document.title = "Project Mercy | View Volunteers"
        fetchAllVolunteers().then(resp => {
            console.log("🚀 ~ fetchAllVolunteers ~ resp:", resp.data)  
            setVolunteers(resp.data);          
        }).catch(error => {
            console.log("🚀 ~ fetchAllVolunteers ~ error:", error)                        
        })
    },[])

    const deleteDonorInfo = (volunteerId) => {
        console.log("🚀 ~ deleteDonorInfo ~ volunteerId:", volunteerId)
        deleteVolunteerInfo(volunteerId).then(resp=>{
            console.log("🚀 ~ deleteVolunteerInfo ~ resp.data:", resp.data)
            let updatedVolunteers = volunteers.filter(vol => vol.uniqueMemberId != volunteerId);
            Swal.fire("Delete Volunteer Info",resp.data.message,"error");
            setVolunteers(updatedVolunteers);
        }).catch(error => {
            Swal.fire("Delete Volunteer Info",error.response.data.message,"error");
            console.log("🚀 ~ deleteVolunteerInfo ~ error:", error)            
        }) 
    }
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
                                                <th> Donor Name </th>
                                                <th> Contact Number </th>
                                                <th> Email </th>
                                                <th> Address </th>
                                                <th> Edit </th>
                                                <th> Delete </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                volunteers.map((volunteer,index)=>(
                                                    <tr>
                                                        {/* <td className="py-1">
                                                            <img src="admin_assets/assets/images/faces-clipart/pic-1.png" alt="image" />
                                                        </td> */}
                                                        <td> {index + 1} </td>                                                   
                                                        <td> {volunteer.memberName} </td>
                                                        <td> {volunteer.contactNumber} </td>
                                                        <td> {volunteer.emailId} </td>
                                                        <td> {volunteer.address} </td>
                                                        <td> <button  name="" className='btn btn-info' >Edit </button> </td>
                                                        <td> <button  name="" className='btn btn-danger' onClick={() => deleteDonorInfo(volunteer.uniqueMemberId)} > Delete </button> </td>

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

export default ViewMercyVolunteers