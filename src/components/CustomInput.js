import { useField } from "formik";
import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const CustomInput = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const handlechange = (e) => {
        helpers.setTouched(true);
        helpers.setValue(e.target.value);
    };
    const [showPass, setShowPass] = useState(false);
    return (
        <>
            <label className="frmlabel">{label}</label>

            <div className={`${meta.touched && meta.error ? "input-error" : ""} frmbx`}>
                <input
                    {...field}
                    {...props}
                    className={`${meta.touched && meta.error ? "input-error" : ""} frminp`}
                    autoComplete="off"
                    onChange={(e) => { handlechange(e) }}
                />
                {
                    meta.touched && meta.error && <RiErrorWarningFill size={20} color="#EB5757" />
                }
            </div>
            <div className="ermsg">
                {meta.touched && meta.error && meta.error}
            </div>
        </>
    );
};
export default CustomInput;