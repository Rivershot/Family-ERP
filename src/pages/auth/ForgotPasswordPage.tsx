
function ForgotPasswordPage() {
    return(
        <div className="min-h-screen flex items-center justify-end pr-24">
            <div className="flex flex-col gap-[12px] w-[480px] h-[796px] rounded-[20px] backdrop-blur-[53px] shadow-[-8px_4px_5px_0px_rgba(0,0,0,0.24)] bg-white/10 border border-white/20 px-10 pt-24 pb-10">
                <div>
                    <h2 className="text-4xl font-medium text-white">Forgot Password</h2>
                    <span className="text-base text-white">이메일을 적어주세요!</span>
                </div>
                <div className="flex flex-col gap-[25px]">
                    <input placeholder="example@email.com" className="w-[400px] rounded-[12px] border border-white px-4 py-3 text-white bg-transparent placeholder:text-white/60 outline-none"/>
                </div> 
                <div className="flex flex-col mt-[5px]">
                    <input type="submit" value="비밀번호 변경하기" className="w-[400px] rounded-[12px] px-4 py-3 text-white font-medium text-xl bg-[linear-gradient(119deg,#E948C5_10%,#CD407B_53%,#75042D_92%)] cursor-pointer" />
                </div>
                <div className="mt-auto flex flex-col gap-[8px]">
                    <div className="flex items-center justify-center gap-[5px]">
                        <span className="text-white text-sm">비밀번호가 기억났나요?</span>
                        <button className="text-white text-sm cursor-pointer">Login</button>
                    </div>
                    <div className="flex flex-row justify-between w-[400px]">
                        <button className="text-white text-sm cursor-pointer">Terms & Conditions</button>
                        <button className="text-white text-sm cursor-pointer">Support</button>
                        <button className="text-white text-sm cursor-pointer">Customer Care</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;