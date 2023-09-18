export class TransactionDetails{

    constructor(
        public transactionid:number,
        public timestamp:Date,
        public purchaseInformation:string,
        public amount:number,
        public status?:boolean){
    }
}