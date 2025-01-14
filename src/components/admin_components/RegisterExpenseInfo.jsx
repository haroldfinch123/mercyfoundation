import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ExpensesRegSchema } from '../../schemas';
import { formatDate, formatDateInDMYFormat, generateRandomString } from '../../services/helper';
import Swal from 'sweetalert2';
import { fetchAllBankAccountsInfo, registerExpenseInfo } from '../../services/mercyAdminServices';


function RegisterExpenseInfo() {
    const [bankAccounts,setBankAccounts] = useState([]);

    const navigate = useNavigate();
    const initialValues = {
        date: '',
        expensesFor: '',
        spendAmount: '',
        paymentMode: '',
        description: '',
        expenseId: '',
        recordedOn: '',
        registeredBy: ''
    }

    
    useEffect(() => {
        document.title = "Project Mercy | Register Expense"
        fetchAllBankAccountsInfo().then(resp=> {
        console.log("🚀 ~ fetchAllBankAccountsInfo ~ resp:", resp.data)
        setBankAccounts(resp.data);

        }).catch(error => {
            console.log("🚀 ~ fetchAllBankAccountsInfo ~ error:", error)
            
        })
    },[])
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: ExpensesRegSchema,
        onSubmit: (values, action) => {
            values.registeredBy = localStorage.getItem("mercyUserName");
            registerExpenseInfo(values).then(resp => {
            console.log("🚀 ~ fetchAvailableFundsInfo ~ fundResp:", resp.data)
            Swal.fire("Expense Registration Status",resp.data.message,"success")
            navigate("/view-expenses-report");
        }).catch(error => {
            console.log("🚀 ~ fetchAvailableFundsInfo ~ error:", error)

            console.log("🚀 ~ fetchAvailableFundsInfo ~ error:", error.status)
            Swal.fire("Expense Registration Status",error.response.data.message,"error")
            // if(error.status === 401){
            //     console.log("Logout button Clicked");
            //     localStorage.removeItem("jwt_token");
            //     localStorage.removeItem("mercyUserName");
            //     localStorage.removeItem("loggedUser");
            //     Swal.fire("Session Expired","Dear User Your Session Expired plase login again.","warning");
            //     navigate("/login");
            // }
        })

            

        }
    })
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
                                    <i className="mdi mdi-minus" />
                                </span> Register Expense
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Register Mercy Org Expense</h4>
                                    <form className="forms-sample" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <br />
                                            <label htmlFor="exampleInputName1" className='f23'>Expense For</label>
                                            <input type="text" className="form-control " placeholder="Enter Expense For" name='expensesFor' value={values.expensesFor} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.expensesFor && touched.expensesFor ? (<p className='text-danger'>{errors.expensesFor}</p>) : null}
                                        </div>
                                        <div className="form-group ">
                                            <label >Expense Paid Through</label>
                                            <select className="form-control" name='paymentMode' value={values.paymentMode} onChange={handleChange} onBlur={handleBlur}  >
                                                <option selected>Please select Mode of Expense Payment</option>
                                                <option value="Cash"> Cash </option>
                                                {
                                                bankAccounts.map((account,index)=>(
                                                  <option value={account.accountNumber}>{account.accountNumber} ({account.bankName})</option>
                                                ))
                                              }
                                                {/* <option value="Account No1"> Account No1 </option>
                                                <option value="Account No2"> Account No2 </option> */}
                                            </select>
                                            {errors.paymentMode && touched.paymentMode ? (<p className='text-danger'>{errors.paymentMode}</p>) : null}
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">Expense Amount</label>
                                            <input type="number" className="form-control" placeholder="Enter Expense Amount" name='spendAmount' value={values.spendAmount} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.spendAmount && touched.spendAmount ? (<p className='text-danger'>{errors.spendAmount}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Expense Desc</label>
                                            <textarea class="form-control" name='description' value={values.description} onChange={handleChange} onBlur={handleBlur} rows="4" placeholder='Enter Expense Desc'></textarea>
                                            {errors.description && touched.description ? (<p className='text-danger'>{errors.description}</p>) : null}
                                        </div>


                                        <button type="submit" className="btn btn-gradient-primary me-2">Submit</button>
                                    </form>
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

export default RegisterExpenseInfo