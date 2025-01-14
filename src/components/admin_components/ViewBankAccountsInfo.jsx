import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { fetchAllBankAccountsInfo } from '../../services/mercyAdminServices';

function ViewBankAccountsInfo() {
    const [bankAccounts,setBankAccounts] = useState([]);
    const colors = ["table-info","table-warning","table-danger","table-success","table-primary" ];


    useEffect(() => {
        document.title = "Project Mercy | View Bank Accounts Info"
        fetchAllBankAccountsInfo().then(resp=> {
        console.log("🚀 ~ fetchAllBankAccountsInfo ~ resp:", resp.data)
        setBankAccounts(resp.data);

        }).catch(error => {
            console.log("🚀 ~ fetchAllBankAccountsInfo ~ error:", error)
            
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
                                    <i className="mdi mdi-bank" />
                                </span> View Accounts Info
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">List of Available Bank Accounts</h4>
                                    
                                    <table className="table table-bordered table-responsive">
                                        <thead>
                                            <tr>
                                                <th> S.No </th>
                                                <th> Bank Name </th>
                                                <th> Account Number </th>
                                                <th> Account Name </th>
                                                <th> IFSC Code </th>
                                                <th> Balance </th>
                                                {/* <th>  </th>
                                                <th>  </th>
                                                <th>  </th> */}

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {   
                                                bankAccounts.map((account,index) => (
                                                    <tr className={colors[index % colors.length]}>
                                                        <td> {index+1} </td>
                                                        <td> {account.bankName} </td>
                                                        <td> {account.accountNumber} </td>
                                                        <td> {account.accountName}</td>
                                                        <td> {account.ifscCode} </td>
                                                        <td> {account.currentBalance} </td>
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

export default ViewBankAccountsInfo