import { LightningElement,api } from 'lwc';
import { ShowToastEvent  } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
export default class QuickActions extends LightningElement {
    @api recordId;
    @api objectApiName;
    handlesSuccess(e) {
        this.dispatchEvent(new CloseActionScreenEvent());
        this.dispatchEvent(
            new ShowToastEvent({
            title:'Success',
            message:'Record updated!',
            variant:'success'
            })
        );
    }
}