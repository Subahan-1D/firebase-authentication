
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";




const Register = () => {


useEffect(()=>{
 const clear = setInterval(() => {
    console.log('i am called');
 }, 1000);
 return () =>{
    clearInterval(clear)
 }
},)



const {registerUser,setUser} = useContext(AuthContext)
const [error , setError] = useState('')
const [emailError,setEmailError] = useState('')
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if(!/@gmail\.com$/.test(email)){
            setEmailError('Email must end with @gmail.com ')
            return
        }
        if(password.length<6){
            setError('password must be 6 character')
            return
        }
       if( password !== confirmPassword){
            setError('password did not match');
            return
        }
        if(!/.*\d{2,}$/.test(password)){
            setError('password must end at list 2 numbers ')
            return
        }
        if(!/[!@#$%]/.test(password)){
            setError('must be a spacail character !,@,#,$,%')
            return
        }
        setError('')
        setEmailError('')
        console.log(name, photo, email, password, confirmPassword);
        registerUser(email,password)
        .then(result =>{
            setUser(result.user)
        })
        .catch(error =>setError(error.message.split("/")[1]))
      
    }
    return (
        <div className="w-1/2 mx-auto border-2 border-black p-5 rounded-xl">
            <form onSubmit={handleRegister}>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Type Name" className="input input-bordered w-full " required />
                </div>
                <div>
                    <p>Photo</p>
                    <input name="photo" type="text" placeholder="Type here" className="input input-bordered w-full" required />
                </div>
                <div>
                    <p>Email</p>
                    <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                {
                    emailError && <small className="text-red-500">{emailError}</small>
                }
                <div>
                    <p>Password</p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input name="confirmPassword" type="text" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                {
                    error && <small className="text-red-900">{error}</small>
                }
            </form>
            <p>
                <Link to='/login'> <button className="btn btn-link">Login Now</button></Link>
            </p>
        </div>

    );
};

export default Register;