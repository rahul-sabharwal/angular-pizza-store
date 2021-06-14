import { IItem } from "./IItem";

export interface IOrder {
    id:string;
    customerName:string;
    items : IItem[];
}