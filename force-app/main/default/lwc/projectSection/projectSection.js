import { LightningElement } from 'lwc';
import Image_Url from "@salesforce/resourceUrl/experienceCloudImage";
export default class ProjectSection extends LightningElement {
    projectImage = Image_Url + '/Image/Project1.png';

    projectData = [{
        id: 1,
        name: 'Live Cricket',
        description: "Built a dynamic full-stack development project on live cricket which provides an interactive user interface featuring real-time scoreboards, player statistics, and match commentary is guaranteed by a React- developed responsive front-end.",
        technology: 'HTML, CSS, Js, React Js, Firebase, API',
        website : 'https://github.com/mendapararitik/Live_Cricket'
    }, {
        id: 2,
        name: 'SearchIT',
        description: "The advanced semantic technology allows precise and accurate search results for specific objects, faces or scenes within videos. The tool saves valuable time and effort in locating desired segments of lengthy videos. Its user- friendly interface and intuitive features make it accessible to both technical and non- technical users.",
        technology: 'HTML, CSS, Python, API',
        website : 'https://github.com/mendapararitik/SearchIT'
    }, {
        id: 3,
        name: 'Portfolio ',
        description: "Portfolio website built in Salesforce LWR Experience site using custom LWC with mobile responsiveness.",
        technology: 'Salesforce, LWC, Apex, Experience Cloud',
        website : 'https://www.google.com/'
    }
    ]
}