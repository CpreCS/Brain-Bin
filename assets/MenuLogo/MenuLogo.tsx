
interface MenuLogoProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export default function MenuLogo({ width = "100", height = "100", ...props }: MenuLogoProps) {

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 244 192" fill="none" {...props}>
<path d="M233 160C239.075 160 244 164.925 244 171V181C244 187.075 239.075 192 233 192H11C4.92487 192 0 187.075 0 181V171C0 164.925 4.92487 160 11 160H233ZM233 80C239.075 80 244 84.9249 244 91V101C244 107.075 239.075 112 233 112H11C4.92487 112 0 107.075 0 101V91C0 84.9249 4.92487 80 11 80H233ZM233 0C239.075 7.73109e-07 244 4.92487 244 11V21C244 27.0751 239.075 32 233 32H11C4.92487 32 0 27.0751 0 21V11C0 4.92487 4.92487 0 11 0H233Z" fill="currentColor"/>
</svg>
  )
}