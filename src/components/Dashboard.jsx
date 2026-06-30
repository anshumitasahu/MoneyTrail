import './Dashboard.css';
export default function Dashboard() {
  const today = new Date();
  const month = today.toLocaleString("en-US", {
    month: "long",
  });

  const year = today.getFullYear();

  return (
    <div className="dashboard">
      <div className="head">
        <div className="header">
          <div className="Welcome">
            <h1>
              Welcome Back!
            </h1>
          </div>
          <div className="month">
            <h2>
              {month} {year}
            </h2>
          </div>
        </div>
        <div className='head-para'>
          <p>
            Manage your finances at a glance.
          </p>
        </div>
      </div>
      <div className="money-map">
          <div className="money-map-card current-balance">
            <h3>Current Balance</h3>
            <p>₹52,400</p>
            <span>Available Balance</span>
          </div>
          <div className="money-map-card income">
            <h3>Income</h3>
            <p>₹65,000</p>
            <span>This Month</span>
          </div>
          <div className="money-map-card expenses">
            <h3>Expenses</h3>
            <p>₹12,600</p>
            <span>This Month</span>
          </div>
      </div>
    </div>
  );
}