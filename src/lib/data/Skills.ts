import SkillModel, { SkillLevel } from '../models/SkillModel';

import accessIcon from '../../img/skills/access.webp';
import awsIcon from '../../img/skills/aws.webp';
import azureIcon from '../../img/skills/azure.webp';
import batchIcon from '../../img/skills/batch.webp';
import blazorIcon from '../../img/skills/blazor.svg';
import bootstrapIcon from '../../img/skills/bootstrap.webp';
import csharpIcon from '../../img/skills/csharp.webp';
import cssIcon from '../../img/skills/css.webp';
import dotnetIcon from '../../img/skills/dotnet.webp';
import efIcon from '../../img/skills/ef.webp';
import excelIcon from '../../img/skills/excel.webp';
import gitIcon from '../../img/skills/git.webp';
import githubIcon from '../../img/skills/github.webp';
import gitlabIcon from '../../img/skills/gitlab.webp';
import htmlIcon from '../../img/skills/html.webp';
import jqueryIcon from '../../img/skills/jquery.webp';
import jsIcon from '../../img/skills/js.webp';
import laravelIcon from '../../img/skills/laravel.webp';
import linuxIcon from '../../img/skills/linux.webp';
import mvcIcon from '../../img/skills/mvc.webp';
import mysqlIcon from '../../img/skills/mysql.webp';
import nextIcon from '../../img/skills/next.svg';
import nodeIcon from '../../img/skills/node.webp';
import notionIcon from '../../img/skills/notion.webp';
import phpIcon from '../../img/skills/php.webp';
import pptIcon from '../../img/skills/ppt.webp';
import projectIcon from '../../img/skills/project.webp';
import psIcon from '../../img/skills/ps.webp';
import pythonIcon from '../../img/skills/python.webp';
import reactIcon from '../../img/skills/react.webp';
import sassIcon from '../../img/skills/sass.webp';
import sqlIcon from '../../img/skills/sql.webp';
import sqlServerIcon from '../../img/skills/sqlserver.svg';
import tsIcon from '../../img/skills/ts.webp';
import vbaIcon from '../../img/skills/vba.webp';
import visioIcon from '../../img/skills/visio.svg';
import winServerIcon from '../../img/skills/winserver.webp';
import wordIcon from '../../img/skills/word.webp';
import wpIcon from '../../img/skills/wp.webp';

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
        icon: jqueryIcon,
        title: 'jQuery',
        level: SkillLevel.Expert
      },
      {
        icon: bootstrapIcon,
        title: 'Bootstrap',
        level: SkillLevel.Expert
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
        level: SkillLevel.Experienced
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
