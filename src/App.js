import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Vanilla JavaScript App</h1>

        <p style={styles.subtitle}>
          Bienvenido a mi primera aplicación en Azure Static Web Apps
        </p>

        <h2 style={styles.sectionTitle}>Integrantes del equipo</h2>

        <ul style={styles.list}>
          <li>Adrian Abraham Sanchez</li>
          <li>Bryan Jesus Castro Coello</li>
        </ul>

        <p style={styles.footer}>
          Desplegado con Azure Static Web Apps 🚀
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '400px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '10px',
    color: '#333',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  sectionTitle: {
    marginTop: '20px',
    fontSize: '20px',
    color: '#222',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '10px',
    lineHeight: '1.8',
  },
  footer: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#888',
  },
};

export default App;

