import { GetSpendingSchema } from "@/api";
import { TransactionRecord } from "./types";

export const isSpendingRecord = (
  record: TransactionRecord
): record is GetSpendingSchema => "is_necessary" in record;
