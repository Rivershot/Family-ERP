import { Outlet } from "react-router-dom";
import Header from "../component/Header.tsx"
import Side from "../component/Side.tsx"

function MainLayout () {
    return (
        <div className="flex flex-col h-screen">
            {<Header/>}
            <div className="flex flex-1 overflow-hidden">
                {<Side/>}
                {<Outlet/>}
            </div>
        </div>
    )
}

export default MainLayout;