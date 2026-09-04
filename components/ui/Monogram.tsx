interface MonogramProps extends React.SVGProps<SVGSVGElement> {
  animated?: boolean;
}

export default function Monogram({ className = "", animated = false, ...props }: MonogramProps) {
  // A minimal, chess-geometry inspired "MB" monogram
  // Sharp angles, elegant balance.
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="square" 
      strokeLinejoin="miter" 
      className={className} 
      {...props}
    >
      <g transform="translate(15, 20)">
        {/* M component - sharp peaks like crowns/knights */}
        <path 
          d="M 10 60 L 10 10 L 35 40 L 60 10 L 60 60" 
          className={animated ? "animate-draw-path" : ""}
          style={animated ? { strokeDasharray: 200, strokeDashoffset: 200 } : undefined}
        />
        {/* B component - geometric instead of rounded, like a rook/board */}
        <path 
          d="M 40 60 L 40 10 L 65 10 L 65 35 L 40 35 M 40 35 L 70 35 L 70 60 Z" 
          className={animated ? "animate-draw-path-delayed" : ""}
          style={animated ? { strokeDasharray: 200, strokeDashoffset: 200 } : undefined}
        />
      </g>
    </svg>
  );
}
