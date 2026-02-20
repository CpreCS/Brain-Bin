export default function TrashLogo({ width = "16", height = "16", ...props }) {

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 985 1053" fill="none" {...props}>
      <path d="M146 285C131.371 556.957 131.293 712.369 146 995" stroke="currentColor" strokeWidth="94" strokeLinecap="round"/>
      <path d="M146 995C417.957 1009.63 573.369 1009.71 856 995" stroke="currentColor" strokeWidth="94" strokeLinecap="round"/>
      <path d="M855 995C869.629 723.043 869.707 567.631 855 285" stroke="currentColor" strokeWidth="94" strokeLinecap="round"/>
      <path d="M0 236H985" stroke="currentColor" strokeWidth="128"/>
      <path d="M292 218C292 47.0001 292 47.0001 493 47.0001" stroke="currentColor" strokeWidth="94"/>
      <path d="M694 218C694 47.0001 694 47.0001 493 47.0001" stroke="currentColor" strokeWidth="94"/>
      <path d="M393 404V808" stroke="currentColor" strokeWidth="94"/>
      <path d="M594 404V808" stroke="currentColor" strokeWidth="94"/>
    </svg>
  )
}