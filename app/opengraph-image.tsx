import { ImageResponse } from "next/og";

export const alt =
  "Tehreem Farooq — B2B Lead Generation & Digital Marketing Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1F3A5F",
          color: "#F7F4EE",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(247,244,238,0.45)",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            TF
          </div>
          <div style={{ fontSize: 22, letterSpacing: 3, color: "#E4C48A" }}>
            PAKISTAN
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 650, lineHeight: 1.02 }}>
            Tehreem Farooq
          </div>
          <div style={{ fontSize: 32, marginTop: 20, color: "#E4C48A", maxWidth: 900 }}>
            B2B Lead Generation & Digital Marketing Specialist
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
