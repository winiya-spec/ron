import { FaArrowDown } from "react-icons/fa";

function ScrollDownButton() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToBottom}
      aria-label="Scroll down"
      style={{
        position: "fixed",
        bottom: 80,
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
      <FaArrowDown size={14} />
    </button>
  );
}

export default ScrollDownButton;
