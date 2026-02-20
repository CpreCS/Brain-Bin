import BrainBinLogo from "@/assets/BrainBinLogo/BrainBinLogo"
import SearchLogo from "@/assets/SearchLogo/SearchLogo"
import MenuLogo from "@/assets/MenuLogo/MenuLogo"

interface TopNavProps {
  toggleSideBar: () => void;
  searchText: string;
  setSearchText: (value: string) => void;
}

export default function TopNav({ toggleSideBar, searchText, setSearchText }: TopNavProps){
  return(
    <nav className="flex items-center justify-between h-16 px-6 border-b border-white/10 bg-[#1a1a1a]">
      <div className="flex items center gap-5">
        <button 
          onClick={toggleSideBar}
          type="button"
          className="flex items-center justify-center lg:hidden text-3xl p-2 mr-8 rounded-lg
                     hover:bg-[#252525] hover:text-[#007BBC] transition-all"
        >
          <MenuLogo 
            width="16"
            height="16"
            />
        </button>
        <div className="hidden lg:flex gap-5 items-center">
          <BrainBinLogo 
              width="32"
              height="32"
          />
          <h1 className="text-xl font-semibold tracking-wider">BrainBin</h1>
        </div>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-xl mx-auto">
        <div className="relative flex w-full">
          <SearchLogo className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text" 
            placeholder="Quick search across all notes..."
            className="w-full border border-white/10 text-white bg-[#252525] pl-11 pr-4 py-2.5 rounded-xl outline-none
                       focus:ring-2 focus:ring-[#26B2F3]/50 focus:border-[#26B2F3]/50 placeholder:text-gray-400 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          className="cursor-pointer font-medium px-2 py-1 ml-8 hover:text-[#26B2F3] transition-all">
            Log in
        </button>
      </div>
      
    </nav>
  )
}