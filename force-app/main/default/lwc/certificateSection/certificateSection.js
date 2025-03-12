import { LightningElement } from 'lwc';
import Image_Url from "@salesforce/resourceUrl/experienceCloudImage";
export default class CertificateSection extends LightningElement {
    certificateData = [
        {
            id : 1,
            name : 'Salesforce AI Associate',
            image : Image_Url + '/Image/AiAssociate.png'
        },
        {
            id : 2,
            name : 'Salesforce Agentforce Specialist',
            image : Image_Url + '/Image/AgentforceSpecialist.png'
        },
        {
            id : 3,
            name : 'Microsoft Azure AI Fundamentals',
            image : Image_Url + '/Image/AzureAIFundamentals.png'
        },
        {
            id : 4,
            name : 'Microsoft Azure Fundamentals',
            image : Image_Url + '/Image/AzureFundamentals.png'
        },
        {
            id : 5,
            name : 'Microsoft Power Platform Fundamentals',
            image : Image_Url + '/Image/PowerPlatformFundamentals.png'
        },
    ]
}