"use client";

import { useState } from "react";
import TopNav from "@/components/TopNav";
import SideBar from "@/components/SideBar";
import Login from "@/components/Login"
import SignUp from "@/components/SignUp";

export default function AppLayout({ children }: {children: React.ReactNode}){

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  
  function toggleSideBar() {
    setIsSideBarOpen(prev => !prev);
  }

  return(
    <div className="flex flex-col h-screen">
      <TopNav 
        toggleSideBar={toggleSideBar}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      
      <div className="flex flex-1 overflow-hidden bg-[#0f0f0f]">
        {/* Mobile overlay */}
        {isSideBarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSideBarOpen(false)}
          />
        )}
        <SideBar 
          isSideBarOpen={isSideBarOpen}
          searchText={searchText}
          setSearchText={setSearchText}
        />

        <div className="flex-1 bg-[#0f0f0f] overflow-auto">
          {children}
        </div>
      </div>
      <Login />
      <SignUp />
    </div>
  ) 
}