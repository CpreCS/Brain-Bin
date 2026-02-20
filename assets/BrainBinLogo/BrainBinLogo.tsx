
interface BrainBinLogoProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export default function BrainBinLogo({ width = "100", height = "100", ...props }: BrainBinLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 788 758" fill="none" {...props}>
      <g filter="url(#filter0_d_1_25)">
      <path d="M748.349 304.79C758.349 275.457 762.149 210.19 697.349 183.79C693.016 151.457 665.149 90.3905 588.349 104.79C584.016 87.7905 565.949 51.5905 528.349 42.7905C490.749 33.9905 470.016 59.7905 464.349 73.7905V399.79" stroke="#26B2F3" strokeWidth="65" strokeLinecap="round"/>
      <path d="M711.064 464.79C747.731 437.79 821.149 371.99 748.349 304.79C743.349 323.457 723.549 361.99 684.349 366.79C645.149 371.59 625.349 358.79 620.349 351.79C608.682 338.79 592.349 305.99 620.349 278.79L654.349 246.79" stroke="#26B2F3" strokeWidth="65" strokeLinecap="round"/>
      <path d="M535.349 176.79C541.682 183.457 561.949 196.79 592.349 196.79" stroke="#26B2F3" strokeWidth="49" strokeLinecap="round"/>
      <path d="M87.779 304.79C77.779 275.457 73.979 210.19 138.779 183.79C143.112 151.457 170.979 90.3905 247.779 104.79C252.112 87.7905 270.179 51.5905 307.779 42.7905C345.379 33.9905 366.112 59.7905 371.779 73.7905V399.79" stroke="#007BBC" strokeWidth="65" strokeLinecap="round"/>
      <path d="M126.064 465.79C89.3975 438.79 14.979 371.99 87.779 304.79C92.779 323.457 112.579 361.99 151.779 366.79C190.979 371.59 210.779 358.79 215.779 351.79C227.446 338.79 243.779 305.99 215.779 278.79L181.779 246.79" stroke="#007BBC" strokeWidth="65" strokeLinecap="round"/>
      <path d="M300.779 176.79C294.446 183.457 274.179 196.79 243.779 196.79" stroke="#007BBC" strokeWidth="49" strokeLinecap="round"/>
      <path d="M418.064 470.79H106.064L152.064 697.79C156.397 709.79 171.664 733.79 198.064 733.79C224.464 733.79 363.731 733.79 418.064 733.79" stroke="#007BBC" strokeWidth="65"/>
      <path d="M418.064 470.79H730.349L684.349 697.79C680.016 709.79 664.749 733.79 638.349 733.79C611.949 733.79 472.397 733.79 418.064 733.79" stroke="#26B2F3" strokeWidth="65"/>
      </g>
      <defs>
      <filter id="filter0_d_1_25" x="0" y="0" width="836.353" height="806.79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="16"/>
      <feGaussianBlur stdDeviation="12.25"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.616667 0 0 0 0 1 0 0 0 0.2 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_25"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_25" result="shape"/>
      </filter>
      </defs>
    </svg>
  )
}