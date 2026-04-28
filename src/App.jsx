import React from "react";

function App() {
  return (
    <div style={{
      backgroundColor: "#0f0f0f",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "42px" }}>QR Dynamic</h1>
      <p>Accesso eventi esclusivi</p>

      <button style={{
        marginTop: "20px",
        padding: "12px 24px",
        borderRadius: "14px",
        border: "none",
        backgroundColor: "#00c853",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold"
      }}>
        Registrati
      </button>
    </div>
  );
}

export default App;
