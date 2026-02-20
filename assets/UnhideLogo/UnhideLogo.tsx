export default function UnhideLogo({ width = 20,  height = 20, ...props}){

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 706 665" fill="none" {...props}>
      <path d="M487.993 537.923C449.893 554.315 404.626 565.095 351.055 566.498C330.449 566.466 305.411 564.165 278.273 557.752C360.863 575.309 440.922 556.501 487.844 537.798L487.993 537.923ZM42.3623 311.608C41.3801 315.168 40.501 318.769 39.7363 322.411L37.9961 330.7L40.292 338.853C40.394 339.215 40.4978 339.581 40.6045 339.949C39.1243 336.201 37.6762 332.392 36.2578 328.523C37.9787 323.17 40.0094 317.51 42.3623 311.608Z" stroke="currentColor" strokeWidth="69"/>
      <path d="M281.791 260.5C263.964 278.866 253 303.849 253 331.377C253 387.778 296.722 432.5 353.5 432.5C384.255 432.5 416.66 414.261 435.5 393" stroke="currentColor" strokeWidth="66"/>
      <path d="M53 32.5L653 632.5" stroke="currentColor" strokeWidth="65" strokeLinecap="round"/>
      <path d="M319 99.9999C402 90.4999 590.7 115.2 671.5 330C666.5 346.5 652.2 386.5 631 416.5" stroke="currentColor" strokeWidth="65" strokeLinecap="round"/>
    </svg>
  )
}