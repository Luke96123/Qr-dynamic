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
        </div>
      )}

      {step === "phone" && (
        <div style={styles.card}>
          <h2>Inserisci numero</h2>

          <input
            type="tel"
            placeholder="+39 333 1234567"
            style={styles.input}
          />

          <button style={styles.phoneButton}>
            Invia codice
          </button>

          <p style={styles.back} onClick={() => setStep("home")}>
            ← Torna indietro
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #090
