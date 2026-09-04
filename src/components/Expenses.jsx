import { useEffect, useState } from "react";
import "./Expenses.css";
import {
  TrashIcon,
  PlusCircleIcon,
  HamburgerIcon,
  CarIcon,
  FilmSlateIcon,
  AirplaneTiltIcon,
  GraduationCapIcon,
  HeartbeatIcon,
  ShoppingCartIcon,
  ReceiptIcon,
  PackageIcon,
  ListBulletsIcon,
  WalletIcon
} from "@phosphor-icons/react";

const categories = [
  "Food",
  "Transport",
  "Entertainment",
  "Travel",
  "Education",
  "Healthcare",
  "Shopping",
  "Bills",
  "Other"
];

const defaultExpenses = [
  { id: 1, name: "Grocery", amount: 50, category: "Food", date: "2023-06-01" },
  { id: 2, name: "Transport", amount: 30, category: "Transport", date: "2023-06-02" },
  { id: 3, name: "Entertainment", amount: 20, category: "Entertainment", date: "2023-06-03" },
  { id: 4, name: "Travel", amount: 100, category: "Travel", date: "2023-06-04" },
  { id: 5, name: "Healthcare", amount: 50, category: "Healthcare", date: "2023-06-05" },
  { id: 6, name: "Shopping", amount: 150, category: "Shopping", date: "2023-06-06" },
  { id: 7, name: "Bills", amount: 600, category: "Bills", date: "2023-06-07" },
  { id: 8, name: "Other", amount: 50, category: "Other", date: "2023-06-08" }
];

const categoryIcons = {
  Food: HamburgerIcon,
  Transport: CarIcon,
  Entertainment: FilmSlateIcon,
  Travel: AirplaneTiltIcon,
  Education: GraduationCapIcon,
  Healthcare: HeartbeatIcon,
  Shopping: ShoppingCartIcon,
  Bills: ReceiptIcon,
  Other: PackageIcon
};

const categoryBackgroundColors = {
  Food: "#E8F5E9",
  Transport: "#E3F2FD",
  Entertainment: "#F3E5F5",
  Travel: "#FFF3E0",
  Education: "#E8EAF6",
  Healthcare: "#FCE4EC",
  Shopping: "#F3E5F5",
  Bills: "#FFF8E1",
  Other: "#ECEFF1"
};

const categoryColors = {
  Food: "#00c110",
  Transport: "#0072c3",
  Entertainment: "#a300bc",
  Travel: "#b36f00",
  Education: "#001aaf",
  Healthcare: "#b6003d",
  Shopping: "#a200bb",
  Bills: "#a47e00",
  Other: "#00558d"
};

export default function Expenses() {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : defaultExpenses;
  });

  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    category: "Food",
    date: ""
  });

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    sort: ""
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleAddExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      name: expense.name.trim(),
      amount: parseFloat(expense.amount),
      category: expense.category,
      date: expense.date
    };

    setExpenses([...expenses, newExpense]);

    setExpense({
      name: "",
      amount: "",
      category: "Food",
      date: ""
    });
  };

  const filteredExpenses = expenses.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchCategory =
      filters.category === "" || item.category === filters.category;

    return matchSearch && matchCategory;
  });

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    switch (filters.sort) {
      case "amount-asc":
        return a.amount - b.amount;
      case "amount-desc":
        return b.amount - a.amount;
      case "date-asc":
        return new Date(a.date) - new Date(b.date);
      case "date-desc":
        return new Date(b.date) - new Date(a.date);
      default:
        return 0;
    }
  });

  const totalAmount = sortedExpenses.reduce(
    (sum, item) => sum + (item.amount || 0),
    0
  );

  return (
    <div className="expense-tracker">
      <div className="add-expenses">
        <h2>Add Expenses</h2>

        <form onSubmit={handleAddExpense}>
          <div className="input expense-name">
            <p>Expense Name</p>
            <input
              type="text"
              name="name"
              required
              placeholder="Expense Name"
              value={expense.name}
              onChange={handleChange}
            />
          </div>

          <div className="input expense-amount">
            <p>Amount</p>
            <input
              type="number"
              name="amount"
              min="0"
              step="0.01"
              required
              placeholder="Amount"
              value={expense.amount}
              onChange={handleChange}
            />
          </div>

          <div className="input expense-category">
            <p>Category</p>
            <select
              className="category-add"
              name="category"
              value={expense.category}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="input expense-date">
            <p>Date</p>
            <input
              type="date"
              name="date"
              required
              value={expense.date}
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn" type="submit">
            <PlusCircleIcon size={22} weight="duotone" />
            <span>Add Expense</span>
          </button>
        </form>
      </div>

      <div className="all-expenses">
        <div className="header-expense-list">
          <div className="search-expenses-and-filter">
            <div className="search-expenses">
              <input
                type="text"
                name="search"
                placeholder="Search Expenses"
                value={filters.search}
                onChange={handleFilterChange}
              />
            </div>

            <div className="filter-expenses">
              <div className="select">
                <p>Category</p>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                >
                  <option value="">All Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="select">
                <p>Sort By</p>
                <select
                  name="sort"
                  value={filters.sort}
                  onChange={handleFilterChange}
                >
                  <option value="">None</option>
                  <option value="amount-asc">Amount (Low to High)</option>
                  <option value="amount-desc">Amount (High to Low)</option>
                  <option value="date-asc">Date (Oldest First)</option>
                  <option value="date-desc">Date (Newest First)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="total-number-expenses">
            <div className="final-expense-card number">
              <div className="final-expense-card-img number-img">
                <ListBulletsIcon size={32} color="#fff" weight="bold" />
              </div>

              <div>
                <p className="info-title">Total Expenses:</p>
                <p className="info-p">{sortedExpenses.length}</p>
              </div>
            </div>

            <div className="final-expense-card total">
              <div className="final-expense-card-img total-img">
                <WalletIcon size={32} color="#fff" weight="bold" />
              </div>

              <div>
                <p className="info-title">Total Amount:</p>
                <p className="info-p">₹{totalAmount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="expense-list">
          {sortedExpenses.map((item) => {
            const Icon = categoryIcons[item.category] || PackageIcon;

            return (
              <div className="expense-card" key={item.id}>
                <div className="expense-left">
                  <div
                    className="expense-icon"
                    style={{
                      backgroundColor:
                        categoryBackgroundColors[item.category]
                    }}
                  >
                    <Icon
                      size={28}
                      weight="duotone"
                      color={categoryColors[item.category]}
                    />
                  </div>

                  <div className="expense-info">
                    <p>{item.category}</p>
                    <h4>{item.name}</h4>
                  </div>
                </div>

                <div className="expense-right">
                  <div className="amount-date">
                    <p className="amount-p">
                      ₹{item.amount.toFixed(2)}
                    </p>

                    <p className="date">
                      {item.date
                        ? new Date(item.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                          })
                        : ""}
                    </p>
                  </div>

                  <div className="btn-delete">
                    <button
                      type="button"
                      onClick={() => handleDeleteExpense(item.id)}
                    >
                      <TrashIcon
                        size={20}
                        color="#ff7a7a"
                        weight="duotone"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
