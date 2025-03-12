import { LightningElement } from 'lwc';
import Image_Url from "@salesforce/resourceUrl/experienceCloudImage";
export default class Hero extends LightningElement {
    heroImage = Image_Url + '/Image/Hero1.png';
}