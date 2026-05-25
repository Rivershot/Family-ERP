import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { RiKakaoTalkFill } from 'react-icons/ri';

function RegisterPage() {
    return(
        <div className="min-h-screen flex items-center justify-end pr-24">
            <div className="flex flex-col gap-[12px] w-[480px] h-[796px] rounded-[20px] backdrop-blur-[53px] shadow-[-8px_4px_5px_0px_rgba(0,0,0,0.24)] bg-white/10 border border-white/20 px-10 pt-24 pb-10">
                <div>
                    <h2 className="text-4xl font-medium text-white">Sign Up</h2>
                    <span className="text-base text-white">가족이 된 걸 환영해요!</span>
                </div>
                <div className="flex flex-col gap-[25px]">
                    <input placeholder="Username" className="w-[400px] rounded-[12px] border border-white px-4 py-3 text-white bg-transparent placeholder:text-white/60 outline-none"/>
                    <input placeholder="Emain / Phone" className="w-full rounded-[12px] border border-white px-4 py-3 text-white bg-transparent placeholder:text-white/60 outline-none"/>
                    <input placeholder="Password" className="w-full rounded-[12px] border border-white px-4 py-3 text-white bg-transparent placeholer:text-white/60 outline-none"></input>
                    <input placeholder="Confirm Password" className="w-full rounded-[12px] border border-white px-4 py-3 text-white bg-transparent placeholer:text-white/60 outline-none"></input>
                </div> 
                <div className="flex flex-col mt-[5px]">
                    <input type="submit" value="Sign Up" className="w-[400px] rounded-[12px] px-4 py-3 text-white font-medium text-xl bg-[linear-gradient(119deg,#2E4CEE_10%,#221EBF_53%,#040F75_92%)] cursor-pointer" />
                </div>
                <div className="flex items-center gap-5 mt-[5px]">
                    <div className="flex-1 h-[2px] bg-[#4D4D4D]"/>
                    <span className="text-[#4D4D4D] text-base"></span>
                    <div className="flex-1 h-[2px] bg-[#4D4D4D]"/>
                </div>
                <div className="flex justify-center gap-[18px]">
                    <FcGoogle size={42} className="cursor-pointer" />
                    <FaFacebook size={42} className="cursor-pointer text-[#1877F2]" />
                    <RiKakaoTalkFill size={42} className="cursor-pointer text-[#F8BD00]" />
                </div>
                <div className="mt-auto flex flex-col gap-[8px]">
                    <div className="flex items-center justify-center gap-[5px]">
                        <span className="text-white text-sm">Already Regitstered?</span>
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

export default RegisterPage;