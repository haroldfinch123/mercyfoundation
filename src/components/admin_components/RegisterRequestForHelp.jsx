import React from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ExpensesRegSchema, RegisterHelpRequestSchema } from '../../schemas';
import { formatDate, formatDateInDMYFormat, generateRandomString } from '../../services/helper';
import { fetchAvailableFundsInfo, registerExpenseInfo, saveTransactionInfo, updateAvailableFundInfo } from '../../services/userService';
import Swal from 'sweetalert2';
import { registerHelpRequest } from '../../services/mercyAdminServices';

function RegisterRequestForHelp() {
    const navigate = useNavigate();
    const initialValues = {
        date: '',
        requestId: '',
        requestDate: '',
        applicantName: '',
        contactNumber: '',
        address: '',
        emailId: '',
        requestedAmount: '',
        applicationStatus : '',
        description : '',
        aadharCardNumber : '',
        panCardNumber : '',
        registeredBy: '',
        remarks : ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: RegisterHelpRequestSchema,
        onSubmit: (values, action) => {

            let currentTime = formatDate(new Date())
            const loggedInUserName = localStorage.getItem("mercyUserName");
            values.registeredBy = loggedInUserName; 
            registerHelpRequest(values).then(registerResp =>  {
                console.log("🚀 ~ registerHelpRequest ~ registerResp:", registerResp.data) 
                //const message = `Request have been registered successfully for ${values.applicantName}. Request ID : ${values.requestId}`;
                Swal.fire("Register Application Status",registerResp.data.message,"success");  
                //navigate("/view-requests");             
            }).catch(error => {
                console.log("🚀 ~ registerHelpRequest ~ error:", error)                
                Swal.fire("Register Application Status",error.response.data.message,"error");               
            })
            action.resetForm();
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
                                </span> Register Help Request
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Register Help Request</h4>
                                    <form className="forms-sample" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <br />
                                            <label htmlFor="exampleInputName1" className='f23'>Applicant Name</label>
                                            <input type="text" className="form-control " placeholder="Enter Applicant Name" name='applicantName' value={values.applicantName} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.applicantName && touched.applicantName ? (<p className='text-danger'>{errors.applicantName}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" className='f23'>Applicant Contact Number</label>
                                            <input type="number" className="form-control " placeholder="Enter Applicant Contact Number" name='contactNumber' value={values.contactNumber} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.contactNumber && touched.contactNumber ? (<p className='text-danger'>{errors.contactNumber}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">Aadhar Card Number</label>
                                            <input type="number" className="form-control" placeholder="Enter Aadhar Card Number" name='aadharCardNumber' value={values.aadharCardNumber} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.aadharCardNumber && touched.aadharCardNumber ? (<p className='text-danger'>{errors.aadharCardNumber}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">PAN Card Number</label>
                                            <input type="text" className="form-control" placeholder="Enter PAN Card Number" name='panCardNumber' value={values.panCardNumber} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.panCardNumber && touched.panCardNumber ? (<p className='text-danger'>{errors.panCardNumber}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Applicant Address</label>
                                            <textarea class="form-control" name='address' value={values.address} onChange={handleChange} onBlur={handleBlur} rows="4" placeholder='Enter Applicant Address'></textarea>
                                            {errors.address && touched.address ? (<p className='text-danger'>{errors.address}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" className='f23'>Applicant Email ID</label>
                                            <input type="email" className="form-control " placeholder="Enter Applicant Email ID" name='emailId' value={values.emailId} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.emailId && touched.emailId ? (<p className='text-danger'>{errors.emailId}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">Requested Amount</label>
                                            <input type="number" className="form-control" placeholder="Enter Amount Needed for Applicant" name='requestedAmount' value={values.requestedAmount} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.requestedAmount && touched.requestedAmount ? (<p className='text-danger'>{errors.requestedAmount}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Request Desc</label>
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

export default RegisterRequestForHelp