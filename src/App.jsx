// import { useState } from 'react'
// import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Hello Word</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count - 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import './App.css';

export default function App() {
  console.log("App component rendering");
  return (
    <div className="page">
      <div className="container">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">Lando</div>

          <ul className="nav-links">
            <li className="active">Home</li>
            <li>Pricing</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>

          <div className="auth">
            <button className="login">Log in</button>
            <button className="signup">Sign up</button>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <p className="trial">— FREE 30 DAYS TRIAL</p>
            <h1>
              The best way <br />
              to showcase <br />
              your project.
            </h1>
            <p className="subtitle">
              Here you can put a short description about your project.
            </p>

            <div className="actions">
              <button className="primary">Try for free</button>
              <button className="secondary">See how it works</button>
            </div>
          </div>

          <div className="hero-image">
            <div className="blob yellow"></div>
            <div className="blob blue"></div>
            <div className="blob gray"></div>
            <div className="phone">Lando</div>
          </div>
        </section>

        {/* TRUST */}
        <p className="trusted">
          Trusted by individuals and teams at the world's best companies
        </p>

        <div className="logos">
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
        </div>
      </div>
    </div>
  );
}
