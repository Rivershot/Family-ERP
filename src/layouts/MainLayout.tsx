import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../component/Header"
import Side from "../component/Side"
import { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import DashBoard from "../pages/Dashboard";
import Ledge from "../pages/Ledge";

ModuleRegistry.registerModules([AllCommunityModule]);
type Menu = {id: string, label: string, url: string};

function MainLayout () {

    // 기본 탭은 1개 dashboard
    const [tab, setTab] = useState([{ id:"dashboard", label:"DashBoard", url:"/dashboard"}]);
    const location = useLocation();
    const navi = useNavigate();

    // openTab
    const openTab = (menu: Menu) => {
        const isOpen = tab.some((t) => t.id === menu.id);
        if (!isOpen) setTab([...tab, { id: menu.id, label: menu.label, url: menu.url }]);
        navi(menu.url);
    }

    // focusTab
    const focusTab = (t: Menu) => {
        // 활성화된 탭을 계속 선택하는 경우 유지
        if(t.url === location.pathname) return;
        navi(t.url);
    }

    return (
        <div className="flex flex-col h-screen">
            {<Header/>}
            <div className="flex flex-1 gap-5 overflow-hidden bg-[#F7F9FB] p-5">
                {<Side onMenuClick={openTab}/>}
                <main className="flex flex-1 flex-col gap-4 overflow-hidden">
                    {/* 탭 바 (pill) — 동적 탭 목록은 여기에 React 상태로 렌더링 */}
                    <div className="flex h-[50px] w-fit min-w-[100px] items-center gap-1 rounded-full border border-gray-100 bg-white px-5 shadow-sm">
                        {
                            tab.map((t)=>(
                                <button
                                  key={t.id}
                                  onClick={()=> focusTab(t)}
                                  className={
                                    location.pathname === t.url
                                      ? "px-2 pb-1 text-sm border-b-2 border-violet-700 bg-linear-to-br from-violet-400 to-violet-700 bg-clip-text text-transparent"
                                      : "px-2 pb-1 text-sm border-b-2 border-transparent text-gray-500 hover:text-violet-500"
                                  }
                                  style={{fontWeight :"normal"}}
                                >{t.label}</button>
                            ))
                        }
                    </div>
                    {/* 콘텐츠 카드 */}
                    <div className="flex-1 overflow-auto rounded-[25px] border border-gray-200 bg-white p-6 shadow-sm">
                        {<Outlet/>}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MainLayout;