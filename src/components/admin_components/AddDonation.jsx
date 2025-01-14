import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { DonationSchema, DonorsRegistrationSchema } from '../../schemas';
import { useFormik, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { formatDate, formatDateInDMYFormat, generateRandomString, sendSMS } from '../../services/helper';
import { fetchAvailableFundsInfo, saveTransactionInfo, updateAvailableFundInfo } from '../../services/userService';
import Swal from 'sweetalert2';
import { fetchAllBankAccountsInfo, fetchDonorsInfoUsingContactNumber, registerDonationInfo } from '../../services/mercyAdminServices';

function AddDonation() {
    const navigate = useNavigate();
    const [donorInfo, setDonorInfo] = useState("");
    const [bankAccounts,setBankAccounts] = useState([]);
    const initialValues = {
        donorName: '',
        donorContactNumber: '',
        donationAmount: '',
        accountNumber: '',
        transactionID: '',
        paymentMode: '',
        collectedBy: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: DonationSchema,
        onSubmit: (values, action) => {

            let currentTime = formatDate(new Date())
            const loggedInUserName = localStorage.getItem("mercyUserName");
            values.collectedBy = loggedInUserName;

            if (donorInfo.length != 0) {
                values.donorName = donorInfo;
            }

            if (values.paymentMode != "Cash"){
                values.accountNumber = values.paymentMode;
            }
            //values.donorName = donorInfo
            registerDonationInfo(values).then(regDonationResp => {
                console.log("🚀 ~ registerDonationInfo ~ regDonationResp:", regDonationResp.data)
                const message = `Thanks for the donation dear ${values.donorName}. Project Mercy`;
                Swal.fire("Donation Registration Status", regDonationResp.data.message, "success");

                //sendSMS(message,values.donorContactNumber);
                Swal.fire({
                    title: `<strong> ${regDonationResp.data.message}</strong>`,
                    icon: 'success',
                    html:

                        `<a href="http://localhost:8085/fetch/donationReceipt/${regDonationResp.data.donationReceiptName}" target="_blank" className="btn btn-primary">Print Donation Receipt</a>`,
                    showCloseButton: true,

                    focusConfirm: false

                })
            }).catch(error => {
                console.log("🚀 ~ registerDonationInfo ~ error:", error)
            })

            console.log("🚀 ~ AddDonation ~ donorInfo:", donorInfo)
            console.log("🚀 ~ AddDonation ~ values:", values)

            console.log("🚀 ~ AddDonation ~ donorInfo:", donorInfo)

            console.log("🚀 ~ AddDonation ~ values:", values)
            navigate("/view-donations",{ state: { refresh: true } });
            //navigate("/view-donations");
            
        }
    })

    const checkRegisteredVolunteerOrNot = (e) => {
        e.preventDefault();
        let phoneNumber = document.getElementsByName("donorContactNumber")[0].value;
        console.log("🚀 ~ checkRegisteredVolunteerOrNot ~ phoneNumber:", phoneNumber)
        fetchDonorsInfoUsingContactNumber(phoneNumber).then(resp => {

            if (resp.data.length != 0) {
                let existingDonorInfo = resp.data;
                setDonorInfo(existingDonorInfo.memberName);
                console.log("resp.data : " + resp.data);

            } else {
                console.log("No registered donor found for this contact number.");
                Swal.fire("Add Donation Info Status", "Entered Mobile Number is not registered in the system. Please do the registration.", "warning");
                setDonorInfo("");
            }

        }).catch(error => {
            console.log("🚀 ~ AddDonation ~ error:", error)
            //console.log("🚀 ~ AddDonation ~ error:", error.response.data.message)

            Swal.fire("Add Donation Info Status", error.response.data.message, "error");
        })
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

    useEffect(() => {
        console.log("🚀 ~ donorInfo updated:", donorInfo);
        
    }, [donorInfo]);

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
                                    <i className="mdi mdi-check-circle" />
                                </span> Register Donation Info
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Register Donation Info</h4>
                                    <form className="forms-sample" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="exampleInputName1" >Phone Number</label>
                                                    <input type="text" className="form-control " name='donorContactNumber' value={values.donorContactNumber} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Mobile Number" />
                                                    {errors.donorContactNumber && touched.donorContactNumber ? (<p className='text-danger'>{errors.donorContactNumber}</p>) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <br />
                                                    <button type='submit' className="btn btn-gradient-primary me-2" onClick={(e) => checkRegisteredVolunteerOrNot(e)} >Check Details</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Donor Name </label>

                                            <input type="text" className="form-control " name="donorName"
                                                value={donorInfo || values.donorName}
                                                onChange={handleChange}
                                                placeholder="Enter Donor Name"
                                                readOnly={!!donorInfo} />
                                            {/* {errors.donorName && touched.donorName ? (<p className='text-danger'>{errors.donorName}</p>) : null} */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Donor Contact Number</label>
                                            <input type="text" className="form-control " name='donorContactNumber' value={values.donorContactNumber} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Donor Contact Number" />
                                            {errors.donorContactNumber && touched.donorContactNumber ? (<p className='text-danger'>{errors.donorContactNumber}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Donation Amount</label>
                                            <input type="number" className="form-control " name='donationAmount' value={values.donationAmount} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Donation Amount" />
                                            {errors.donationAmount && touched.donationAmount ? (<p className='text-danger'>{errors.donationAmount}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Payment Mode</label>
                                            <select className="form-control" name='paymentMode' value={values.paymentMode} onChange={handleChange} onBlur={handleBlur} >
                                                <option selected>Select Payment Mode</option>
                                                <option value="Cash"> Cash </option>
                                                {
                                                bankAccounts.map((account,index)=>(
                                                  <option value={account.accountNumber}>{account.accountNumber} ({account.bankName})</option>
                                                ))
                                              }
                                                {/* <option value="Phone Pe"> Phone Pe </option>
                                                <option value="G Pay"> G Pay </option>
                                                <option value="Paytm"> Paytm </option>
                                                <option value="Bharat Pe"> Bharat Pe </option>
                                                <option value="Others">Others</option> */}
                                            </select>
                                            {errors.paymentMode && touched.paymentMode ? (<p className='text-danger'>{errors.paymentMode}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Transaction ID</label>
                                            <input type="text" className="form-control " name='transactionID' value={values.transactionID} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Transaction ID" />
                                            {errors.transactionID && touched.transactionID ? (<p className='text-danger'>{errors.transactionID}</p>) : null}
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

export default AddDonation