import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function App() {
  const [step, setStep] = useState("home");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [documentFile, setDocumentFile] = useState(null);
  const [error, setError] = useState("");

  const goPhone = () => {
    setError("");
    setStep("phone");
  };

  const sendCode = () => {
    if (phone.trim().length < 8) {
      setError("Inserisci un numero valido.");
      return;
    }
    setError("");
    setStep("otp");
  };

  const verifyCode = () => {
    if (otp.length !== 6) {
      setError("Il codice deve essere di 6 cifre.");
      return;
    }
    setError("");
    setStep("document");
  };

  const sendDocument = () => {
    if (!documentFile) {
      setError("Carica prima il documento.");
      return;
    }
    setError("");
    setStep("qr");
  };

  return (
    <div style={styles.container}>
      {step === "home" && (
        <div style={styles.card}>
          <div style={styles.logo}>♪</div>

          <h1 style={styles.title}>QR Dynamic</h1>
          <p style={styles.subtitle}>
            Accesso rapido agli eventi esclusivi
          </p>

          <button style={styles.googleButton} onClick={goPhone}>
            Registrati
          </button>

          <button style={styles.phoneButton} onClick={goPhone}>
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

          <input
            type="tel"
            placeholder="+39 333 1234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.phoneButton} onClick={sendCode}>
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

          <input
            type="text"
            placeholder="123456"
            maxLength="6"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, ""))
            }
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.phoneButton} onClick={verifyCode}>
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

          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => setDocumentFile(e.target.files[0])}
            style={styles.fileInput}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.phoneButton} onClick={sendDocument}>
            Invia documento
          </button>

          <p style={styles.back} onClick={() => setStep("otp")}>
            ← Torna al codice
          </p>
        </div>
      )}

      {step === "qr" && (
        <div style={styles.card}>
          <h2 style={styles.heading}>Il tuo QR</h2>

          <QRCodeCanvas
            value={phone + "-" + Date.now()}
            size={200}
          />

          <p style={styles.subtitle}>
            Mostralo all’ingresso
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
    color: "white"
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: "28px",
    padding: "32px 24px",
    textAlign: "center"
  },
  logo: {
    width: "76px",
    height: "76px",
    margin: "0 auto 18px",
    borderRadius: "50%",
    background: "#00c853",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "42px"
  },
  title: {
    fontSize: "32px"
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "20px"
  },
  googleButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    marginBottom: "10px",
    backgroundColor: "white",
    color: "#111"
  },
  phoneButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    backgroundColor: "#00c853",
    color: "white",
    marginTop: "10px"
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    marginBottom: "10px"
  },
  fileInput: {
    width: "100%",
    padding: "10px",
    marginTop: "10px"
  },
  error: {
    color: "red",
    fontSize: "13px"
  },
  back: {
    marginTop: "10px",
    fontSize: "13px",
    opacity: 0.7,
    cursor: "pointer"
  },
  footer: {
    marginTop: "15px",
    fontSize: "12px",
    opacity: 0.6
  }
};

export default App;
