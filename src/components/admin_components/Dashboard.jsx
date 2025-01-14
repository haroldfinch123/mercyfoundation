import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from '../Footer';
import AdminFooter from './Footer';
import { checkUserLoggedIn, formatDate, formatDateInDMYFormat } from '../../services/helper';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { fetchAllDonationsInfo, fetchApprovedRequestsForHelp, fetchDonationsInfoByDate, fetchExpensesInfoByDate, fetchPendingRequestsForHelp, fetchRejectedRequestsForHelp } from '../../services/userService';
import {  fetchAvailableFundsInfo, fetchOverallDonationsAmount, fetchRequestsCount, fetchTodaysDonationAmount, fetchTodaysExpenseAmount } from '../../services/mercyAdminServices';

function Dashboard() {
    const navigate = useNavigate();
    const [donationsAmount,setDonationsAmount] = useState(0);
    const [availableCash,setAvailableCash] = useState(0);
    const [todaysExpense,setTodaysExpense] = useState(0);
    const [todaysDonationsAmount,setTodaysDonationsAmount] = useState(0);
    const [pendingHelpRequests,setPendingHelpRequests] = useState(0);
    const [approvedHelpRequests,setApprovedHelpRequests] = useState(0);
    const [rejectedHelpRequests,setRejectedHelpRequests] = useState(0);



    useEffect(() => {
        let currentTime = new Date();    
        let formattedDate = formatDateInDMYFormat(currentTime);
        if(!checkUserLoggedIn()){
            Swal.fire("Login Again","Please login Again","warning");
            navigate("/login");
        }
        document.title = 'Project Mercy | Dashboard'

        fetchOverallDonationsAmount().then(donationResp => {
            console.log("🚀 ~ fetchAllDonationsInfo ~ donationResp:", donationResp)
           
            setDonationsAmount(donationResp.data);
        }).catch(error => {
            console.log("🚀 ~ fetchAllDonationsInfo ~ error:", error)            
        })

        fetchAvailableFundsInfo().then(fundsResp => {
            console.log("🚀 ~ fetchAvailableFundsInfo ~ fundsResp:", fundsResp.data)            
            setAvailableCash(fundsResp.data.availableFundInCash);
        }).catch(error => {
            console.log("🚀 ~ fetchAvailableFundsInfo ~ error:", error)            
        })

        fetchTodaysExpenseAmount().then(expenseResp => {
            console.log("🚀 ~ fetchExpensesInfoByDate ~ expenseResp.data:", expenseResp.data)
            setTodaysExpense(expenseResp.data);
        }).catch(error => {
            console.log("🚀 ~ fetchExpensesInfoByDate ~ error:", error)            
        })

        fetchTodaysDonationAmount().then(todaysDResp =>{
            console.log("🚀 ~ fetchDonationsInfoByDate ~ todaysDResp :", todaysDResp.data )
            setTodaysDonationsAmount(todaysDResp.data);      
        }).catch(error => {
            console.log("🚀 ~ fetchDonationsInfoByDate ~ error:", error)
        })

        fetchRequestsCount("Pending").then(resp=>{
            console.log("🚀 ~ fetchPendingRequestsForHelp ~ resp:", resp.data)
            setPendingHelpRequests(resp.data);
        }).catch(error => {
            console.log("🚀 ~ fetchPendingRequestsForHelp ~ error:", error)            
        }) 
        fetchRequestsCount("Approved").then(resp=>{
            console.log("🚀 ~ fetchPendingRequestsForHelp ~ resp:", resp.data)
            setApprovedHelpRequests(resp.data);
        }).catch(error => {
            console.log("🚀 ~ fetchPendingRequestsForHelp ~ error:", error)            
        }) 
        fetchRequestsCount("Rejected").then(resp=>{
            console.log("🚀 ~ fetchPendingRequestsForHelp ~ resp:", resp.data)
            setRejectedHelpRequests(resp.data);
        }).catch(error => {
            console.log("🚀 ~ fetchPendingRequestsForHelp ~ error:", error)            
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
                                    <i className="mdi mdi-home" />
                                </span> Dashboard
                            </h3>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-danger card-img-holder text-white">
                                    <div className="card-body">
                                        <img src="admin_assets/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                        <h4 className="font-weight-normal mb-3 f23" >Today's Donations <i className="mdi mdi-library-plus mdi-24px float-right"  />
                                        </h4>
                                        <h2 className="mb-5 f23" > <strong>&#8377; {todaysDonationsAmount}/-</strong></h2>
                                        <h6 className="card-text" style={{fontSize:"12px"}}>Increased by 60%</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-secondary card-img-holder text-white">
                                    <div className="card-body">
                                        <img src="admin_assets/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                        <h4 className="font-weight-normal mb-3 f23">Today's Expenses <i className="mdi mdi-minus-box mdi-24px float-right" />
                                        </h4>
                                        <h2 className="mb-5">&#8377; {todaysExpense}/-</h2>
                                        <h6 className="card-text">Decreased by 10%</h6>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-primary card-img-holder text-white">
                                    <div className="card-body">
                                        <img src="admin_assets/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                        <h4 className="font-weight-normal mb-3 f23">Overall Donations <i className="mdi mdi-diamond mdi-24px float-right" />
                                        </h4>
                                        <h2 className="mb-5">&#8377; {donationsAmount}/-</h2>
                                        <h6 className="card-text">Increased by 5%</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-success card-img-holder text-white">
                                    <div className="card-body">
                                        <img src="admin_assets/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                        <h4 className="font-weight-normal mb-3 f23">Available Cash <i className="mdi mdi-cash mdi-24px float-right" />
                                        </h4>
                                        <h2 className="mb-5">&#8377; {availableCash}/-</h2>
                                        <h6 className="card-text">Increased by 5%</h6>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-warning card-img-holder text-white">
                                    <div className="card-body">
                                        <img src="admin_assets/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                        <h4 className="font-weight-normal mb-3 f23">Pending Requests <i className="mdi mdi-lan-pending mdi-24px float-right" />
                                        </h4>
                                        <h2 className="mb-5">{pendingHelpRequests}</h2>
                                        <h6 className="card-text">Decreased by 10%</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-info card-img-holder text-white">
                                    <div className="card-body">
                                        <img src="admin_assets/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                        <h4 className="font-weight-normal mb-3" style={{fontSize:"23px"}}>Approved Requests <i className="mdi mdi-check-circle mdi-24px float-right"  />
                                        </h4>
                                        <h2 className="mb-5" style={{fontSize:"20px"}}> {approvedHelpRequests}</h2>
                                        <h6 className="card-text" style={{fontSize:"12px"}}>Increased by 60%</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-secondary card-img-holder text-white">
                                    <div className="card-body">
                                        <img src="admin_assets/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                        <h4 className="font-weight-normal mb-3 f23">Rejected Requests <i className="mdi mdi-close-circle mdi-24px float-right" />
                                        </h4>
                                        <h2 className="mb-5">{rejectedHelpRequests}</h2>
                                        <h6 className="card-text">Increased by 5%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-7 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <h4 className="card-title float-left">Visit And Sales Statistics</h4>
                                            <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right" />
                                        </div>
                                        <canvas id="visit-sale-chart" className="mt-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Traffic Sources</h4>
                                        <canvas id="traffic-chart" />
                                        <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-12 grid-margin">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Recent Donations</h4>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th> Assignee </th>
                                                        <th> Subject </th>
                                                        <th> Status </th>
                                                        <th> Last Update </th>
                                                        <th> Tracking ID </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img src="admin_assets/assets/images/faces/face1.jpg" className="me-2" alt="image" /> David Grey
                                                        </td>
                                                        <td> Fund is not recieved </td>
                                                        <td>
                                                            <label className="badge badge-gradient-success">DONE</label>
                                                        </td>
                                                        <td> Dec 5, 2017 </td>
                                                        <td> WD-12345 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="admin_assets/assets/images/faces/face2.jpg" className="me-2" alt="image" /> Stella Johnson
                                                        </td>
                                                        <td> High loading time </td>
                                                        <td>
                                                            <label className="badge badge-gradient-warning">PROGRESS</label>
                                                        </td>
                                                        <td> Dec 12, 2017 </td>
                                                        <td> WD-12346 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="admin_assets/assets/images/faces/face3.jpg" className="me-2" alt="image" /> Marina Michel
                                                        </td>
                                                        <td> Website down for one week </td>
                                                        <td>
                                                            <label className="badge badge-gradient-info">ON HOLD</label>
                                                        </td>
                                                        <td> Dec 16, 2017 </td>
                                                        <td> WD-12347 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="admin_assets/assets/images/faces/face4.jpg" className="me-2" alt="image" /> John Doe
                                                        </td>
                                                        <td> Loosing control on server </td>
                                                        <td>
                                                            <label className="badge badge-gradient-danger">REJECTED</label>
                                                        </td>
                                                        <td> Dec 3, 2017 </td>
                                                        <td> WD-12348 </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                      
                    </div>
                    {/* content-wrapper ends */}
                    {/* partial:partials/_footer.html */}
                    <AdminFooter />
                    {/* partial */}
                </div>
                {/* main-panel ends */}
            </div>
            {/* page-body-wrapper ends */}
        </div>

    )
}

export default Dashboard