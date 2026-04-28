import React, { useState } from "react";

function App() {
  const [step, setStep] = useState("home");

  return (
    <div style={styles.container}>
      {step === "home" && (
        <div style={styles.card}>
          <div style={styles.logo}>♪</div>

          <h1 style={styles.title}>QR Dynamic</h1>
          <p style={styles.subtitle}>
            Accesso rapido agli eventi esclusivi
          </p>

          <button style={styles.googleButton}>
            Continua con Google
          </button>

          <button
            style={styles.phoneButton}
            onClick={() => setStep("phone")}
          >
            Continua con numero di telefono
          </button>

          <p style={styles.footer}>
            Verifica manuale documento prima dell’ingresso
          </p>
        </div>
      )}

      {step === "phone" && (
        <div style={styles.card}>
          <h2 style={styles.heading}>Inserisci numero</h2>

          <p style={styles.subtitle}>
            Ti invieremo un codice di verifica
          </p>

          <input
            type="tel"
            placeholder="+39 333 1234567"
            style={styles.input}
          />

          <button
            style={styles.phoneButton}
            onClick={() => setStep("otp")}
          >
            Invia codice
          </button>

          <p style={styles.back} onClick={() => setStep("home")}>
            ← Torna indietro
          </p>
        </div>
      )}

      {step === "otp" && (
        <div style={styles.card}>
          <h2 style={styles.heading}>Codice di verifica</h2>

          <p style={styles.subtitle}>
            Inserisci il codice ricevuto via SMS
          </p>

          <input
            type="text"
            placeholder="123456"
            maxLength="6"
            style={styles.input}
          />

          <button
            style={styles.phoneButton}
            onClick={() => setStep("document")}
          >
            Verifica codice
          </button>

          <p style={styles.back} onClick={() => setStep("phone")}>
            ← Cambia numero
          </p>
        </div>
      )}

      {step === "document" && (
        <div style={styles.card}>
          <h2 style={styles.heading}>Verifica documento</h2>

          <p style={styles.subtitle}>
            Carica il documento per la verifica manuale
          </p>

          <input
            type="file"
            accept="image/*,.pdf"
            style={styles.fileInput}
          />

          <button
            style={styles.phoneButton}
            onClick={() => setStep("pending")}
          >
            Invia documento
          </button>

          <p style={styles.back} onClick={() => setStep("otp")}>
            ← Torna al codice
          </p>
        </div>
      )}

      {step === "pending" && (
        <div style={styles.card}>
          <div style={styles.logo}>✓</div>

          <h2 style={styles.heading}>Richiesta inviata</h2>

          <p style={styles.subtitle}>
            Il tuo documento sarà controllato manualmente dallo staff.
          </p>

          <button
            style={styles.phoneButton}
            onClick={() => setStep("home")}
          >
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
    padding: "20px",
    color: "white",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: "28px",
    padding: "32px 24px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)"
  },
  logo: {
    width: "76px",
    height: "76px",
    margin: "0 auto 18px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #00ff99, #00c853)",
    color: "#050505",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "42px",
    fontWeight: "bold"
  },
  title: {
    fontSize: "34px",
    margin: "0 0 10px"
  },
  heading: {
    fontSize: "26px",
    margin: "0 0 10px"
  },
  subtitle: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "22px",
    lineHeight: "1.5"
  },
  googleButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "16px",
    border: "none",
    marginBottom: "12px",
    fontSize: "15px",
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#111"
  },
  phoneButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "16px",
    border: "none",
    fontSize: "15px",
    fontWeight: "bold",
    backgroundColor: "#00c853",
    color: "white",
    marginTop: "10px"
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    marginTop: "6px",
    marginBottom: "8px",
    fontSize: "16px",
    outline: "none"
  },
  fileInput: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.25)",
    marginTop: "6px",
    marginBottom: "8px",
    fontSize: "14px",
    color: "white"
  },
  back: {
    marginTop: "18px",
    fontSize: "13px",
    opacity: 0.7,
    cursor: "pointer"
  },
  footer: {
    marginTop: "22px",
    fontSize: "12px",
    opacity: 0.65
  }
};

export default App;
