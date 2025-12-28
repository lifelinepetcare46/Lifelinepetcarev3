"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [data, setData] = useState([]);

  async function loadBookings() {
    const res = await fetch("/api/admin/bookings");
    const json = await res.json();
    setData(json);
  }

  async function cancelBooking(id) {
    await fetch("/api/admin/bookings", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadBookings();
  }

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h2>Admin Dashboard</h2>

      {data.map((b) => (
        <div key={b._id} style={{ margin: "15px 0", borderBottom: "1px solid #ccc" }}>
          <p><b>{b.name}</b> ({b.service})</p>
          <p>{b.phone} | {b.email}</p>
          <p>{b.date} – {b.slot}</p>
          <p>Status: {b.status}</p>

          <button onClick={() => cancelBooking(b._id)}>
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}
