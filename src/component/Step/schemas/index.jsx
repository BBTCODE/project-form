import * as Yup from "yup";


export const registerSchema = Yup.object({
     name: Yup.string().min(2).max(20).required("Please enter your name"),
     email: Yup.string().email().required("Please enter your email"),
     number: Yup.number().min(10).required("Please enter your Phone No."),
     company: Yup.string().min(3).max(10).required("Please enter your Company"),
     price: Yup.string().required("Please select your budget")
})