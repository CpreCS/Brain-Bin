export default function MailLogo({ width = 20, height = 20, ...props }){

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1121 918" fill="none" {...props}>
      <mask id="path-1-inside-1_2004_15" fill="white">
      <rect width="1121" height="918" rx="50" stroke="currentColor"/>
      </mask>
      <rect width="1121" height="918" rx="50" stroke="currentColor" strokeWidth="240" mask="url(#path-1-inside-1_2004_15)"/>
      <path d="M41.5 251L543.682 452.358C553.511 456.299 564.483 456.284 574.302 452.317L1072.5 251" stroke="currentColor" strokeWidth="126"/>
    </svg>
  );
}