import { LightningElement } from 'lwc';
import Image_Url from "@salesforce/resourceUrl/experienceCloudImage";
import { NavigationMixin } from 'lightning/navigation';
export default class QuickLinks extends NavigationMixin(LightningElement) {
    data = [
        {
            id: 1,
            image: Image_Url + '/Image/Project3.png',
            text: 'Projects'
        },
        {
            id: 2,
            image: Image_Url + '/Image/Skill4.png',
            text: 'Skills'
        },
        {
            id: 3,
            image: Image_Url + '/Image/Certificate1.png',
            text: 'Certificates'
        }
    ];
    handleClick(event) {
        let selectedCard = event.currentTarget.dataset.id;
        console.log('selectedCard: ' + JSON.stringify(selectedCard));

        if (selectedCard == 1) {
            this.navigateToPages('project__c');
        }
        else if (selectedCard == 2) {
            this.navigateToPages('skill__c');
        }
        else {
            this.navigateToPages('certification__c');
        }
    }
    navigateToPages(pageApiName) {
        console.log('PageApiName in navigation function:' + JSON.stringify(pageApiName))

        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: pageApiName,
            },
        })
    }
}