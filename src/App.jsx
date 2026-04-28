import React, { useState } from "react";

function App() {
  const [step, setStep] = useState("home");

  return (
    <div style={styles.container}>
      {step === "home" && (
        <div style={styles.card}>
          <div style={styles.logo}>♪</div>
          <h1>QR Dynamic</h1>
          <p>Accesso rapido agli eventi esclusivi</p>

          <button style={styles.button} onClick={() => setStep("phone")}>
            Registrati
          </button>
        </div>
      )}

      {step === "phone" && (
        <div style={styles.card}>
          <h2>Inserisci numero</h2>

          <input
            style={styles.input}
            placeholder="+39 333 1234567"
          />

          <button style={styles.button} onClick={() => setStep("otp")}>
            Invia codice
          </button>

          <p style={styles.back} onClick={() => setStep("home")}>
            ← Indietro
          </p>
        </div>
      )}

      {step === "otp" && (
        <div style={styles.card}>
          <h2>Codice OTP</h2>

          <input
            style={styles.input}
            placeholder="123456"
            maxLength="6"
          />

          <button style={styles.button} onClick={() => setStep("document")}>
            Verifica codice
          </button>

          <p style={styles.back} onClick={() => setStep("phone")}>
            ← Cambia numero
          </p>
        </div>
      )}

      {step === "document" && (
        <div style={styles.card}>
          <h2>Verifica documento</h2>

          <input type="file" style={styles.file} />

          <button style={styles.button} onClick={() => setStep("qr")}>
            Invia documento
          </button>
        </div>
      )}

      {step === "qr" && (
        <div style={styles.card}>
          <h2>QR Accesso</h2>

          <div style={styles.fakeQr}>
            QR
          </div>

          <p>Mostra questo codice all’ingresso</p>

          <button style={styles.button} onClick={() => setStep("home")}>
            Torna alla home
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #090909, #181818, #003b2f)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Arial",
    padding: "20px"
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "28px",
    padding: "30px 24px",
    textAlign: "center"
  },
  logo: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    background: "#00c853",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    margin: "0 auto 20px"
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    background: "#00c853",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "15px",
    cursor: "pointer"
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    fontSize: "16px",
    marginTop: "15px"
  },
  file: {
    width: "100%",
    marginTop: "20px",
    color: "white"
  },
  back: {
    marginTop: "18px",
    opacity: 0.7,
    cursor: "pointer"
  },
  fakeQr: {
    width: "180px",
    height: "180px",
    background: "white",
    color: "black",
    margin: "20px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    fontWeight: "bold"
  }
};

export default App;
