import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1F3A5F",
          color: "#F7F4EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 78,
          fontWeight: 650,
          letterSpacing: "-0.04em",
        }}
      >
        TF
      </div>
    ),
    { ...size },
  );
}
