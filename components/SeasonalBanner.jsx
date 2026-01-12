"use client";
import { getSeasonalContext } from "@/lib/seasonalLogic";

export default function SeasonalBanner({ onBook }) {
  const season = getSeasonalContext();

  return (
    <div
      style={{
        background: "#eef2ff",
        padding: "16px",
        textAlign: "center",
        borderBottom: "1px solid #dbeafe",
      }}
    >
      <strong style={{ color: "#2c237d" }}>{season.title}</strong>
      <p style={{ margin: "8px 0", color: "#374151" }}>
        {season.message}
      </p>

      <button
        onClick={() => onBook(season.cta)}
        style={{
          background: "#2c237d",
          color: "#fff",
          padding: "10px 18px",
          borderRadius: "8px",
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {season.cta}
      </button>
    </div>
  );
}
