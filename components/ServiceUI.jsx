export const OfferBadge = () => (
  <div style={offer}>🎉 Flat 30% OFF on First Booking</div>
);

export const PriceNote = ({ price }) => (
  <div style={priceBox}>
    <strong>{price}</strong>
    <p style={note}>
      Includes visiting, checkup & consultation.<br />
      Medicines/tests charged separately.
    </p>
  </div>
);

export const BookBtn = ({ onClick, label }) => (
  <button onClick={onClick} style={btn}>{label}</button>
);

/* styles */
const offer = {
  background: "#dcfce7",
  color: "#166534",
  padding: "10px 14px",
  borderRadius: 8,
  marginBottom: 20,
  fontWeight: 600,
};

const priceBox = {
  background: "#f5f7ff",
  padding: 16,
  borderRadius: 14,
  marginBottom: 24,
};

const note = { fontSize: 14, color: "#374151" };

const btn = {
  background: "#2c237d",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
};
