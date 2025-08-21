import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#4a4a4a",
        color: "#fff",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        zIndex: "9999",
        pointerEvents: "auto",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2e2e2e")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4a4a4a")}
    >
      <FaArrowUp size={14} />
    </button>
  ) : null;
}

export default BackToTop;
