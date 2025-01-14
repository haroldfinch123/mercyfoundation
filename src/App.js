import React from 'react'
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ViewSocietyDocuments from './components/ViewSocietyDocuments';
import DonateComponent from './components/DonateComponent';
import ContactUs from './components/ContactUs';
import Dashboard from './components/admin_components/Dashboard';
import BlankPage from './components/admin_components/BlankPage';
import AddBankAccountInfo from './components/admin_components/AddBankAccountInfo';
import ViewBankAccountsInfo from './components/admin_components/ViewBankAccountsInfo';
import AddVolunteerInfo from './components/admin_components/AddVolunteerInfo';
import ViewMercyVolunteers from './components/admin_components/ViewMercyVolunteers';
import AddDonation from './components/admin_components/AddDonation';
import ViewDonationsReport from './components/admin_components/ViewDonationsReport';
import RegisterExpenseInfo from './components/admin_components/RegisterExpenseInfo';
import ViewExpensesReport from './components/admin_components/ViewExpensesReport';
import RegisterRequestForHelp from './components/admin_components/RegisterRequestForHelp';
import ViewRegisteredRequests from './components/admin_components/ViewRegisteredRequests';
import AdminHeader from './components/admin_components/AdminHeader';

function App() {
  return (
    
    <>
    <div>Test Something</div>
    { 
      /* Based on flag show the UI Pages.  */
      //remove the
    }
    <AdminHeader  />
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage /> } />
        <Route path='/login' element={<LoginPage /> } />
        <Route path='/software' element={<LoginPage /> } />
        <Route path='/main' element={<MainPage /> } />
        <Route path='/view-documents' element={<ViewSocietyDocuments /> } />
        <Route path='/donate' element={<DonateComponent /> } />
        <Route path='/contact' element={<ContactUs /> } />
        <Route path='/dashboard' element={<Dashboard /> } />
        <Route path='/blank' element={<BlankPage /> } />
        <Route path='/add-account-info' element={<AddBankAccountInfo /> } />
        <Route path='/view-accounts-info' element={<ViewBankAccountsInfo /> } />
        <Route path='/register-volunteer' element={<AddVolunteerInfo /> } />
        <Route path='/view-volunteers' element={<ViewMercyVolunteers /> } />
        <Route path='/register-donation' element={<AddDonation /> } />
        <Route path='/view-donations' element={<ViewDonationsReport /> } />
        <Route path='/register-expense' element={<RegisterExpenseInfo /> } />
        <Route path='/view-expenses-report' element={<ViewExpensesReport /> } />
        <Route path='/register-request' element={<RegisterRequestForHelp /> } />
        <Route path='/view-requests' element={<ViewRegisteredRequests /> } />
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
