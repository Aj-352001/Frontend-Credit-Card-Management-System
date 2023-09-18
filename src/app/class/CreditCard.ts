import { BillingCycle } from "./BillingCycle";
import { CardType } from "./CardType";

export class CreditCard{
    constructor(
        public creditCardINumber?:number,
        public name?:string,
        public issueDate?:Date,
        public cardLender?:string,
        public expiryDate?:Date,
        public cardLimit?:number,
        public cvv?:number,
        public pin?:number,
        public creditScore?:number,
        public outstandingBalance?:number,
        public availableBalance?:number,
        public dueBalance?:number,
        public cardType?:CardType,
        public billingCycle?:BillingCycle[]
    ){}
}