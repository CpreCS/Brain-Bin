'use client';

import { useState } from 'react'
import PlusLogo from "@/assets/PlusLogo/PlusLogo"
import TrashLogo from "@/assets/TrashLogo/Trashlogo";
import Dropdown from "@/components/Dropdown"
import Editor from "@monaco-editor/react"
import DefaultSnippet from "../utils/defaultSnippet"

export default function Home() {
  
  const [language, setLanguage] = useState('javascript');

  return (
    <main className="flex w-full bg-[#0f0f0f] max-w-5xl mx-auto flex-col p-6 lg:p-10 text-center">
      <div className ="flex w-full">
        <input
          type="text"
          placeholder="Untitled Note"
          defaultValue="React Hooks Best Practices"
          className="w-full bg-transparent text-4xl text-white placeholder:text-gray-600 font-bold
                     outline-none tracking-wide mb-6"
        />
      </div>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add tag..."
          className="py-1.5 px-3 bg-[#252525] w-[185px] text-sm text-white placeholder:text-gray-400 rounded-lg
                     border border-white/10 outline-none"
        />
        <button className="py-1.5 px-3.5 bg-[#252525] border border-white/10 rounded-lg
                           hover:bg-blue-500/10 hover:border-blue-400/20">
            <PlusLogo 
              width={12}
              height={12}
              color="#26B2F3"
            />
        </button>
      </div>

      <div className="flex items-center justify-between text-sm mb-6 pb-4 border-b border-white/10">
        <Dropdown value={language} onChange={setLanguage} />
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-3xl" />
          All changes saved
        </div>
      </div>

      <div className="flex rounded-xl min-h-146 mb-6 overflow-hidden w-full border border-white/20">
        <Editor 
            height={650}
            min-height={584}
            theme="vs-dark"
            defaultLanguage="javascript"
            language={language}
            defaultValue={DefaultSnippet()}
            options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineHeight: 24,
            fontFamily: "'Fira Code', 'Cascadia Code', Consolas, 'Courier New', monospace",
            fontLigatures: true,
            wordWrap: 'on',
            lineNumbers: 'on',
            glyphMargin: true,
            folding: true,
            lineDecorationsWidth: 10,
            lineNumbersMinChars: 3,
            padding: { top: 24, bottom: 16 },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            renderLineHighlight: 'line',
            cursorBlinking: 'smooth',
            smoothScrolling: true,
            contextmenu: false,
            overviewRulerLanes: 0,
            hideCursorInOverviewRuler: true,
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="hidden sm:flex items-center text-xs text-gray-500">
          Press
          <span className="px-2 py-1 mx-1 bg-[#252525] border border-white/10 rounded-sm tracking-wider">Ctrl/Cmd + S</span>
          to manually save
        </p>
      
        <button
          type="button"
          className="flex gap-2 items-center px-5 py-2.5 text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl
                     hover:bg-rose-500/20 hover:border-rose-500/40 cursor-pointer hover:shadow-md hover:shadow-rose-500/10"
        >
          <TrashLogo />
          Delete Note 
        </button>
      </div>
    </main>
  );
}
