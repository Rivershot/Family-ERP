import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();

    return(
        <div className="min-h-screen flex items-center justify-end pr-24">
            <div className="flex flex-col gap-[12px] w-[480px] h-[796px] rounded-[20px] backdrop-blur-[53px] shadow-[-8px_4px_5px_0px_rgba(0,0,0,0.24)] bg-white/10 border border-white/20 px-10 pt-24 pb-10">
                <div>
                    <h2 className="text-4xl font-medium text-white">Login</h2>
                    <span className="text-base text-white">어서와요!</span>
                </div>
                <div className="flex flex-col gap-[25px]">
                    <input placeholder="Username" className="w-[400px] rounded-[12px] border border-white px-4 py-3 text-white bg-transparent placeholder:text-white/60 outline-none"/>
                    <div className="relative w-[400px]">
                        <input placeholder="Password" className="w-full rounded-[12px] border border-white px-4 py-3 text-white bg-transparent placeholder:text-white/60 outline-none"/>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">👁</span>    
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-white text-sm">Remember me</span>
                </div>
                <div className="flex flex-col">
                    <input type="submit" value="login" onClick={()=>{navigate('/dashboard')}} className="w-[400px] rounded-[12px] px-4 py-3 text-white font-medium text-xl bg-[linear-gradient(119deg,#4C75DF_10%,#8740CD_53%,#580075_92%)] cursor-pointer" />
                    <div className="flex my-3 justify-center"><span className="text-white text-sm">비밀번호를 잊어버렸나요?</span></div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex-1 h-[2px] bg-[#4D4D4D]"/>
                    <span className="text-[#4D4D4D] text-base">Or</span>
                    <div className="flex-1 h-[2px] bg-[#4D4D4D]"/>
                </div>
                <div className="flex justify-center gap-[18px]">
                    <FcGoogle size={42} className="cursor-pointer" />
                    <FaFacebook size={42} className="cursor-pointer text-[#1877F2]" />
                    <RiKakaoTalkFill size={42} className="cursor-pointer text-[#F8BD00]" />
                </div>
                <div className="mt-auto flex flex-col gap-[8px]">
                    <div className="flex items-center justify-center gap-[5px]">
                        <span className="text-white text-sm">Don't have an account?</span>
                        <button className="text-white text-sm cursor-pointer">Sign up</button>
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

export default LoginPage