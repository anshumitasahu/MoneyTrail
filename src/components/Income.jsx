import { useEffect, useState } from "react";
import "./Income.css";
import { PlusCircleIcon, TrashIcon, ChartLineUpIcon } from "@phosphor-icons/react";

export default function Income() {
    const [incomeList, setIncomeList] = useState(() => {
        const storedIncome = localStorage.getItem("income");
        return storedIncome ? JSON.parse(storedIncome) : [];
    });

    const [income, setIncome] = useState({
        name: "",
        amount: "",
        date: "",
    });

    useEffect(() => {
        localStorage.setItem("income", JSON.stringify(incomeList));
    }, [incomeList]);

    const handleChange = (e) => {
        setIncome({
            ...income,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddIncome = (e) => {
        e.preventDefault();

        const newIncome = {
            id: Date.now(),
            name: income.name,
            amount: parseFloat(income.amount),
            date: income.date,
        };

        setIncomeList([...incomeList, newIncome]);

        setIncome({
            name: "",
            amount: "",
            date: "",
        });
    };

    const handleDeleteIncome = (id) => {
        setIncomeList(
            incomeList.filter((income) => income.id !== id)
        );
    };

    const totalIncome = incomeList.reduce(
        (sum, income) => sum + (income.amount || 0),
        0
    );

    return (
        <div className="income-tracker">

            <div className="add-income">
                <h2>Add Income</h2>

                <form onSubmit={handleAddIncome}>

                    <div className="input">
                        <p>Income Source</p>

                        <input
                            type="text"
                            name="name"
                            placeholder="e.g. Salary"
                            required
                            value={income.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <p>Amount</p>

                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            required
                            value={income.amount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <p>Date</p>

                        <input
                            type="date"
                            name="date"
                            required
                            value={income.date}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        <PlusCircleIcon
                            size={28}
                            color="#fff"
                            weight="duotone"
                        />

                        <span>Add Income</span>
                    </button>

                </form>
            </div>

            <div className="income-summary">

                <div className="income-total">
                    <ChartLineUpIcon size={42} color="#ffff" weight="bold" className="income-summary-box" />

                    <div>
                        <p>Total Income</p>
                        <h2>₹{totalIncome.toFixed(2)}</h2>
                    </div>
                </div>

            </div>

            <div className="income-list">

                {incomeList.map((item) => (
                    <div className="income-card" key={item.id}>

                        <div>
                            <p>{item.name}</p>

                            <span>
                                {item.date
                                    ? new Date(item.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })
                                    : ""}
                            </span>
                        </div>

                        <div>
                            <strong>
                                ₹{item.amount.toFixed(2)}
                            </strong>

                            <button
                                onClick={() => handleDeleteIncome(item.id)}
                            >
                                <TrashIcon
                                    size={20}
                                    color="#ff7a7a"
                                    weight="duotone"
                                />
                            </button>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}