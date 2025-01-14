import * as Yup from "yup";

export const AddNewBankSchema = Yup.object({
    accountNumber :  Yup.number().required("Please enter Account Number .."),
    bankName :  Yup.string().required("Please Select Bank Name .."),
    accountName :  Yup.string().required("Please enter Name of the Account.."),
    ifscCode :  Yup.string().required("Please enter IFSC Code .."),
    swiftCode :  Yup.string().required("Please enter SWIFT Code .."),
    initialBalance :  Yup.number().required("Please enter Initial Balance of the account..").min(0)
})

export const DonorsRegistrationSchema = Yup.object({
    memberName :  Yup.string().required("Please enter Name of the Donor/Philanthropist.."),
    contactNumber : Yup.string().required("Please enter Contact Number.."),
    gender : Yup.string().required("Please Select Gender.."),
    emailId : Yup.string().required("Please enter Email ID of the Donor.."),
    address : Yup.string().required("Please enter the Address..")    
})

export const DonationSchema = Yup.object({
    //donorName :  Yup.string().required("Please enter the Donor Name.."),
    donorContactNumber :  Yup.string().required("Please enter Donor Contact Number..").length(10),
    donationAmount :  Yup.string().required("Please enter Donation Amount.."),
    //accountNumber :  Yup.string().required("Please Select Account Number.."),
    //transactionID :  Yup.string().required("Please enter TransactionId.."),
    paymentMode :  Yup.string().required("Please Select the Payment Mode..")
})

export const ExpensesRegSchema = Yup.object({
    expensesFor :  Yup.string().required("Please enter the Expense Details.."),
    spendAmount :  Yup.number().required("Please enter the Spend Amount..").min(1),
    paymentMode :  Yup.string().required("Please select Payment Mode.."),
    description :  Yup.string().required("Please Write down the expense description..")
})

export const RegisterHelpRequestSchema = Yup.object({
    applicantName :  Yup.string().required("Please Provide the Name of the Applicant.."),
    contactNumber :  Yup.number().required("Please Enter the Contact Number..").min(1),
    address :  Yup.string().required("Please Provide the Applicant Address.."),
    requestedAmount :  Yup.string().required("Please Provide the Requested Amount for the Applicant.."),
    description :  Yup.string().required("Please Write down the Description for the Amount requested.."),
    aadharCardNumber :  Yup.string().required("Please Provide the valid 12 digit Aadhar Card Number of the applicant..").length(12),
    panCardNumber :  Yup.string().required("Please Provide the valid 10 digit PAN Card Number of the applicant..").length(10)

})
