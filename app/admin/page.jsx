"use client";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "../../styles/admin.css";

/* =========================
   PRIMARY DATE–TIME FORMAT
========================= */
function formatDateTime(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/* =========================
   PRIMARY MONTH KEY
========================= */
function getMonthKey(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

/* =========================
   MONTHLY SERVICE STATS
========================= */
function getServiceStats(bookings) {
  const stats = {
    total: bookings.length,
    Grooming: 0,
    Vaccination: 0,
    Veterinary: 0,
  };

  bookings.forEach((b) => {
    if (stats[b.service] !== undefined) {
      stats[b.service]++;
    }
  });

  return stats;
}

/* =========================
   UNUSED DUPLICATES (RENAMED)
   ❌ NOT DELETED (as requested)
========================= */
function formatDateTime_unused(dateString) {
  return formatDateTime(dateString);
}

function getMonthKey_unused(dateString) {
  return getMonthKey(dateString);
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMonths, setOpenMonths] = useState({});

  /* ✅ ROLE READ */
  const role =
    typeof window !== "undefined"
      ? localStorage.getItem("admin_role")
      : null;

  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    fetch("/api/admin/bookings", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  /* =========================
     MONTH TOGGLE (COLLAPSE)
  ========================= */
  function toggleMonth(month) {
    setOpenMonths((prev) => ({
      ...prev,
      [month]: !prev[month],
    }));
  }

  /* =========================
     DELETE BOOKING
  ========================= */
  async function deleteBooking(id) {
    if (!confirm("Are you sure you want to delete this booking?")) return;

    const token = localStorage.getItem("admin_token");

    await fetch("/api/admin/bookings", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });

    setBookings((prev) => prev.filter((b) => b._id !== id));
  }

  /* =========================
     MONTH-WISE EXCEL EXPORT
  ========================= */
  function exportExcel() {
    const wb = XLSX.utils.book_new();

    Object.entries(groupedBookings).forEach(([month, monthBookings]) => {
      const data = monthBookings.map((b) => ({
        Name: b.name,
        Phone: b.phone,
        Email: b.email,
        Service: b.service,
        DateTime: formatDateTime(b.createdAt),
      }));

      const ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(
        wb,
        ws,
        month.replace(" ", "_")
      );
    });

    XLSX.writeFile(wb, "lifeline-bookings-monthwise.xlsx");
  }

  /* =========================
     GROUP BOOKINGS BY MONTH
  ========================= */
  const groupedBookings = bookings.reduce((acc, booking) => {
    const month = getMonthKey(booking.createdAt);
    if (!acc[month]) acc[month] = [];
    acc[month].push(booking);
    return acc;
  }, {});

  if (loading) {
    return <p style={{ padding: 30 }}>Loading bookings...</p>;
  }

  return (
    <div className="adminWrap">
      <h2>Admin Dashboard – Bookings</h2>

      <div className="adminActions">
        <button className="exportBtn" onClick={exportExcel}>
          Export Excel
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Email</th>
            <th>Service</th><th>Date & Time</th><th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(groupedBookings).length === 0 ? (
            <tr>
              <td colSpan={6}>No bookings yet</td>
            </tr>
          ) : (
            Object.entries(groupedBookings).map(([month, monthBookings]) => (
              <React.Fragment key={month}>
                {/* MONTH HEADER */}
                <tr
                  onClick={() => toggleMonth(month)}
                  style={{ cursor: "pointer" }}
                >
                  <td
                    colSpan={6}
                    style={{
                      background: "#e8eaf6",
                      fontWeight: "bold",
                      color: "#2c237d",
                    }}
                  >
                    {month} ({monthBookings.length})
                    {openMonths[month] === false ? " ▶" : " ▼"}
                  </td>
                </tr>

                {/* MONTH STATS */}
                {openMonths[month] !== false && (() => {
                  const stats = getServiceStats(monthBookings);
                  return (
                    <tr>
                      <td colSpan={6}>
                        <div className="statsRow">
                          <div className="statCard">Total: {stats.total}</div>
                          <div className="statCard">Grooming: {stats.Grooming}</div>
                          <div className="statCard">Vaccination: {stats.Vaccination}</div>
                          <div className="statCard">Veterinary: {stats.Veterinary}</div>
                        </div>
                      </td>
                    </tr>
                  );
                })()}

                {/* BOOKINGS */}
                {openMonths[month] !== false &&
                  monthBookings.map((b) => (
                    <tr key={b._id}>
                      <td>{b.name}</td>
                      <td>{b.phone}</td>
                      <td>{b.email}</td>
                      <td>{b.service}</td>
                      <td>{formatDateTime(b.createdAt)}</td>
                      <td>
                        {role === "superadmin" && (
                          <button
                            className="deleteBtn"
                            onClick={() => deleteBooking(b._id)}
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
