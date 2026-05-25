import { Outlet } from "react-router-dom"
import bgImage from "../assets/auth-background.png"

function AuthLayout() {
    return (
        <div className="min-h-screen bg-cover bg-center" 
            style={{ backgroundImage : `url(${bgImage})`}}
        >
            <Outlet/>
        </div>
    )
}

export default AuthLayout