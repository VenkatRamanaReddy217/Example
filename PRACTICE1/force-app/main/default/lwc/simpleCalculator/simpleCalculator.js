import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
 @track no1;
 @track no2;
 @track result;
 HandleChange(event){
    const currentinputname=event.target.name;
    const currentval=event.target.value;
    
    if(currentinputname==='Number1'){
        this.no1=currentval;
    }else{
        this.no2=currentval;
    }
 }
 doAdd(){
     this.result=parseInt(this.no1)+parseInt(this.no2);
 }
}