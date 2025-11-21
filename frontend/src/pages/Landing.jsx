

import { useNavigate } from "react-router-dom";


export default function Landing() {
const navigate = useNavigate();


return (
<div className="landing-container">
<header className="landing-header">
<h1 className="logo">ExpenseFlow</h1>
<div className="nav-actions">
<button className="btn-outline" onClick={() => navigate('/login')}>Login</button>
<button className="btn-primary" onClick={() => navigate('/signup')}>Create Account</button>
</div>
</header>


<section className="hero-section">
<div className="hero-text">
<h2>Track Expenses. Control Spending. Simplify Life.</h2>
<p>Smart and modern expense tracking inspired by Expensify UI.</p>
<div className="hero-buttons">
<button className="btn-primary" onClick={() => navigate('/signup')}>Get Started</button>
<button className="btn-secondary" onClick={() => navigate('/login')}>Login</button>
</div>
</div>
<img
src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
alt="Finance"
className="hero-image"
/>
</section>


<section className="features-section">
<div className="feature-card">
<h3>Smart Tracking</h3>
<p>Monitor all your expenses in one place.</p>
</div>
<div className="feature-card">
<h3>Real-time Reports</h3>
<p>Detailed insights of your spending.</p>
</div>
<div className="feature-card">
<h3>Secure Data</h3>
<p>Protected with JWT authentication.</p>
</div>
</section>


<section className="faq-section">
<h2>FAQs</h2>
<details><summary>What is ExpenseFlow?</summary><p>A smart expense tracking system.</p></details>
<details><summary>Is my data secure?</summary><p>Yes, we use encrypted authentication.</p></details>
<details><summary>Does it support UPI?</summary><p>UI only simulation support.</p></details>
</section>


<footer className="footer">
<p>© 2025 ExpenseFlow. All rights reserved.</p>
</footer>
</div>
);
}