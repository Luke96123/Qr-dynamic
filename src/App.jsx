import React, { useState } from "react";

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
    setStep("pending");
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

          <button style={styles.googleButton}>
            Continua con Google
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

          <p style={styles.subtitle}>
            Ti invieremo un codice di verifica
          </p>

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

          <p style={styles.subtitle}>
            Inserisci il codice ricevuto via SMS al numero:
            <br />
            <strong>{phone}</strong>
          </p>

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

          <p
            style={styles.back}
            onClick={() => {
              setError("");
              setStep("phone");
            }}
          >
            ← Cambia numero
          </p>
        </div>
      )}

      {step === "document" && (
        <div style={styles.card}>
          <h2 style={styles.heading}>Verifica documento</h2>

          <p style={styles.subtitle}>
            Carica una foto o un PDF del documento.  
            Lo staff controllerà manualmente i dati.
          </p>

          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => setDocumentFile(e.target.files[0])}
            style={styles.fileInput}
          />

          {documentFile && (
            <p style={styles.success}>
              File selezionato: {documentFile.name}
            </p>
          )}

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.phoneButton} onClick={sendDocument}>
            Invia documento
          </button>

          <p
            style={styles.back}
            onClick={() => {
              setError("");
              setStep("otp");
            }}
          >
            ← Torna al codice
          </p>
        </div>
      )}

      {step === "pending" && (
        <div style={styles.card}>
          <div style={styles.logo}>✓</div>

          <h2 style={styles.heading}>Richiesta inviata</h2>

          <p style={styles.subtitle}>
            Il documento è stato inviato allo staff.
            Riceverai conferma appena la verifica sarà approvata.
          </p>

          <button
            style={styles.phoneButton}
            onClick={() => {
              setStep("home");
              setPhone("");
              setOtp("");
              setDocumentFile(null);
              setError("");
            }}
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
    color: "#111",
    cursor: "pointer"
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
    marginTop: "10px",
    cursor: "pointer"
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
  error: {
    color: "#ff6b6b",
    fontSize: "13px",
    marginTop: "4px"
  },
  success: {
    color: "#00ff99",
    fontSize: "13px",
    marginTop: "8px",
    wordBreak: "break-word"
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
