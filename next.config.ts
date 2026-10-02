import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async headers() {
    return [
      {
        source: "/Tehreem_Farooq_CV.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Tehreem_Farooq_CV.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
