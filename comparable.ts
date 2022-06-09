import { Circle } from "./circle";

export interface Comparable{
    compareTo(o:Circle):number;
}