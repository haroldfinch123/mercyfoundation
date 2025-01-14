import axios from "axios";
import { isLoggedIn } from "./auth";

//export const BASE_URL = "http://localhost:3000"
export const BASE_URL = "http://localhost:8085"

export const myAxios = axios.create({
    baseURL: BASE_URL
});

export const myPrivateAxios = axios.create({
    baseURL:BASE_URL,
})

//Get token from LocalStorage
export const getToken =() =>{
    if(isLoggedIn()){
        //return 
        return JSON.parse(localStorage.getItem("jwt_token"));
    }else{
        return null;
    }
} 

myPrivateAxios.interceptors.request.use((config)=>{
    console.log(" ======================================== ");
    const token = getToken();
    console.log(`Bearer ${token}`);
    if(token) config.headers.Authorization = `Bearer ${token}`;

    console.log(config);
    return config;
    console.log(config.headers);
    console.log(" ======================================== ");
},error=>{
    Promise.reject(error);
})

const $ = window.$;
export const  formatDate = (date) => {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    };
    return new Intl.DateTimeFormat('en-US', options).format(date)
        .replace(', ', ' at ');
}

export function sendSMS(inputMessage, contactNumber) {
    console.log("🚀 ~ sendSMS ~ contactNumber:", contactNumber)
    console.log("🚀 ~  ~ sendSMS ~ inputMessage:", inputMessage)
    console.log("🚀 ~  ~ sendSMS ~ Executing sendSMS function")
    
  const apiKey = "uHhoaeVcAlLNKGB6pUC0TiIEskMWtvqQ924n1fygjrmSzJ5b7FXtm0Px4IkKejbOYpfdGCocWhSD6Rru";
  const sendId = "FSTSMS";
  const message = inputMessage;
  const number = contactNumber;
  const encodedMessage = encodeURIComponent(message);
  console.log(`https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&message=${encodedMessage}&language=english&route=q&numbers=${contactNumber}`);
  const route = "q";

//   const myUrl = `https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&sender_id=${sendId}&message=${encodedMessage}&route=${route}&numbers=${contactNumber}`;

//   console.log(myUrl);

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&message=${encodedMessage}&language=english&route=q&numbers=${contactNumber}`,
    "method": "GET"
  }
  
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

//   const myUrl = `https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&message=${encodedMessage}&route=${route}&numbers=${number}`;

//   console.log(myUrl);

//   axios.get(myUrl, {
//     headers: {
//       'async': true,
//       "crossDomain": true
//     }
//   })
//   .then(response => {
//     console.log("Response code:", response.status);
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

  console.log("🚀 ~ file: helper.js:18 ~ sendSMS ~ SMS send Successfully")

}

export function sendMobileSms(contactNumber) {
    
const myHeaders = new Headers();
myHeaders.append("Authorization", "App 7805fa0495126e9721d2e3e7873a3df4-dc91dc44-81e2-463c-b9be-136c7e5a9886");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const raw = JSON.stringify({
    "messages": [
        {
            "destinations": [{"to":contactNumber}],
            "from": "447491163443",
            "text": "Congratulations on sending your first message. Go ahead and check the delivery report in the next step."
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://e5gyvn.api.infobip.com/sms/2/text/advanced", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

export const generateRandomString = (n) => {
    let result = '';
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;

    for (let i = 0; i < n; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    //console.log("Generated random string:", result);
    return result;
}

export const  formatDateInDMYFormat = (date) => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
}


export const checkUserLoggedIn = () => {
    return localStorage.getItem("mercyUserName") != null;
}

