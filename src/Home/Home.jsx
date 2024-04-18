import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-2xl"> This is Home page</h2>
        </div>
    );
};

export default Home;