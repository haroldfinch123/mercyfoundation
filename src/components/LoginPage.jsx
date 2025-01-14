import React, { useEffect, useState } from 'react'
//import { useState } from 'react';
import { useFormik } from "formik"
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import { login, updateLastLoginTimeOfUser } from '../services/userService';
import { formatDate } from '../services/helper';
import { fetchUserDetailsUsingUserName, loginAsAdmin, updateLastLoginTime } from '../services/mercyAdminServices';
function LoginPage() {

  const navigate = useNavigate();
  const [userData,setUserData] = useState();
  const [userFullName,setUserFullName] = useState('');
  const initialValues = {
    userName: '',
    password: ''
  }


  const { values, errors, handleBlur, handleSubmit, handleChange, touched } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log("Cicked the Login Button");
      console.log(values);
      if(values.userName == "" || values.userName.length == 0) {
        Swal.fire("Login Status","Please enter the Username to login","warning");
        return;
      }
      if(values.password == "" || values.password.length == 0) {
        Swal.fire("Login Status","Please enter the Password to login","warning");
        return;
      }
      loginAsAdmin(values).then(resp => {
      console.log("🚀 ~ login ~ resp:", resp.data)
        
        if(resp.data.length === 0){
          Swal.fire("UnAuthorized Access","Dear user please provide the valid credentials to access the services.","error");
          return;
        }else{
          const loggedInUserInfo = resp.data[0];
          
          setUserData(loggedInUserInfo);
          localStorage.setItem("jwt_token",JSON.stringify(resp.data.token));
          localStorage.setItem("mercyUserName", values.userName);
          localStorage.setItem("loggedUser", values.userName);
          const currentTime = formatDate(new Date());          
          updateLastLoginTime(values.userName).then(updateLoginTimeResp => {
            console.log("🚀 ~ updateLastLoginTimeOfUser ~ updateLoginTimeResp.data:", updateLoginTimeResp.data)

          }).catch(error => {
            console.log("🚀 ~ updateLastLoginTimeOfUser ~ error:", error)
          })

          fetchUserDetailsUsingUserName(values.userName).then(userDetailsResp => {
            console.log("🚀 ~ fetchUserDetailsUsingUserName ~ userDetailsResp.data:", userDetailsResp.data)
            setUserFullName(userDetailsResp.data.firstName + " "+ userDetailsResp.data.lastName);
            let fullNameOfUser = userDetailsResp.data.firstName + " "+ userDetailsResp.data.lastName;
            Swal.fire("Login Status",`Welcome to Project Mercy Dear ${fullNameOfUser}`,"success");
          }).catch(error => {
            console.log("🚀 ~ fetchUserDetailsUsingUserName ~ error:", error)            
          })
           navigate("/dashboard")
        }
      }).catch(error => {
        console.log("🚀 ~ login ~ error:", error)
        
      })
      action.resetForm();
    }
  })

  useEffect(() => {
    document.title = "Login Page"
  }, [])

  const openeye = () => {
    console.log("Opening the eyes");
    document.getElementById("animcon").style.backgroundImage = "url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif)";
    document.getElementById("hands").style.marginTop = "110%";
  }
  const closeye = () => {

    console.log("Closing the eyes");
    document.getElementById("animcon").style.backgroundImage = "url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey_pwd.gif)";
    document.getElementById("hands").style.marginTop = "0%";
  }

  return (
    <>
      <div className="maincontainer monkeyContainer">
        <div className="monkeylogin">
          <div className="animcon" id="animcon">
            <img id="hands" src="https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/hands.png" />
          </div>
          <div className="formcon" onSubmit={handleSubmit}>
            <form >
              <input type="text" id="mail" onClick={openeye} className="tb" onChange={handleChange} onBlur={handleBlur} value={values.userName} name="userName" placeholder="User Name" autoComplete="off" />
              {errors.userName && touched.userName ? (<p className='form-danger'>{errors.userName}</p>) : null}
              <br />
              <br />
              <input type="password" onClick={closeye} id="pwdbar" className="tb" onChange={handleChange} onBlur={handleBlur} value={values.password} name="password" placeholder="Password" />
              {errors.password && touched.password ? (<p className='form-danger'>{errors.password}</p>) : null}
              <br />
              <br />
             
              <input type="submit" name className="sbutton "  defaultValue="L O G I N" />
              <br />
              <br />
            </form>
          </div>
          {/* <footer class="foot"><a style="color: #bababa; text-decoration: none;" href="">CodeWorks4U</a></footer> */}
        </div>
      </div>
    </>
  )
}

export default LoginPage