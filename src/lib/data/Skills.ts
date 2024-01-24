import SkillModel, { SkillLevel } from '../models/SkillModel';

import csharpIcon from '../../img/skills/csharp.webp';
import phpIcon from '../../img/skills/csharp.webp';
import vbaIcon from '../../img/skills/vba.webp';
import tsIcon from '../../img/skills/csharp.webp';
import sassIcon from '../../img/skills/csharp.webp';
import pythonIcon from '../../img/skills/python.webp';
import nodeIcon from '../../img/skills/node.webp';
import sqlIcon from '../../img/skills/sql.webp';
import htmlIcon from '../../img/skills/html.webp';
import cssIcon from '../../img/skills/css.webp';
import jsIcon from '../../img/skills/js.webp';
import dotnetIcon from '../../img/skills/csharp.webp';
import efIcon from '../../img/skills/csharp.webp';
import mvcIcon from '../../img/skills/csharp.webp';
import blazorIcon from '../../img/skills/csharp.webp';
import wpIcon from '../../img/skills/csharp.webp';
import laravelIcon from '../../img/skills/csharp.webp';
import reactIcon from '../../img/skills/csharp.webp';
import nextIcon from '../../img/skills/csharp.webp';
import sqlServerIcon from '../../img/skills/csharp.webp';
import mysqlIcon from '../../img/skills/csharp.webp';
import gitIcon from '../../img/skills/csharp.webp';
import githubIcon from '../../img/skills/csharp.webp';
import gitlabIcon from '../../img/skills/csharp.webp';
import jqueryIcon from '../../img/skills/csharp.webp';
import bootstrapIcon from '../../img/skills/csharp.webp';
import excelIcon from '../../img/skills/csharp.webp';
import accessIcon from '../../img/skills/csharp.webp';
import wordIcon from '../../img/skills/csharp.webp';
import pptIcon from '../../img/skills/csharp.webp';
import projectIcon from '../../img/skills/csharp.webp';
import visioIcon from '../../img/skills/csharp.webp';
import notionIcon from '../../img/skills/csharp.webp';
import psIcon from '../../img/skills/csharp.webp';
import batchIcon from '../../img/skills/csharp.webp';
import azureIcon from '../../img/skills/csharp.webp';
import awsIcon from '../../img/skills/csharp.webp';
import winServerIcon from '../../img/skills/csharp.webp';
import linuxIcon from '../../img/skills/csharp.webp';

type SkillDataProps = {
  category: string;
  skills: SkillModel[];
}

const SkillsData: SkillDataProps[] = [
  {
    category: 'Software Development',
    skills: [
      {
        icon: csharpIcon,
        title: 'C#',
        level: SkillLevel.Expert
      },
      {
        icon: phpIcon,
        title: 'PHP',
        level: SkillLevel.Expert
      },
      {
        icon: vbaIcon,
        title: 'VBA',
        level: SkillLevel.Expert
      },
      {
        icon: tsIcon,
        title: 'TypeScript',
        level: SkillLevel.Experienced
      },
      {
        icon: sassIcon,
        title: 'SASS',
        level: SkillLevel.Expert
      },
      {
        icon: pythonIcon,
        title: 'Python',
        level: SkillLevel.Advanced
      },
      {
        icon: nodeIcon,
        title: 'NodeJS',
        level: SkillLevel.Advanced
      },
      {
        icon: sqlIcon,
        title: 'SQL',
        level: SkillLevel.Experienced
      },
      {
        icon: htmlIcon,
        title: 'HTML5',
        level: SkillLevel.Expert
      },
      {
        icon: cssIcon,
        title: 'CSS3',
        level: SkillLevel.Expert
      },
      {
        icon: jsIcon,
        title: 'JavaScript',
        level: SkillLevel.Expert
      },
    ]
  },
  {
    category: 'Frameworks, Libraries & Dev Tools',
    skills: [
      {
        icon: dotnetIcon,
        title: 'dotnet',
        level: SkillLevel.Expert
      },
      {
        icon: efIcon,
        title: 'Entity Framework',
        level: SkillLevel.Expert
      },
      {
        icon: mvcIcon,
        title: 'MVC',
        level: SkillLevel.Expert
      },
      {
        icon: blazorIcon,
        title: 'Blazor',
        level: SkillLevel.Expert
      },
      {
        icon: wpIcon,
        title: 'WordPress',
        level: SkillLevel.Expert
      },
      {
        icon: laravelIcon,
        title: 'Laravel',
        level: SkillLevel.Advanced
      },
      {
        icon: reactIcon,
        title: 'ReactJS',
        level: SkillLevel.Advanced
      },
      {
        icon: nextIcon,
        title: 'NextJS',
        level: SkillLevel.Advanced
      },
      {
        icon: sqlServerIcon,
        title: 'SQL Server',
        level: SkillLevel.Experienced
      },
      {
        icon: mysqlIcon,
        title: 'MySQL',
        level: SkillLevel.Experienced
      },
      {
        icon: gitIcon,
        title: 'Git',
        level: SkillLevel.Experienced
      },
      {
        icon: githubIcon,
        title: 'GitHub',
        level: SkillLevel.Experienced
      },
      {
        icon: gitlabIcon,
        title: 'GitLab',
        level: SkillLevel.Experienced
      },
      {
        icon: jqueryIcon,
        title: 'jQuery',
        level: SkillLevel.Expert
      },
      {
        icon: bootstrapIcon,
        title: 'Bootstrap',
        level: SkillLevel.Expert
      },
    ]
  },
  {
    category: 'Office Automation',
    skills: [
      {
        icon: excelIcon,
        title: 'Excel',
        level: SkillLevel.Expert
      },
      {
        icon: accessIcon,
        title: 'Access',
        level: SkillLevel.Expert
      },
      {
        icon: wordIcon,
        title: 'Word',
        level: SkillLevel.Experienced
      },
      {
        icon: pptIcon,
        title: 'PowerPoint',
        level: SkillLevel.Experienced
      },
      {
        icon: projectIcon,
        title: 'Project',
        level: SkillLevel.Beginner
      },
      {
        icon: visioIcon,
        title: 'Visio',
        level: SkillLevel.Beginner
      },
      {
        icon: notionIcon,
        title: 'Notion',
        level: SkillLevel.Advanced
      },
    ]
  },
  {
    category: 'Scripting',
    skills: [
      {
        icon: psIcon,
        title: 'PowerShell',
        level: SkillLevel.Experienced
      },
      {
        icon: batchIcon,
        title: 'Batch',
        level: SkillLevel.Advanced
      },
    ]
  },
  {
    category: 'Infrastructure',
    skills: [
      {
        icon: azureIcon,
        title: 'Azure',
        level: SkillLevel.Beginner
      },
      {
        icon: awsIcon,
        title: 'AWS',
        level: SkillLevel.Beginner
      },
      {
        icon: winServerIcon,
        title: 'Windows Server',
        level: SkillLevel.Experienced
      },
      {
        icon: linuxIcon,
        title: 'Linux (Ubuntu CLI)',
        level: SkillLevel.Beginner
      },
    ]
  },
];

export default SkillsData;
