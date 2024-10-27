import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Form from "./Components/Form";
import Table from "./Components/Table";

export type expenseInput = {
  amount: number;
  category: string;
  date: string;
  description: string;
};

const App = () => {
  const [expenseData, setExpenseData] = useState<expenseInput[]>([]);
  const [filteredData, setFilteredData] = useState<expenseInput[]>([]);
  useEffect(() => {
    const localData = localStorage.getItem("expenseData");
    if (localData) {
      setExpenseData(JSON.parse(localData));
    }
  }, []);
  return (
    <div className="flex justify-center gap-10 min-h-screen bg-gray-800 text-white font-serif py-4 px-12">
      <Toaster />
      <Form
        expenseData={expenseData}
        setExpenseData={setExpenseData}
        setFilteredData={setFilteredData}
      />

      <Table
        expenseData={expenseData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
};

export default App;
