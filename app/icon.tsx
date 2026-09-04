import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212",
          borderRadius: "8px",
          border: "2px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#d4af37"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <g transform="translate(15, 20)">
            <path d="M 10 60 L 10 10 L 35 40 L 60 10 L 60 60" />
            <path d="M 40 60 L 40 10 L 65 10 L 65 35 L 40 35 M 40 35 L 70 35 L 70 60 Z" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
