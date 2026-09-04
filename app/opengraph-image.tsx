import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Mayaskara Bhat - Portfolio";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Subtle Background Grid Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Monogram */}
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            stroke="#d4af37"
            strokeWidth="4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <g transform="translate(15, 20)">
              <path d="M 10 60 L 10 10 L 35 40 L 60 10 L 60 60" />
              <path d="M 40 60 L 40 10 L 65 10 L 65 35 L 40 35 M 40 35 L 70 35 L 70 60 Z" />
            </g>
          </svg>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontFamily: "serif",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            marginBottom: "15px",
            display: "flex",
          }}
        >
          MAYASKARA BHAT
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            letterSpacing: "0.2em",
            color: "rgba(255, 255, 255, 0.8)",
            textTransform: "uppercase",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          Think. Strategize. Create.
        </div>
        
        {/* Sub-tagline */}
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.1em",
            color: "#d4af37",
            textTransform: "uppercase",
            marginBottom: "40px",
            display: "flex",
          }}
        >
          Chess × Technology × Growth
        </div>

        {/* Academy Info */}
        <div
          style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.6)",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          Proud Student of 3 Stack Academy
        </div>

        {/* College Info */}
        <div
          style={{
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.4)",
            display: "flex",
          }}
        >
          Sri Venkatramana P.U. College, Kundapura
        </div>
      </div>
    ),
    { ...size }
  );
}
