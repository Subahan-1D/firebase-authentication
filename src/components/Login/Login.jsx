import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {loginUser,googleLogin,setUser,facebookLogin,user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        loginUser(email,password)
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            setUser(result.user)
    })
    }
    const handleFacebookLogin = () =>{
        facebookLogin()
        .then(result =>{
            console.log(result.user);
        })

    }
    useEffect(()=>{
        if(user){
            navigate(location.state)
        }

    },[user])
    return (
        
        <div className="w-1/2 mx-auto border-2 border-black p-5 rounded-xl">
            <form onSubmit={handleLogin}>
                <div>
                    <p>Email</p>
                    <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <div>
                    <p>Password</p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p>
                    <Link to='/register'>Please.. <button className="btn btn-link">Register Now</button></Link>
                </p>
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-secondary w-full">Google Login</button>
            <button onClick={handleFacebookLogin} className="btn btn-primary w-full mt-2">Facebook Login</button>
        </div>
    );
};

export default Login;