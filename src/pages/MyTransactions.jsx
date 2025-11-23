import { useLoaderData } from "react-router";
import CardModel from "../components/CardModel";

const MyTransactions = () => {
  const data = useLoaderData();
  // console.log(data)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-500">My Transactions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((model) => (
          <CardModel key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default MyTransactions;
