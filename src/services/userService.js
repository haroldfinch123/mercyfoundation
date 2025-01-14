import { myAxios } from "./helper"

export const login = (userCredentials) =>{
    return myAxios.get(`/users?userName=${userCredentials.userName}&password=${userCredentials.password}`).then(resp => resp);
}

export const fetchUserInfoUsingUserName = (userName) => {
    return myAxios.get(`/users?userName=${userName}`).then(resp => resp.data);
}

export const updateLastLoginTimeOfUser = (userInfo) => {
    return myAxios.put(`/users/${userInfo.id}`,userInfo).then(resp => resp);
}

export const fetchAccountDetailsUsingAccountNumber = (accountNumber) => {
    return myAxios.get(`/accounts?accountNumber=${accountNumber}`).then(resp => resp);
}

export const addBankAccountInfo = (bankAccountInfo) => {
    return myAxios.post(`/accounts`,bankAccountInfo).then(resp => resp);
}

export const fetchAvailableFundsInfo = () => {
    return myAxios.get(`/availableFunds`).then(resp => resp);
}

export const updateAvailableFundInfo = (updatedFundInfo) => {
    return myAxios.put(`/availableFunds/1`,updatedFundInfo).then(resp => resp);
}

export const saveTransactionInfo = (transactionInfo) => {
    return myAxios.post(`/accountTransactions`,transactionInfo).then(resp => resp);
}

export const fetchAllBankAccountsInfo = () => {
    return myAxios.get(`/accounts`).then(resp => resp);
}

export const fetchDonorsInfoUsingContactNumber  = (contactNumber) => {
    return myAxios.get(`/donors?contactNumber=${contactNumber}`).then(resp => resp);
}

export const registerMercyVolunteer = (volunteerInfo) => {
    return myAxios.post(`/donors`,volunteerInfo).then(resp => resp);
}

export const fetchAllVolunteers = () => {
    return myAxios.get(`/donors`).then(resp => resp);
}

export const deleteVolunteerInfo = (volunteerId) =>{
    return myAxios.delete(`/donors/${volunteerId}`).then(resp => resp);
}

export const registerDonationInfo = (donationInfo) => {
    console.log("🚀 ~ registerDonationInfo ~ executing function:")
    console.log("🚀 ~ registerDonationInfo ~ donationInfo:", donationInfo)
    return myAxios.post(`/donations`,donationInfo).then(resp => resp);
}

export const fetchAllDonationsInfo = () => {
    return myAxios.get(`/donations`).then(resp => resp);
}

export const registerExpenseInfo = (expenseInfo) => {
    return myAxios.post(`/expenses`,expenseInfo).then(resp => resp);
}

export const fetchAllExpenses = () => {
    return myAxios.get(`/expenses`).then(resp => resp);
}

export const fetchExpensesInfoByDate = (date) => {
    return myAxios.get(`/expenses?date=${date}`).then(resp => resp);
}

export const fetchDonationsInfoByDate = (date) => {
    return myAxios.get(`/donations?date=${date}`).then(resp => resp);
}

export const registerHelpRequest = (helpInfoObj) => {
    return myAxios.post(`/requests`,helpInfoObj).then(resp => resp);
}

export const fetchAllRequestsForHelp = () => {
    return myAxios.get(`/requests`).then(resp => resp);
}

export const fetchPendingRequestsForHelp = () => {
    return myAxios.get(`/requests?applicationStatus=Pending`).then(resp => resp);
}

export const fetchApprovedRequestsForHelp = () => {
    return myAxios.get(`/requests?applicationStatus=Approved`).then(resp => resp);
}

export const fetchRejectedRequestsForHelp = () => {
    return myAxios.get(`/requests?applicationStatus=Rejected`).then(resp => resp);
}