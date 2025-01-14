import React, { useEffect } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { formatDate, generateRandomString } from '../../services/helper';
import { fetchDonorsInfoUsingContactNumber } from '../../services/userService';
import Swal from 'sweetalert2';
import { DonorsRegistrationSchema } from '../../schemas';
import { registerMercyVolunteer } from '../../services/mercyAdminServices';

function AddVolunteerInfo() {
    useEffect(() => {
        document.title = "Project Mercy | Volunteer Registration"
    },[])
    const navigate = useNavigate();
    const initialValues = {
        memberName: '',
        contactNumber: '',
        gender: '',
        emailId: '',
        address: '',
        donationsCount: '',
        totalDonations: '',
        uniqueMemberId: '',
        registeredDate: ''        
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: DonorsRegistrationSchema,
        onSubmit: (values, action) => {
            
           

            registerMercyVolunteer(values).then(resp => {
                 console.log("🚀 ~ registerMercyVolunteer ~ resp:", resp.data)
                 Swal.fire("Add Volunteer Status",resp.data.message , "success");
                 navigate("/view-volunteers");
            }).catch(error => {
                console.log("🚀 ~ AddDonation ~ error:", error)
                Swal.fire("Register Volunteer Info Status", error.response.data.message, "error");
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
                                    <i className="mdi mdi-account-plus" />
                                </span> Register New Donor 
                            </h3>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Register New Donor Info</h4>
                                    <form className="forms-sample" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <br />
                                            <label htmlFor="exampleInputName1" className='f23'>Member Name</label>
                                            <input type="text" className="form-control " name='memberName' value={values.memberName} onChange={handleChange} onBlur={handleBlur}  placeholder="Enter Member Name" />
                                            {errors.memberName && touched.memberName ? (<p className='text-danger'>{errors.memberName}</p>) : null}
                                        </div>
                                            <div className="form-group ">
                                                <label >Gender</label>
                                                <select className="form-control" name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur} >
                                                    <option selected>Select Gender</option>
                                                    <option value="Male"> Male </option>
                                                    <option value="Female"> Female </option>
                                                    <option value="Organization"> Organization </option>
                                                    
                                                </select>
                                                {errors.gender && touched.gender ? (<p className='text-danger'>{errors.gender}</p>) : null}
                                            </div>


                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">Contact Number</label>
                                            <input type="text" className="form-control" name='contactNumber' value={values.contactNumber} onChange={handleChange} onBlur={handleBlur}  placeholder="Enter Contact Number" />
                                            {errors.contactNumber && touched.contactNumber ? (<p className='text-danger'>{errors.contactNumber}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Email ID</label>
                                            <input type="text" className="form-control" name='emailId' value={values.emailId} onChange={handleChange} onBlur={handleBlur}  placeholder="Enter Email ID" />
                                            {errors.emailId && touched.emailId ? (<p className='text-danger'>{errors.emailId}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Address</label>
                                            <textarea class="form-control" name='address' value={values.address} onChange={handleChange} onBlur={handleBlur}  rows="4" placeholder='Enter Volunteer Address'></textarea>
                                            {errors.address && touched.address ? (<p className='text-danger'>{errors.address}</p>) : null}
                                        </div>


                                        <button type="submit" className="btn btn-gradient-primary me-2">Register</button>
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

export default AddVolunteerInfo