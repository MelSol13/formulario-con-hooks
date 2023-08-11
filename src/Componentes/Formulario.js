import React, { useState } from "react";

const Formulario = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [madeSubmit, setMadeSubmit] = useState(false);

    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const makeAccount = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setMadeSubmit("true");
    }

    const handleErrorFirstName = (e) => {
        setFirstName(e);
        if (e.length < 2) {
            if (e == "") {
                setErrorFirstName("");
            }
            else if (e.length < 2) {
                setErrorFirstName("First Name must be at least 2 characters");
            }
        } else {
            setErrorFirstName("");
        }
    }

        const handleErrorLastName = (e) => {
            setLastName(e);
            if (e.length < 2) {
                if (e == "") {
                    setErrorLastName("");
                }
                else if (e.length < 2) {
                    setErrorLastName("First Name must be at least 2 characters");
                }
            } else {
                setErrorLastName("");
            }
        }

        const handleErrorEmail = (e) => {
            setEmail(e);
            if (e.length < 5) {
                if (e == "") {
                    setErrorEmail("");
                }
                else if (e.length < 5) {
                    setErrorEmail("Email must be at least 5 characters");
                }
            } else {
                setErrorEmail("");
            }
        }

        const handleErrorPassword= (e) => {
            setPassword(e);
            if(e.length < 8){
                if(e == ""){
                    setErrorPassword("");
                } 
                else{
                    setErrorPassword("Password must be at least 8 characters");
                }
            } 
            else{
                setErrorPassword("");
            }
        }

        const handleErrorConfirmPassword= (e) => {
            setConfirmPassword(e);
            if(e.length < 8){
                if(e == ""){
                    setErrorConfirmPassword("");
                }
                else{
                    setErrorConfirmPassword("Confirm Password must be at least 8 characters");
                }
            }
            else if (password != e){
                setErrorConfirmPassword("Passwords must match");
            }
            else{
                setErrorConfirmPassword("");
            }
        }



        /*const validarPassword = e => {
            setPassword(e.target.value);
            if (password !== confirmPassword) {
                setErrorPassword("Passwords must match");
            }
            if (password.length < 8) {
                setErrorPassword("Password must be at least 8 characters")
            } else {
                setErrorPassword("");
            }
        }

        const validarConfirmPassword = e => {
            setConfirmPassword(e.target.value);
            if (password !== confirmPassword) {
                setErrorPassword("Passwords must match");
            }
            if (confirmPassword.length < 8) {
                setErrorConfirmPassword("Password must be at least 8 characters")
            } else {
                setErrorConfirmPassword("");
            }
        }*/

        return (
            <div className="m-auto w-50 p-3">
                <h1 className="text-center">Create Account</h1>
                <h5>
                    {madeSubmit ? "Thanks! Your account is ready to use" : "Please, fill in all the spaces"}
                </h5>
                <form onSubmit={makeAccount} className="">
                    <div>
                        <label>First Name:</label>
                        <input type="text" className="form-control" onChange={(e)=>handleErrorFirstName(e.target.value)}></input>
                        {
                            errorFirstName && <p className="text-danger">{errorFirstName}</p>
                        }
                    </div>
                    <div>
                        <label> Last Name:</label>
                        <input type="text" className="form-control" onChange={(e)=>handleErrorLastName(e.target.value)} value={lastName}></input>
                        {
                            errorLastName && <p className="text-danger">{errorLastName}</p>
                        }
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" className="form-control" onChange={(e)=>handleErrorEmail(e.target.value)}></input>
                        {
                            errorEmail && <p className="text-danger">{errorEmail}</p>
                        }
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" className="form-control" onChange={(e)=>handleErrorPassword(e.target.value)} ></input>
                        {
                            errorPassword && <p className="text-danger">{errorPassword}</p>
                        }
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" name="confirmPassword" className="form-control" onChange={(e)=>handleErrorConfirmPassword(e.target.value)}></input>
                        {
                            errorConfirmPassword && <p className="text-danger">{errorConfirmPassword}</p>
                        }
                    </div>
                    <div className="mt-2">
                        <input type="submit" className="btn btn-success" value="Create Account" />
                    </div>

                </form>

                <div className="col-auto card mt-4 p-3 border-black">
                    <h1 className="text-center">Results</h1>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
            </div>
        )
    }

    export default Formulario;