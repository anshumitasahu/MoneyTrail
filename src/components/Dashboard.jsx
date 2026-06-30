import './Dashboard.css';
import ExpensePieChart from "./Piechart";
import { CreditCardIcon, ChartLineUpIcon, ChartLineDownIcon, PiggyBankIcon } from "@phosphor-icons/react";
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
          <div className="welcome">
            <h1>
              Welcome Back!
            </h1>
          </div>
          <div className="month-year">
            <h2>
              {month} {year}
            </h2>
          </div>
        </div>
        <div className='head-para'>
          <p>
            Your financial overview for this month.
          </p>
        </div>
      </div>
      <div className="money-map">
        <div className="money-map-card current-balance">
          <div className="money-map-card-img current-balance-img">
            <CreditCardIcon size={32} color="#ffff" weight="bold" />
          </div>
          <div className="money-map-card-info current-balance-info">
            <h3>Current Balance</h3>
            <p>₹52,400</p>
            <span>Available Balance</span>
          </div>
        </div>
        <div className="money-map-card income">
          <div className="money-map-card-img income-img">
            <ChartLineUpIcon size={32} color="#ffff" weight="bold" />
          </div>
          <div className="money-map-card-info income-info">
            <h3>Income</h3>
            <p>₹65,000</p>
            <span>This Month</span>
          </div>
        </div>
        <div className="money-map-card expenses">
          <div className="money-map-card-img expenses-img">
            <ChartLineDownIcon size={32} color="#fff" weight="bold" />
          </div>
          <div className="money-map-card-info expenses-info">
            <h3>Expenses</h3>
            <p>₹12,600</p>
            <span>This Month</span>
          </div>
        </div>
        <div className="money-map-card savings">
          <div className="money-map-card-img savings-img">
            <PiggyBankIcon size={32} color="#fff" weight="bold" />
          </div>
          <div className="money-map-card-info savings-info">
            <h3>Savings</h3>
            <p>₹52,400</p>
            <span>Income - Expenses</span>
          </div>
        </div>
      </div>

      <div className="pie-chart-and-categories">
        <div className="money-piechart">
          <div>
            <h1>
              piechart
            </h1>
          </div>
          <div className="chart">
            <ExpensePieChart />
          </div>
        </div>
        <div className="categories-dashboard">
          
        </div>
      </div>
    </div>
  );
}