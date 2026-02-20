export default function PlusLogo({ width="15", height="15", ...props }){

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 983 983" fill="none" {...props}>
      <path d="M510.5 65.5V955.5" stroke="currentColor" strokeWidth="131" strokeLinecap="round"/>
      <path d="M65.5 510.5L955.5 510.5" stroke="currentColor" strokeWidth="131" strokeLinecap="round"/>
    </svg>
  )
}