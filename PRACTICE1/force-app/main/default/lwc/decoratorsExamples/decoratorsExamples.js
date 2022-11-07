import { LightningElement,track,api } from 'lwc';

export default class DecoratorsExamples extends LightningElement {

    @track Trackparam = "Trackvalue";
    @api apiparam = "apivalue";
    NonReactiveparam = "NonReactivevalue";

    handleparamValues(){
        this.Trackparam = "value changed from trackparam";
        this.apiparam = "value changed from apiparam";
        this.NonReactiveparam = "value changed from nonReactiveparam";
    }

}