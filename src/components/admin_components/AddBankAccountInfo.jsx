import React from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { AddNewBankSchema } from '../../schemas';
import { formatDate, generateRandomString } from '../../services/helper';
import Swal from 'sweetalert2';
import { addBankAccountInfo, fetchAccountDetailsUsingAccountNumber } from '../../services/mercyAdminServices';

function AddBankAccountInfo() {
    const navigate = useNavigate();
    const initialValues = {
        accountNumber: '',
        bankName: '',
        accountName: '',
        ifscCode: '',
        initialBalance: '',
        addedOn: '',
        registeredBy: '',
        lastUpdatedOn: '',
        updatedBy: '',
        currentBalance: '',
        swiftCode: '',
        uniqueId: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: AddNewBankSchema,
        onSubmit: (values, action) => {
            
            let currentTime = formatDate(new Date())
            const loggedInUserName = localStorage.getItem("mercyUserName");
            values.currentBalance = values.initialBalance;
            values.addedOn = currentTime;
            values.registeredBy = loggedInUserName;
            values.lastUpdatedOn = currentTime;
            values.uniqueId = "MCWTBNK-" + generateRandomString(6);
            values.updatedBy = loggedInUserName;
            
            console.log("🚀 ~ AddBankAccountInfo ~ values:", values)

            addBankAccountInfo(values).then(resp => {
                console.log("🚀 ~ AddBankAccountInfo ~ resp:", resp.data)
                
                //Swal.fire("Add New Bank Account Status", string(resp.data), "error");
                navigate("/view-accounts-info");
            }).catch(error => {
                console.log("🚀 ~ AddBankAccountInfo ~ error:", error)
                Swal.fire("Add New Bank Account Status", "Something went wrong while saving the Account Info.", "error");
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
                                    <i className="mdi mdi-bank" />
                                </span> Add Account Info
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Add Bank Account Info</h4>
                                    <form className="forms-sample" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" className='f23'>Account Number</label>
                                            <input type="text" className="form-control " name='accountNumber' placeholder="Enter Account Number" value={values.accountNumber} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.accountNumber && touched.accountNumber ? (<p className='text-danger'>{errors.accountNumber}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleSelectGender" className='f23' >Bank Name</label>
                                            <select className="form-control" name='bankName' value={values.bankName} onChange={handleChange} onBlur={handleBlur}>
                                                <option selected>Select Bank Name</option>
                                                <option value="Bank of Baroda"> Bank of Baroda </option>
                                                <option value="Bank of India"> Bank of India</option>
                                                <option value="Bank of Maharashtra"> Bank of Maharashtra </option>
                                                <option value="Canara Bank"> Canara Bank </option>
                                                <option value="Central Bank of India"> Central Bank of India </option>
                                                <option value="Indian Bank"> Indian Bank </option>
                                                <option value="Indian Overseas Bank"> Indian Overseas Bank </option>
                                                <option value="Punjab And Sind Bank"> Punjab & Sind Bank </option>
                                                <option value="Punjab National Bank"> Punjab National Bank </option>
                                                <option value="State Bank of India"> State Bank of India </option>
                                                <option value="UCO Bank"> UCO Bank </option>
                                                <option value="Union Bank of India"> Union Bank of India </option>
                                                <option value="Axis Bank Limited">Axis Bank Limited</option>
                                                <option value="Bandhan Bank Limited">Bandhan Bank Limited</option>
                                                <option value="CSB Bank Limited">CSB Bank Limited</option>
                                                <option value="City Union Bank Limited">City Union Bank Limited</option>
                                                <option value="DCB Bank Limited">DCB Bank Limited</option>
                                                <option value="Dhanlaxmi Bank Limited">Dhanlaxmi Bank Limited</option>
                                                <option value="Federal Bank Limited">Federal Bank Limited</option>
                                                <option value="HDFC Bank Limited">HDFC Bank Limited</option>
                                                <option value="ICICI Bank Limited">ICICI Bank Limited</option>
                                                <option value="IndusInd Bank Limited">IndusInd Bank Limited</option>
                                                <option value="IDFC FIRST Bank Limited">IDFC FIRST Bank Limited</option>
                                                <option value="Jammu & Kashmir Bank Limited">Jammu & Kashmir Bank Limited</option>
                                                <option value="Karnataka Bank Limited">Karnataka Bank Limited</option>
                                                <option value="Karur Vysya Bank Limited">Karur Vysya Bank Limited</option>
                                                <option value="Kotak Mahindra Bank Limited">Kotak Mahindra Bank Limited</option>
                                                <option value="Nainital Bank Limited">Nainital Bank Limited</option>
                                                <option value="RBL Bank Limited">RBL Bank Limited</option>
                                                <option value="South Indian Bank Limited">South Indian Bank Limited</option>
                                                <option value="Tamilnad Mercantile Bank Limited">Tamilnad Mercantile Bank Limited</option>
                                                <option value="YES Bank Limited">YES Bank Limited</option>
                                                <option value="IDBI Bank Limited">IDBI Bank Limited</option>
                                            </select>
                                            {errors.bankName && touched.bankName ? (<p className='text-danger'>{errors.bankName}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">Account Name</label>
                                            <input type="text" className="form-control" name='accountName' placeholder="Enter Account Name" value={values.accountName} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.accountName && touched.accountName ? (<p className='text-danger'>{errors.accountName}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">IFSC Code</label>
                                            <input type="text" className="form-control" name='ifscCode' placeholder="Enter IFSC Code" value={values.ifscCode} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.ifscCode && touched.ifscCode ? (<p className='text-danger'>{errors.ifscCode}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">SWIFT Code</label>
                                            <input type="text" className="form-control" name='swiftCode' placeholder="Enter SWIFT Code" value={values.swiftCode} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.swiftCode && touched.swiftCode ? (<p className='text-danger'>{errors.swiftCode}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Initial Balance</label>
                                            <input type="text" className="form-control" name='initialBalance' placeholder="Enter Initial Balance" value={values.initialBalance} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.initialBalance && touched.initialBalance ? (<p className='text-danger'>{errors.initialBalance}</p>) : null}
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

export default AddBankAccountInfo