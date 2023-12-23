import { TransactionRecordCardProps } from "../types";
import { isSpendingRecord } from "../utils";
import IncomeRecordCard from "./IncomeRecordCard";
import SpendingRecordCard from "./SpendingRecordCard";

export default function TransactionRecordCard({
  record,
}: TransactionRecordCardProps): JSX.Element {

  const renderRecordCard = (): JSX.Element => {
    if (isSpendingRecord(record)) {
      return <SpendingRecordCard record={record} />;
    } else {
      return <IncomeRecordCard record={record} />;
    }
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded-md shadow-md p-4 w-fit">
      {renderRecordCard()}
    </div>
  );
}
