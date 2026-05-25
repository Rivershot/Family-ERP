
function Header() {
    return (
        <header className="w-full h-[64px] bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
            <h1 className="text-xl font-bold text-violet-700 tracking-wide uppercase">FERP for Web</h1>
            <nav>
                <ul className="flex items-center gap-8">
                    {["인사", "일정", "가계부", "전자결재", "자산"].map((menu) => (
                        <li
                            key={menu}
                            className="text-sm font-medium text-gray-600 uppercase cursor-pointer hover:text-violet-600 transition-colors"
                        >
                            {menu}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center cursor-pointer">
                <span className="text-violet-600 text-sm font-bold">U</span>
            </div>
        </header>
    )
}

export default Header;