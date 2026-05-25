
const menus = ["Dashboard", "가족구성원", "인사평가", "요청", "일정", "가계부"];

function Side() {
    return(
        <aside className="w-[220px] h-full bg-white border-r border-gray-200 flex flex-col py-4 shadow-sm">
            <ul className="flex flex-col gap-1">
                {menus.map((menu) => (
                    <li key={menu} className="relative group cursor-pointer">
                        {/* 활성 인디케이터 — 첫 번째 항목 활성 예시 */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 rounded-r-md transition-all bg-transparent group-hover:bg-violet-500"/>
                        <div className="mx-3 px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors text-gray-500 hover:bg-violet-50 hover:text-violet-600">
                            <span className="text-sm">{menu}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Side;