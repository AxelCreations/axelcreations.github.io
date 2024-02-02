import ExperienceModel from '../models/ExperienceModel';

import createIcon from '../../img/experience/createape.webp';
import bcrdIcon from '../../img/experience/bcrd.webp';
import scotiabankIcon from '../../img/experience/scotiabank.webp';
import progresoIcon from '../../img/experience/progreso.webp';

const ExperienceData: ExperienceModel[] = [
  {
    icon: createIcon,
    company: 'CreateApe',
    title: 'Senior Web Developer',
    description: 'Creating awesome and fancy websites using WordPress. My main task is to create custom themes from Figma designs and develop advance functionalities such as API integrations, custom Widgets, Plugins and AJAX interactions using PHP, JS and highly creativity.',
    excerpt: 'Creating awesome and fancy websites using WordPress. My main task is to create custom themes from Figma designs and develop...',
    initialDate: 'Apr 2022',
    endDate: 'Nov 2023',
    skills: [],
  },
  {
    icon: bcrdIcon,
    company: 'Central Bank of the Dominican Republic',
    title: 'Software Developer',
    description: 'Assist request and incidents of the Oracle PeopleSoft platform users and create solutions using the PeopleCode programming language. Also creating end user’s solutions with dotnet, Blazor and Azure.',
    excerpt: 'Assist request and incidents of the Oracle PeopleSoft platform users and create solutions using the PeopleCode...',
    initialDate: 'Dec 2021',
    endDate: 'Sep 2022',
    skills: [],
  },
  {
    icon: bcrdIcon,
    company: 'Central Bank of the Dominican Republic',
    title: 'HelpDesk Specialist',
    description: 'First line support and single point of contact between users and the IT department. In this position I was able to develop software solutions to many of the daily work tasks using Excel + VBA and Access + VBA.',
    excerpt: 'First line support and single point of contact between users and the IT department. In this position I was able to develop...',
    initialDate: 'May 2019',
    endDate: 'Dec 2021',
    skills: [],
  },
  {
    icon: scotiabankIcon,
    company: 'ScotiaBank',
    title: 'QA Analyst',
    description: 'When it acquired Banco Dominicano del Progreso. Testing the Internet Banking Mobile App and Web services. Ensuring the quality of the changes made at the request of the bank\'s authorities.',
    excerpt: 'When it acquired Banco Dominicano del Progreso. Testing the Internet Banking Mobile App and Web services. Ensuring...',
    initialDate: 'Jan 2019',
    endDate: 'May 2019',
    skills: [],
  },
  {
    icon: progresoIcon,
    company: 'Banco del Progreso',
    title: 'QA Analyst',
    description: 'Responsible for the quality assurance of the software. Performing testing of Core Banking applications consisting of web services...',
    excerpt: 'Responsible for the quality assurance of the software. Performing testing of Core Banking applications consisting of web services...',
    initialDate: 'Nov 2017',
    endDate: 'Jan 2019',
    skills: [],
  },
];

export default ExperienceData;