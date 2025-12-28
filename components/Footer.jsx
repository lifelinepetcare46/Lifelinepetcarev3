export default function Footer() {
  return (
    <footer style={footer}>
      <div style={container}>
        {/* BRAND */}
        <div style={col}>
          <h3 style={brand}>Lifeline Pet Care</h3>
          <p style={text}>
            Trusted doorstep veterinary care, vaccination, and grooming services
            for pets. Compassionate care delivered at your home with
            professionalism and love.
          </p>
        </div>

        {/* SERVICES */}
        <div style={col}>
          <h4 style={heading}>Our Services</h4>
          <ul style={list}>
            <li>Veterinary Consultation</li>
            <li>Pet Vaccination</li>
            <li>Pet Grooming</li>
            <li>Emergency Pet Care</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={col}>
          <h4 style={heading}>Contact Us</h4>
          <p style={text}>📞 +91 88008 13462</p>
          <p style={text}>📧 lifelinepetcares@gmail.com</p>
          <p style={text}>📍 Delhi NCR, India</p>
        </div>

        {/* QUICK LINKS */}
        <div style={col}>
          <h4 style={heading}>Quick Links</h4>
          <ul style={list}>
            <li><a href="#services" style={link}>Services</a></li>
            <li><a href="#book" style={link}>Book Appointment</a></li>
            <li><a href="#contact" style={link}>Contact Us</a></li>
            <li>
              <a
                href="https://www.instagram.com/_lifeline_pet_care/"
                target="_blank"
                style={link}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* SEO KEYWORDS */}
      <div style={seo}>
        <p>
          Doorstep Veterinary Services | Pet Doctor at Home | Pet Vaccination
          Services | Dog & Cat Grooming | Home Visit Vet | Lifeline Pet Care
          Delhi NCR
        </p>
      </div>

      {/* COPYRIGHT */}
      <div style={copyright}>
        © {new Date().getFullYear()} Lifeline Pet Care. All rights reserved.
      </div>
    </footer>
  );
}

/* ================= STYLES ================= */

const footer = {
  background: "#2c237d",
  color: "#ffffff",
  paddingTop: "60px",
};

const container = {
  maxWidth: "1200px",
  margin: "auto",
  padding: "0 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "40px",
};

const col = {
  fontSize: "15px",
  lineHeight: "1.7",
};

const brand = {
  fontSize: "22px",
  marginBottom: "12px",
};

const heading = {
  fontSize: "18px",
  marginBottom: "12px",
};

const text = {
  color: "#e0e7ff",
};

const list = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const link = {
  color: "#e0e7ff",
  textDecoration: "none",
};

const seo = {
  marginTop: "40px",
  padding: "20px",
  background: "#241c6d",
  fontSize: "13px",
  textAlign: "center",
  color: "#c7d2fe",
};

const copyright = {
  textAlign: "center",
  padding: "18px",
  fontSize: "14px",
  background: "#1f185a",
};
