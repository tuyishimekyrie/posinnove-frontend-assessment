import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { expenseInput } from "../App";


type FormProp = {
  expenseData: expenseInput[];
  setExpenseData: React.Dispatch<React.SetStateAction<expenseInput[]>>;
  setFilteredData: React.Dispatch<React.SetStateAction<expenseInput[]>>;
};

const Form = ({ expenseData, setExpenseData, setFilteredData }: FormProp) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<expenseInput>();

  const submitHandler: SubmitHandler<expenseInput> = async (data) => {
    const updatedExpenses = [...expenseData, data];
    setExpenseData(updatedExpenses);
    setFilteredData(updatedExpenses);
    localStorage.setItem("expenseData", JSON.stringify(updatedExpenses));
    toast.success("Data Added Successfully");
    reset();
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form className="py-10 space-y-4" onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            className="text-black px-2 rounded-sm py-2"
            id="amount"
            {...register("amount", { valueAsNumber: true ,required:true})}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="text-black px-2 rounded-sm py-2"
            {...register("category",{required:true})}
          >
            <option value="Groceries">Groceries</option>
            <option value="Hygiene">Hygiene</option>
            <option value="Gas">Gas</option>
            <option value="Transport">Transport</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="text-black px-2 rounded-sm py-2"
            id="date"
            {...register("date",{required:true})}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Enter Description"
            className="px-2 rounded-sm py-2 text-black"
            {...register("description",{required:true})}
          ></textarea>
        </div>
        <button
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 w-full rounded-sm hover:bg-blue-800"
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default Form;
