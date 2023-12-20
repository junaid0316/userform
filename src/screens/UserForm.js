import React, { useEffect, useState } from 'react'
import { userschema } from '../schemas';
import CustomInput from '../components/CustomInput';
import { Form, Formik } from 'formik';
import { Spinner } from 'react-bootstrap';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import allstates from "../utility/allstates";
import country from "../utility/country";
import Select from "react-select";

const UserForm = () => {

    const [send, setsend] = useState(false);
    const [role, setrole] = useState(false);
    const [actiontoperf, setactiontoperf] = useState();
    const [image, setimage] = useState("")
    const handleimageuplaod = async (e, setfieldfunc) => {
        setimage(URL.createObjectURL(e.target.files[0]))
        const image = new FormData()
        image.append('file', e.target.files[0])
        image.append('cloud_name', 'djpz6hs6b')
        image.append('upload_preset', 'qybaiwwm')

        const response = await fetch(
            "https://api.cloudinary.com/v1_1/djpz6hs6b/image/upload",
            {
                method: "post",
                body: image
            }
        )
        const imagedata = await response.json()
        const imageURL = imagedata.url.toString()
        setfieldfunc("profilepic", imagedata.url.toString())
        alert(imageURL)
    }
    const onSubmit = (values, actions) => {
        console.log(values)
        setTimeout(() => {
            localStorage.setItem("Userdata", JSON.stringify(values))
            alert("Data Saved To Local Storage")
            actions.resetForm()
            actions.setSubmitting(false)
            setimage("")
            setrole(false)
        }, 5000);
    };

    const [countryid, setCountryid] = useState('');
    const [countryname, setcountryname] = useState('');
    const [statename, setstatename] = useState('');
    const [stateid, setstateid] = useState('');
    let stateopt = [];
    let cityopt = [];

    const handleCountry = (e) => {
        stateopt = [];
        setCountryid(e.value)
        setcountryname(e.label)
        setstatename("")
        setstateid("")
    }

    console.log(countryid, countryname)

    const handleState = (e) => {
        setstateid(e.value)
        setstatename(e.label)
    }

    const options = country.map((data) => {
        return (
            {
                value: data.country_id,
                label: data.country_name
            }
        )
    })


    let filter = options.filter((val) => { return val.value == '231' })
    let obj = {
        value: filter.value,
        label: filter.label
    }

    useEffect(() => {
        console.log(countryid, countryname)
        allstates.map((data) => {
            if (data.country_id == countryid) {
                return (stateopt.push({ value: data.state_id, label: data.state_name }));
            }
        })
    }, [countryid, stateid, filter])


    useEffect(() => {
        if (send) {

            // RegisterUser(dataCleaning(userregisterdata))
            //     .then((res) => {
            //         displaySuccessToast("Registered Successfully, Check Your Email To Verify Before Logging In");
            //         handleShow()
            //         setTimeout(() => {
            //         }, 5000);
            //         setsend(false)
            //     })
            //     .catch((err) => {
            //         actiontoperf.setSubmitting(false)
            //         displayErrorToast(err);
            //         setsend(false)
            //     });
        }
    }, [])

    return (
        <div className='userform'>
            <h2>User Form</h2>

            <Formik
                initialValues={{
                    fullname: "",
                    username: "",
                    password: "",
                    email: "",
                    phone: "",
                    interview: "morning",
                    country: "",
                    state: "",
                    usertype: "",
                    profilepic: null
                }}
                validationSchema={userschema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, errors, touched, setFieldValue }) => (
                    <Form>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className='filesec'>
                                    <label className='fileinp'>
                                        <input type='file' className='fileinp' name='profilepic' onChange={(e) => { handleimageuplaod(e, setFieldValue) }} />
                                        <div>+ Browse</div>
                                    </label>
                                    {
                                        image &&
                                        <img src={image} />
                                    }
                                </div>
                                <div className="ermsg">
                                    {touched.profilepic && errors.profilepic && errors.profilepic}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mt-3">
                                <CustomInput
                                    label="User name"
                                    name="username"
                                    type="text"
                                    placeholder="Enter username"

                                />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-3">
                                <CustomInput
                                    label="Full Name"
                                    name="fullname"
                                    type="text"
                                    placeholder="Enter your Full Name"
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-3">
                                <CustomInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-3">
                                <CustomInput
                                    label="Enter your phone number"
                                    name="phone"
                                    type="number"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-3">
                                <label className="frmlabel">Interview preferred time</label>
                                <Select defaultValue={[{
                                    value: "morning",
                                    label: "Morning"
                                }]} name="interview" options={[
                                    {
                                        value: "morning",
                                        label: "Morning"
                                    },
                                    {
                                        value: "afternone",
                                        label: "Afternone"
                                    },
                                    {
                                        value: "evening",
                                        label: "Evening"
                                    },
                                ]}
                                    onChange={(e) => { setFieldValue("interview", e.label) }} styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            textAlign: 'left',
                                            borderRadius: "8px",
                                            fontSize: "16px",
                                            height: '58px',
                                            marginTop: "7px",
                                            marginBottom: "5px",
                                            backgroundColor: "#fff",
                                            boxShadow: "none",
                                            border: (touched.region && errors.region) ? "1px solid #EB5757" : "1px solid #ccc",
                                            borderColor: state.isFocused && "#7a5cfa !important",
                                            color: "#666"
                                        }),
                                        placeholder: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        singleValue: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        input: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            textAlign: 'left',
                                            backgroundColor: state.isFocused ? "#7a5cfa" : "#fff",
                                            color: state.isSelected ? "000" : "#000"
                                        })
                                    }}
                                    placeholder={'Interview preferred time'}
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-3">
                                <label className="frmlabel">Country</label>
                                <Select name="country" options={options}
                                    onChange={(e) => { handleCountry(e); setFieldValue("country", e.label) }} styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            textAlign: 'left',
                                            borderRadius: "8px",
                                            fontSize: "16px",
                                            height: '58px',
                                            marginTop: "7px",
                                            marginBottom: "5px",
                                            backgroundColor: "#fff",
                                            boxShadow: "none",
                                            border: (touched.region && errors.region) ? "1px solid #EB5757" : "1px solid #ccc",
                                            borderColor: state.isFocused && "#7a5cfa !important",
                                            color: "#666"
                                        }),
                                        placeholder: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        singleValue: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        input: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            textAlign: 'left',
                                            backgroundColor: state.isFocused ? "#7a5cfa" : "#fff",
                                            color: state.isSelected ? "000" : "#000"
                                        })
                                    }}
                                    placeholder={'Enter your country'}
                                />
                                <div className="ermsg">
                                    {touched.country && errors.country && errors.country.error}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mt-3">
                                <label className="frmlabel">State</label>
                                <Select name="state" options={stateopt}
                                    onChange={(e) => { setFieldValue("state", e.label) }} styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            textAlign: 'left',
                                            borderRadius: "8px",
                                            fontSize: "16px",
                                            height: '58px',
                                            marginTop: "7px",
                                            marginBottom: "5px",
                                            backgroundColor: "#fff",
                                            boxShadow: "none",
                                            border: (touched.region && errors.region) ? "1px solid #EB5757" : "1px solid #ccc",
                                            borderColor: state.isFocused && "#7a5cfa !important",
                                            color: "#666"
                                        }),
                                        placeholder: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        singleValue: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        input: (provided, state) => ({
                                            ...provided,
                                            color: "#666"
                                        }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            textAlign: 'left',
                                            backgroundColor: state.isFocused ? "#7a5cfa" : "#fff",
                                            color: state.isSelected ? "000" : "#000"
                                        })
                                    }}
                                    placeholder={'Enter your state'}
                                />
                                <div className="ermsg">
                                    {touched.state && errors.state && errors.state.error}
                                </div>
                            </div>
                            <div className='col-12 mt-4'>
                                <div className='d-flex gap-2 toggle'>
                                    <Toggle
                                        name="role"
                                        id='role'
                                        icons={false}
                                        defaultChecked={role}
                                        onChange={() => { setrole(!role) }} />
                                    <label htmlFor='role'>Select Your Role (optional)</label>
                                </div>
                            </div>
                            {role &&
                                <div className='col-12 mt-4'>
                                    <div className='radios'>
                                        <div>
                                            <input type="radio" id="std" name="usertype" value="Student" onChange={(e) => { setFieldValue("usertype", e.target.value) }} />
                                            <label for="std">Student</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="tchr" name="usertype" value="Teacher" onChange={(e) => { setFieldValue("usertype", e.target.value) }} />
                                            <label for="tchr">Teacher</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="other" name="usertype" value="Other" onChange={(e) => { setFieldValue("usertype", e.target.value) }} />
                                            <label for="other">Other</label>
                                        </div>
                                    </div>
                                    <div className="ermsg">
                                        {touched.usertype && errors.usertype && errors.usertype}
                                    </div>
                                </div>}
                        </div>
                        <button className={`frmsubmit`} disabled={isSubmitting} type="submit">
                            {
                                isSubmitting ? <Spinner size="md" /> : "ADD USER"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UserForm