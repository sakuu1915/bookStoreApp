/*import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserProfile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get("http://localhost:4000/user/profile");
                setUser(res.data);
            } catch (error) {
                console.error("Profile fetch error", error);
                navigate("/login"); // optional redirect
            }
        };
        fetchProfile();
    }, [navigate]);
    if (!user) {
        return <h3>Loading Profile...</h3>;
    }
    return (
        <div>
            <h3>User Profile</h3>
            <p><strong>Name:</strong> {user.fullname}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
};

export default UserProfile;
*/
import { use, useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
         const token = localStorage.getItem("token");

        // If user is logged out
        if (!token) {
            navigate("/login");
            return;
        }
        const fetchProfile= async() => {
            try{
                const res = await axios.get("https://bookstoreapp-l8lu.onrender.com/user/profile")
                setUser(res.data);
            }
            catch(error){
                console.log(error)
            }
        }

        fetchProfile();
    }, []);
    if(!user) {
        return <h2>Loading profile....</h2>
    }

    return (
        <>
            <p>Name: {user.fullname}</p>
            <p>Email: {user.email}</p>
        </>
    )
}


export default UserProfile;