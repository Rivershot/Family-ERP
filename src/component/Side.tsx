
import { MdMenuOpen } from "react-icons/md";

const menus = [
    {id: "dashboard", label: "DashBoard", url: "/dashboard"}, {id: "family", label: "가족구성원", url: "/family"},
    {id: "evaluation", label: "인사평가", url: "/evaluation"}, {id: "request", label: "요청", url: "/request"},
    {id: "schedule", label: "일정", url: "/schedule"}, {id: "ledge", label: "가계부", url: "/ledge"}
];

type Menu = {id: string, label: string, url: string};
function Side({onMenuClick}: {onMenuClick: (menu: Menu) => void}) {

    // Event handler for menu click
    const menuClick = (menu: Menu) => {
        onMenuClick(menu);
    }

    return(
        <aside className="w-[188px] self-start bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col py-4">
            {/* 메뉴 접기 버튼 */}
            <div className="flex items-center gap-2 px-5 pb-4 mb-2 border-b border-gray-100">
                <button className="flex items-center gap-2 text-gray-400 hover:text-[#384295] transition-colors cursor-pointer">
                    <MdMenuOpen size={20}/>
                    <span className="text-xs">메뉴 접기</span>
                </button>
            </div>
            <ul className="flex flex-col gap-1">
                {menus.map((menu) => (
                    <li key={menu.id} className="relative group cursor-pointer" onClick={()=>menuClick(menu)}>
                        {/* 활성 인디케이터 — 첫 번째 항목 활성 예시 */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-[50px] rounded-r-md transition-all bg-transparent group-hover:bg-violet-700"/>
                        <div className="mx-3 px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors text-[#262626] hover:bg-violet-50">
                            <span className="text-sm">{menu.label}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Side;