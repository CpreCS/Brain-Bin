import GuestLogo from "@/assets/GuestLogo/GuestLogo";
import PlusLogo from "@/assets/PlusLogo/PlusLogo";
import SearchLogo from "@/assets/SearchLogo/SearchLogo"


interface SideBarProps {
  isSideBarOpen: boolean,
  searchText: string,
  setSearchText: (value: string) => void;
}

export default function SideBar({ isSideBarOpen, searchText, setSearchText }: SideBarProps){

  let displayName
  let username= ''

  username = !displayName ? 'Guest' : displayName;

  return(
    <aside className={`fixed lg:static top-0 left-0 h-full w-[280px]
                      bg-[#1a1a1a] border-r border-white/10
                      flex flex-col z-50 transition-transform duration-300 ease-in-out
                      lg:translate-x-0 ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
                      >
      <div className="flex w-full gap-4 p-6 items-center border-b border-white/10">
        <div className="bg-[#7a7a7a] p-2 rounded-xl flex-shrink-0">
          <GuestLogo />
        </div>
        <h1 title={username} className="font-semibold text-lg tracking-tight truncate">{username}</h1>
      </div>
      
      <div className="bg-[#1a1a1a] pt-6 px-4">
        <button
          type="button"
          className="flex w-full font-medium items-center justify-center gap-3 bg-gradient-to-r from-[#007BBC] to-[#26B2F3] py-3 px-4
                     rounded-xl tracking-wide hover:scale-102 hover:to-[#007BBC] hover:shadow-md hover:shadow-[#26B2F3]/20 transition-all
                     cursor-pointer"
        >
          <PlusLogo />
          New Note
        </button>
      </div>

      <div className="bg-[#1a1a1a] pt-4 px-4">
        <div className="relative flex w-full">
          <SearchLogo className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} 
            type="text" 
            placeholder="Search notes..."
            className="w-full border border-white/10 text-white bg-[#252525] pl-11 pr-4 py-2.5 rounded-xl outline-none
                        focus:ring-2 focus:ring-[#26B2F3]/50 focus:border-[#26B2F3]/50 placeholder:text-gray-400 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-[#1a1a1a] p-4">
        <div className="space-y-2">
          <div className="mb-2 bg-[#252525] border border-[#007BBC] shadow-md shadow-[#007BBC]/20 rounded-xl">
            <div className="p-4">
              <h1 className="mb-2.5 text-sm font-semibold">React Hooks Best Practices</h1>
              <div className="flex flex-wrap gap-2 mb-2.5">
              <span className="py-1 px-2 text-xs text-blue-300 bg-blue-900/30 border border-blue-300/20 rounded-lg">react</span>
              <span className="py-1 px-2 text-xs text-red-300 bg-red-900/30 border border-red-300/20 rounded-lg">hooks</span>
              <span className="py-1 px-2 text-xs text-green-300 bg-green-900/30 border border-green-300/20 rounded-lg">javascript</span>
              </div>
              <p className="text-xs text-gray-400 font-medium">less than a minute ago</p>
            </div>
          </div>

          <div className="mb-2 bg-[#252525] rounded-xl">
            <div className="p-4">
              <h1 className="mb-2.5 text-sm font-semibold">Typescript Utility Types</h1>
              <div className="flex flex-wrap gap-2 mb-2.5">
              <span className="py-1 px-2 text-xs text-cyan-300 bg-cyan-900/30 border border-cyan-300/20 rounded-lg">typescript</span>
              <span className="py-1 px-2 text-xs text-pink-300 bg-pink-900/30 border border-pink-300/20 rounded-lg">types</span>
              <span className="py-1 px-2 text-xs text-green-300 bg-green-900/30 border border-green-300/20 rounded-lg">reference</span>
              </div>
              <p className="text-xs text-gray-400 font-medium">about 2 hours ago</p>
            </div>
          </div>

          <div className="mb-2 bg-[#252525] rounded-xl">
            <div className="p-4">
              <h1 className="mb-2.5 text-sm font-semibold">Python Data Structures</h1>
              <div className="flex flex-wrap gap-2 mb-2.5">
              <span className="py-1 px-2 text-xs text-purple-300 bg-purple-900/30 border border-purple-300/20 rounded-lg">python</span>
              <span className="py-1 px-2 text-xs text-orange-300 bg-orange-900/30 border border-orange-300/20 rounded-lg">data-structures</span>
              <span className="py-1 px-2 text-xs text-yellow-300 bg-yellow-900/30 border border-yellow-300/20 rounded-lg">algorithms</span>
              </div>
              <p className="text-xs text-gray-400 font-medium">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}