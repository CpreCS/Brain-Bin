  interface Props{
    value: string,
    onChange: (value: string) => void;
  }

export default function Dropdown({ value, onChange }: Props){
 
  return(
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="py-2 pl-3 pr-8 bg-[#252525] text-white border border-white/10 rounded-lg outline-none appearance-none cursor-pointer
                 hover:bg-[#2A2A2A]"
        
      //Dropdown custom arrow and positioning
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
        backgroundPosition: 'right 0.5rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em'
      }}
    >
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="csharp">C#</option>
      <option value="cpp">C++</option>
      <option value="go">Go</option>
      <option value="rust">Rust</option>
      <option value="php">PHP</option>
      <option value="ruby">Ruby</option>
      <option value="swift">Swift</option>
      <option value="kotlin">Kotlin</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="json">JSON</option>
      <option value="markdown">Markdown</option>
      <option value="sql">SQL</option>
      <option value="shell">Shell</option>
      <option value="yaml">YAML</option>
      <option value="xml">XML</option>
    </select>
  )
}