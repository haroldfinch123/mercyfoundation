import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { deleteVolunteerInfo, fetchAllVolunteers } from '../../services/userService';
import { fetchAllRequestsForHelp } from '../../services/mercyAdminServices';

function ViewRegisteredRequests() {
    const [requests,setRequests] = useState([]);

    useEffect(() => {
        document.title = "Project Mercy | View Volunteers"
        fetchAllRequestsForHelp().then(resp => {
            console.log("🚀 ~ fetchAllRequestsForHelp ~ resp:", resp.data)  
            setRequests(resp.data);          
        }).catch(error => {
            console.log("🚀 ~ fetchAllRequestsForHelp ~ error:", error)                        
        })
    },[])

    
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
                                </span> View Registered Requests
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">List of Registered Help Requests</h4>

                                    <table className="table table-striped table-responsive">
                                        <thead>
                                            <tr>
                                                <th> S.No </th>
                                                <th> Date </th>
                                                <th> Request ID </th>
                                                <th> Applicant Name </th>                                                
                                                <th> Requested Amount </th>
                                                <th> Aadhar Card Number </th>
                                                <th> Contact No </th>
                                                <th> Desc </th>
                                                <th> Registered By </th>
                                                <th> Application Status </th>
                                                

                                                

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                requests.map((request,index)=>(
                                                    <tr>
                                                        {/* <td className="py-1">
                                                            <img src="admin_assets/assets/images/faces-clipart/pic-1.png" alt="image" />
                                                        </td> */}
                                                        <td> {index + 1} </td>                                                   
                                                        <td> {request.registeredOn} </td>
                                                        <td> {request.requestId} </td>
                                                        <td> {request.applicantName} </td>
                                                        <td> {request.requestedAmount} </td>
                                                        <td> {request.aadharCardNumber} </td>
                                                        <td> {request.contactNumber} </td>
                                                        <td> {request.description} </td>
                                                        <td> {request.registeredBy} </td>
                                                        
                                                        { request.applicationStatus === "Approved" ? (<td > <button className={'btn btn-success' }>  {request.applicationStatus} </button> </td>) : request.applicationStatus === "Rejected" ? (<td > <button className={'btn btn-danger' }>  {request.applicationStatus} </button> </td>) : (<td > <button className={'btn btn-warning' }>  {request.applicationStatus} </button> </td>) }
                                                        {/* <td > <button className={'btn btn-danger' }>  {request.applicationStatus} </button> </td> */}
                                                        {/* <td> <button  name=""  >Edit </button> </td>
                                                        <td> <button  name="" className='btn btn-danger' onClick={() => deleteDonorInfo(volunteer.id)} > Delete </button> </td> */}

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

export default ViewRegisteredRequests