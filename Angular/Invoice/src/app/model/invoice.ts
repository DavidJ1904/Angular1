import { company } from "./company";
import { customers } from "./customers";
import { invoiceItem } from "./invoiceItem";

export class Invoice{
    id!:string;
    company!:company;
    customers!:customers;
    items!: invoiceItem[];
}