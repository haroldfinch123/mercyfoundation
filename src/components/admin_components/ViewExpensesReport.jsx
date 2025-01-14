import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useLocation } from 'react-router-dom';
import { fetchAllExpenses } from '../../services/mercyAdminServices';

function ViewExpensesReport() {
    const [expensesData,setExpensesData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        document.title = "Project Mercy | View Expenses Info"
        const fetchData = () => {
            fetchAllExpenses()
                .then((resp) => {
                    console.log("🚀 ~ fetchAllExpenses ~ resp:", resp.data);
                    setExpensesData(resp.data);
                })
                .catch((error) => {
                    console.log("🚀 ~ fetchAllExpenses ~ error:", error);
                });
        };

        fetchData();

        // Check if navigation included a refresh flag
        if (location.state?.refresh) {
            fetchData();
        }
    }, [location.state]);
    
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
                                </span> View Expenses Info
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">List of Mercy Org Expenses</h4>

                                    <table className="table table-hover table-responsive">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Date</th>
                                                <th>Expense For</th>
                                                <th>Expense Amount</th>
                                                <th>Payment Mode</th>
                                                <th>Description</th>
                                                <th>Registered By</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                expensesData.map((expense,index)=> (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{expense.recordedOn}</td>
                                                        <td>{expense.expensesFor}</td>
                                                        <td>{expense.spendAmount}</td>
                                                        <td>{expense.paymentMode}</td>
                                                        <td>{expense.description}</td>
                                                        <td>{expense.registeredBy}</td>
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

export default ViewExpensesReport