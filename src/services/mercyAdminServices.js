import { myPrivateAxios } from "./helper";


export const reigsterUser = (userInfo) =>{
    return myPrivateAxios.post(`/create`,userInfo).then(resp => resp);
}

export const fetchAuthorizedUsersInfo = () =>{
    return myPrivateAxios.get(`/fetch/all/users/info`).then(resp => resp);
}

export const loginAsAdmin = (userCredentials) =>{
    return myPrivateAxios.post(`/generate-token`,userCredentials).then(resp => resp);
}
//

export const updateLastLoginTime = (userName) => {
    return myPrivateAxios.put(`/update/login_time/${userName}`).then(resp => resp);
}

export const fetchUserDetailsUsingUserName = (userName) => {
    return myPrivateAxios.get(`/find/${userName}`).then(resp => resp);
}

export const addBankAccountInfo = (bankAccountInfo) => {
    console.log("🚀 ~ addBankAccountInfo ~ bankAccountInfo:", bankAccountInfo)
    return myPrivateAxios.post(`/register/bank_account`,bankAccountInfo).then(resp => resp);
}
export const fetchAllBankAccountsInfo = () => {
    return myPrivateAxios.get(`/fetch/bank_accounts`).then(resp => resp);
}

export const fetchAccountDetailsUsingAccountNumber = (accountNumber) => {
    return myPrivateAxios.get(`/search/volunteer/${accountNumber}`).then(resp => resp);
}

export const fetchAvailableFundsInfo = () => {
    return myPrivateAxios.get(`/fetch/fund_info`).then(resp => resp);
}

export const fetchTodaysDonationAmount = () => {
    return myPrivateAxios.get(`/fetch/todays_donation`).then(resp => resp);
}

export const fetchTodaysExpenseAmount = () => {
    return myPrivateAxios.get(`/fetch/todays_expenses`).then(resp => resp);
}

export const fetchRequestsCount = (applicationStatus) => {
    return myPrivateAxios.get(`/fetch/requestsCount/${applicationStatus}`).then(resp => resp);
}

export const fetchOverallDonationsAmount = () => {
    return myPrivateAxios.get(`/fetch/overallDonationAmount`).then(resp => resp);
}

export const registerMercyVolunteer = (volunteerInfo) => {
    return myPrivateAxios.post(`/register/volunteer`,volunteerInfo).then(resp => resp);
}

export const fetchAllVolunteers = () => {
    return myPrivateAxios.get(`/fetch/volunteers`).then(resp => resp);
}

export const fetchAllDonationsInfo = () => {
    return myPrivateAxios.get(`/fetch/all/donations`).then(resp => resp);
}

export const deleteVolunteerInfo = (volunteerId) =>{
    return myPrivateAxios.delete(`/delete/volunteer/info/${volunteerId}`).then(resp => resp);
}

export const fetchAllExpenses = () => {
    return myPrivateAxios.get(`/fetch/expenses/reports`).then(resp => resp);
}

export const fetchAllRequestsForHelp = () => {
    return myPrivateAxios.get(`/fetch/registered/helpRequests`).then(resp => resp);
}

export const registerExpenseInfo = (expenseInfo) => {
    return myPrivateAxios.post(`/register/expense`,expenseInfo).then(resp => resp);
}

export const fetchDonorsInfoUsingContactNumber  = (contactNumber) => {
    return myPrivateAxios.get(`/search/volunteer/${contactNumber}`).then(resp => resp);
}

export const registerDonationInfo = (donationInfo) => {
    console.log("🚀 ~ registerDonationInfo ~ donationInfo:", donationInfo)
    return myPrivateAxios.post(`/register/donation_info`,donationInfo).then(resp => resp);
}

export const fetchDonationReceipt = (receiptName) => {
    return myPrivateAxios.get(`/fetch/donationReceipt/${receiptName}`).then(resp=> resp);
}

export const registerHelpRequest = (helpInfoObj) => {
    console.log("🚀 ~ registerHelpRequest ~ helpInfoObj:", helpInfoObj)
    return myPrivateAxios.post(`/register/helpRequest`,helpInfoObj).then(resp => resp);
}


