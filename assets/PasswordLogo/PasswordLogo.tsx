export default function PasswordLogo({ width = 20, height = 20, ...props }){

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 832 927" fill="none" {...props}>
      <rect x="48" y="376" width="736" height="503" rx="135" stroke="currentColor" strokeWidth="96" />
      <rect x="371" y="534" width="91" height="190" rx="45.5" fill="currentColor" />
      <path d="M193.324 374C178.948 267 203.756 53 418 53" stroke="currentColor" strokeWidth="106" />
      <path d="M641.676 374C656.052 267 631.244 53 417 53" stroke="currentColor" strokeWidth="106" />
    </svg>
  );
}
