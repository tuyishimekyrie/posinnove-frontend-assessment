import React, { useRef } from "react";

type Expense = {
  amount: number;
  category: string;
  date: string;
  description: string;
};

type TableProps = {
  filteredData: Expense[];
  expenseData: Expense[];
  setFilteredData: React.Dispatch<React.SetStateAction<Expense[]>>;
};

const Table: React.FC<TableProps> = ({
  filteredData,
  expenseData,
  setFilteredData,
}) => {
  const filterRef = useRef<HTMLSelectElement>(null);

  const handleFilter = () => {
    const option = filterRef.current?.value;
    if (option) {
      const data = expenseData.filter((expense) => expense.category === option);
      setFilteredData(data);
    } else {
      setFilteredData(expenseData);
    }
  };

  return (
    <div className="space-y-4">
      <p>All Data</p>
      <div className="flex gap-4">
        <label htmlFor="filterCategory">Filter by Category</label>
        <select
          id="filterCategory"
          className="text-black px-2 rounded-sm py-2"
          ref={filterRef}
          onChange={handleFilter}
        >
          <option value="">All</option>
          <option value="Groceries">Groceries</option>
          <option value="Hygiene">Hygiene</option>
          <option value="Gas">Gas</option>
          <option value="Transport">Transport</option>
        </select>
      </div>

      <table>
        <thead>
          <tr className="bg-slate-500">
            <th className="px-2 py-2">Amount</th>
            <th className="px-2 py-2">Category</th>
            <th className="px-2 py-2">Date</th>
            <th className="px-2 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {(filteredData.length > 0 ? filteredData : expenseData).map(
            (expense, index) => (
              <tr key={index} className="bg-slate-700">
                <td className="px-2 py-2">{expense.amount}</td>
                <td className="px-2 py-2">{expense.category}</td>
                <td className="px-2 py-2">{expense.date}</td>
                <td className="px-2 py-2">{expense.description}</td>
              </tr>
            )
          )}
          {filteredData.length === 0 && expenseData.length === 0 && (
            <tr>
              <td colSpan={4} className="px-2 py-2 text-center">
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              {filteredData.reduce((acc, expense) => acc + expense.amount, 0)}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
