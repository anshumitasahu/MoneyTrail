import "./Dashboard.css";
import ExpensePieChart from "./Piechart";
import ExpenseLineChart from "./LineChart";

import {
  CreditCardIcon,
  ChartLineUpIcon,
  ChartLineDownIcon,
  PiggyBankIcon,
} from "@phosphor-icons/react";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const today = new Date();

  const month = today.toLocaleString("en-US", {
    month: "long",
  });

  const year = today.getFullYear();

  const [expenses, setExpenses] = useState([]);
  const [incomeList, setIncomeList] = useState([]);

  useEffect(() => {

    const storedExpenses =
      JSON.parse(localStorage.getItem("expenses")) || [];

    const storedIncome =
      JSON.parse(localStorage.getItem("income")) || [];

    setExpenses(storedExpenses);
    setIncomeList(storedIncome);

  }, []);

  const totalIncome = incomeList.reduce(
    (sum, income) => sum + (Number(income.amount) || 0),
    0
  );

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + (Number(expense.amount) || 0),
    0
  );

  const currentBalance = totalIncome - totalExpenses;

  const savings = currentBalance;

  const categoryTotals = {};

  expenses.forEach((expense) => {

    const category = expense.category;

    categoryTotals[category] =
      (categoryTotals[category] || 0) +
      (Number(expense.amount) || 0);

  });

  const chartData = Object.entries(categoryTotals).map(
    ([name, value]) => ({
      name,
      value,
    })
  );



  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyTotals = new Array(12).fill(0);

  expenses.forEach((expense) => {

    if (!expense.date) return;

    const expenseDate = new Date(expense.date);

    const expenseMonth = expenseDate.getMonth();

    monthlyTotals[expenseMonth] +=
      Number(expense.amount) || 0;

  });

  const yearlyExpenseData = months.map((month, index) => ({
    month,
    expense: monthlyTotals[index],
  }));

  return (

    <div className="dashboard">

      <div className="head">

        <div className="header">

          <div className="welcome">
            <h1>Welcome Back!</h1>
          </div>

          <div className="month-year">
            <h2>
              {month} {year}
            </h2>
          </div>

        </div>

        <div className="head-para">
          <p>
            Your financial overview for this month.
          </p>
        </div>

      </div>


      <div className="money-map">

        <div className="money-map-card current-balance">

          <div className="money-map-card-img current-balance-img">

            <CreditCardIcon
              size={32}
              color="#fff"
              weight="bold"
            />

          </div>

          <div className="money-map-card-info">

            <h3>Current Balance</h3>

            <p>
              ₹{currentBalance.toFixed(2)}
            </p>

            <span>
              Income - Expenses
            </span>

          </div>

        </div>

        <div className="money-map-card income">

          <div className="money-map-card-img income-img">

            <ChartLineUpIcon
              size={32}
              color="#fff"
              weight="bold"
            />

          </div>

          <div className="money-map-card-info">

            <h3>Income</h3>

            <p>
              ₹{totalIncome.toFixed(2)}
            </p>

            <span>
              Total Income
            </span>

          </div>

        </div>

        <div className="money-map-card expenses">

          <div className="money-map-card-img expenses-img">

            <ChartLineDownIcon
              size={32}
              color="#fff"
              weight="bold"
            />

          </div>

          <div className="money-map-card-info">

            <h3>Expenses</h3>

            <p>
              ₹{totalExpenses.toFixed(2)}
            </p>

            <span>
              Total Expenses
            </span>

          </div>

        </div>

        <div className="money-map-card savings">

          <div className="money-map-card-img savings-img">

            <PiggyBankIcon
              size={32}
              color="#fff"
              weight="bold"
            />

          </div>

          <div className="money-map-card-info">

            <h3>Savings</h3>

            <p>
              ₹{savings.toFixed(2)}
            </p>

            <span>
              Current Savings
            </span>

          </div>

        </div>

      </div>

      <div className="pie-chart-and-categories">

        <div className="money-piechart">

          <div>
            <h1 className="title-chart">
              Expenses by Category:
            </h1>
          </div>

          <div className="chart pie-chart">
            <ExpensePieChart data={chartData} />
          </div>

        </div>

        <div className="yearly-expenses">

          <div>
            <h1 className="title-chart">
              Monthly Expense Trend:
            </h1>
          </div>

          <div className="chart line-chart">
            <ExpenseLineChart
              data={yearlyExpenseData}
            />
          </div>

        </div>

      </div>

    </div>

  );
}
