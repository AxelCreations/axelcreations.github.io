import ProfileModel from '../models/ProfileModel';

import educationIcon from '../../img/profile/education.svg';
import languageIcon from '../../img/profile/language.svg';
import skillsIcon from '../../img/profile/list.svg';

const ProfileData: ProfileModel[] = [
  {
    icon: educationIcon,
    title: 'Education',
    goals: [
      {
        title: 'Universidad Del Caribe',
        descriptions: ['Degree in Computer Science']
      },
      {
        title: 'Politecnico Maximo Gomez',
        descriptions: ['Technician-Professional in Computer Science']
      },
    ],
  },
  {
    icon: languageIcon,
    title: 'Languages',
    goals: [
      {
        title: 'English',
        descriptions: [
          '<b>Level</b>: B2 - Upper Intermediate',
          'According to CEFR',
        ]
      },
      {
        title: 'Spanish',
        descriptions: ['<b>Level</b>: Native']
      },
    ],
  },
  {
    icon: skillsIcon,
    title: 'Soft Skills',
    goals: [
      {
        title: null,
        descriptions: [
          'Teamwork',
          'Leadership',
          'Supervisory Capacity',
          'Problems Analysis and Solving',
          'Work under pressure or stress',
          'Punctuality and Responsibility',
          'Proactivity',
        ]
      }
    ],
  },
];

export default ProfileData;
