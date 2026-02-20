
interface GuestLogoProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export default function GuestLogo({ width = 20, height = 20, ...props }: GuestLogoProps) {

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 790 1050" fill="none" {...props}>
      <circle cx="395" cy="256" r="196.5" stroke="currentColor" strokeWidth="119"/>
      <path d="M727 1050V886C727 775.543 637.457 686 527 686H263C152.543 686 63 775.543 63 886V1050" stroke="currentColor" strokeWidth="126"/>
    </svg>
  )
}