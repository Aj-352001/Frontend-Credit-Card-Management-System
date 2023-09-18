import { DatePipe } from "@angular/common";

export class Application{
    constructor(
    public applicationId?:number,
	public name?:string,
	public panNumber?:string,
	public aadharNumber?:string,
	public dateOfBirth?:Date,
	public income?:number,
	public status?:string
    ){}
}