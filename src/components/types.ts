import { GetIncomeSchema, GetSpendingSchema } from "@/api";

export type TransactionRecord = GetSpendingSchema | GetIncomeSchema;

export interface TransactionRecordCardProps {
    record: TransactionRecord;
}

export interface IncomeRecordCardProps {
    record: GetIncomeSchema;
}

export interface SpendingRecordCardProps {
    record: GetSpendingSchema;
}