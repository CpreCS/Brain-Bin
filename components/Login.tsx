import ExitLogo from "@/assets/ExitLogo/ExitLogo";
import HideLogo from "@/assets/HideLogo/HideLogo";
import UnhideLogo from "@/assets/UnhideLogo/UnhideLogo"
import MailLogo from "@/assets/MailLogo/MailLogo"
import PasswordLogo from '@/assets/PasswordLogo/PasswordLogo'

export default function Login(){

  return(
    <form className="hidden fixed flex flex-col items-center p-4 justify-center bg-black/40 h-full w-full backdrop-blur-lg z-100">
      <div className="flex items-center justify-between p-6 w-full max-w-112 bg-[#1A1A1A]
                      shadow-2xl border border-white/10 rounded-t-2xl">
        <div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-gray-400">Sign in to access your notes</p>
        </div>
        
        <div className="p-2 text-gray-400">
          <ExitLogo />
        </div>
      </div>

      <div className="flex flex-col p-6 w-full max-w-112 bg-[#1A1A1A]
                      shadow-2xl border border-t-0 border-white/10 rounded-b-2xl">
        <div className="mb-4">
          <p className="text-sm text-gray-300 mb-2">Email Address <span className="text-red-400">*</span></p>
          <div className="relative flex w-full">
            <MailLogo className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="Email"
              required 
              placeholder="Johndoe@example.com"
              className="w-full border border-white/10 text-white bg-[#252525] pl-11 pr-4 py-2.5 rounded-xl outline-none
                         focus:ring-2 focus:ring-[#26B2F3]/50 focus:border-[#26B2F3]/50 placeholder:text-gray-600 transition-all"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-300 mb-2">Password <span className="text-red-400">*</span></p>
          <div className="relative flex w-full">
            <PasswordLogo className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <HideLogo className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <UnhideLogo className="hidden absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input
              type="Password"
              required 
              placeholder="●●●●●●●●"
              className="w-full border border-white/10 text-white bg-[#252525] pl-11 pr-4 py-2.5 rounded-xl 
                         outline-none focus:ring-2 focus:ring-[#26B2F3]/50 focus:border-[#26B2F3]/50
                         placeholder:text-gray-600 placeholder:text-sm transition-all"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full font-medium items-center justify-center gap-3 bg-gradient-to-r from-[#007BBC] to-[#26B2F3] py-3 px-4
                     rounded-xl tracking-wide hover:to-[#007BBC] hover:shadow-md hover:shadow-[#26B2F3]/20 transition-all
                     cursor-pointer mt-6 mb-3"
          >
            Sign In
        </button>

        <div className="relative flex items-center justify-center w-full h-13">
          <p className="text-sm text-gray-500 px-4 z-50 bg-[#1A1A1A]">or</p>
          <div className="absolute w-full border-t-1 border-white/10" />
        </div>

        <p className="text-sm text-center text-gray-400">
          Dont have an account? 
        <button className="text-base text-[#26B2F3] ml-1 font-semibold hover:text-blue-300 underline hover:cursor-pointer transition-colors">
            Sign Up for free
        </button>
        </p>
      </div>
    </form>
  )
}