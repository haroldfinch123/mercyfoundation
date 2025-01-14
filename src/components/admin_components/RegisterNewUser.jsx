import React, { useEffect, useState } from 'react'
import AdminFooter from './Footer'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { NewUserRegSchema } from '../../schemas';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { reigsterUser } from '../../services/mercyAdminServices';

function RegisterNewUser() {
    const navigate = useNavigate();
   
    const initialValues = {
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        city: '',
        about: '',
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: NewUserRegSchema,
        onSubmit: (values, action) => {

            
            
            reigsterUser(values).then(regUserResp => {
                console.log("🚀 ~ reigsterUser ~ regUserResp:", regUserResp.data)
                
                Swal.fire("User Registration Status", "User info have been registered successfully.", "success");

                
                
            }).catch(error => {
                console.log("🚀 ~ reigsterUser ~ error:", error)
            })

           
           
            navigate("/view-authorized-users",{ state: { refresh: true }});
            
        }
    })


    useEffect(() => {
        document.title = "Project Mercy | Register User"
        
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
                                            <label htmlFor="exampleInputName1" >First Name</label>
                                            <input type="text" className="form-control " name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter First Name" />
                                            {errors.firstName && touched.firstName ? (<p className='text-danger'>{errors.firstName}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Last Name</label>
                                            <input type="text" className="form-control " name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Last Name" />
                                            {errors.lastName && touched.lastName ? (<p className='text-danger'>{errors.lastName}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Contact Number</label>
                                            <input type="number" className="form-control " name='contactNumber' value={values.contactNumber} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Contact Number" />
                                            {errors.contactNumber && touched.contactNumber ? (<p className='text-danger'>{errors.contactNumber}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Email ID</label>
                                            <input type="email" className="form-control " name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Email ID" />
                                            {errors.email && touched.email ? (<p className='text-danger'>{errors.email}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Address</label>
                                            <input type="text" className="form-control " name='city' value={values.city} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Address" />
                                            {errors.city && touched.city ? (<p className='text-danger'>{errors.city}</p>) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1" >Role</label>
                                            <input type="text" className="form-control " name='about' value={values.about} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Role of the User" />
                                            {errors.about && touched.about ? (<p className='text-danger'>{errors.about}</p>) : null}
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

export default RegisterNewUser