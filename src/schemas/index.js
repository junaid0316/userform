import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const userschema = yup.object().shape({
    fullname: yup
        .string()
        .min(3, "Full Name must be at least 3 characters long")
        .required("Required"),
    username: yup
        .string()
        .min(3, "User Name must be at least 3 characters long")
        .required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    // password: yup
    //     .string()
    //     .min(5)
    //     .matches(passwordRules, { message: "Please create a stronger password. Must Contain 1 uppercase & 1 lowercase letter and 1 numeric digit" })
    //     .required("Required"),
    // confirmpassword: yup
    //     .string()
    //     .oneOf([yup.ref("password"), null], "Passwords must match")
    //     .required("Required"),
    interview: yup.string().required("Required. Please Select An Interview Preffered Time."),
    profilepic: yup.mixed().required("Profile Picture is Required"),
});