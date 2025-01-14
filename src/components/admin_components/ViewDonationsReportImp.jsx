import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import {  fetchAllVolunteers } from '../../services/userService';
import { useLocation } from 'react-router-dom';
import { fetchAllDonationsInfo } from '../../services/mercyAdminServices';

function ViewDonationsReport() {
    const [donations,setDonations] = useState([]);
    const location = useLocation();

    const fetchData = () => {
        fetchAllDonationsInfo()
            .then((resp) => {
                console.log("🚀 ~ fetchAllDonationsInfo ~ resp:", resp.data);
                setDonations(resp.data);
            })
            .catch((error) => {
                console.log("🚀 ~ fetchAllDonationsInfo ~ error:", error);
            });
    };

    useEffect(() => {
        console.log("🚀 ~ useEffect ~ fetchData:", fetchData)
        // setTimeout(()=>{
        //     fetchData();
        // },1000)
        fetchData();
    },[])

    // useEffect(() => {
    //     document.title = "Project Mercy | View Donations Info"
    //     const fetchData = () => {
    //         fetchAllDonationsInfo()
    //             .then((resp) => {
    //                 console.log("🚀 ~ fetchAllDonationsInfo ~ resp:", resp.data);
    //                 setDonations(resp.data);
    //             })
    //             .catch((error) => {
    //                 console.log("🚀 ~ fetchAllDonationsInfo ~ error:", error);
    //             });
    //     };

    //     fetchData();

    //     // Check if navigation included a refresh flag
    //     if (location.state?.refresh) {
    //         fetchData();
    //     }
    // }, [location.state]);

    
    // useEffect(() => {
    //     document.title = "Project Mercy | View Donations Info"
       
    //         fetchAllDonationsInfo()
    //             .then((resp) => {
    //                 console.log("🚀 ~ fetchAllDonationsInfo ~ resp:", resp.data);
    //                 setDonations(resp.data);
    //             })
    //             .catch((error) => {
    //                 console.log("🚀 ~ fetchAllDonationsInfo ~ error:", error);
    //             });
    // }, []);
    
    return (
        <div className="container-scroller">
            {/* <AdminHeader /> */}
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
                                </span> View Donations Report
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">List of Donations</h4>

                                    <table className="table table-striped table-responsive">
                                        <thead>
                                            <tr>
                                                <th> # </th>
                                                <th> Date </th>
                                                <th> Donor Name </th>
                                                <th> Donation Amount </th>
                                                <th> Payment Mode </th>
                                                <th> Account Number </th>
                                                <th> Transaction ID </th>                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {   
                                                donations.map((donation,index) => (
                                                    <tr key={index} >
                                                        <td> {index+1} </td>
                                                        <td> {donation.date} </td>
                                                        <td> {donation.donorName} </td>
                                                        <td> {donation.donationAmount}</td>
                                                        <td> {donation.paymentMode} </td>
                                                        <td> {donation.accountNumber} </td>
                                                        <td> {donation.transactionID} </td>
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

export default ViewDonationsReport