import ContactModel from '../models/ContactModel';

import linkedInIcon from '../../img/contacts/linkedin.svg';
import gitHubIcon from '../../img/contacts/github.svg';
import gmailIcon from '../../img/contacts/gmail.svg';
import xIcon from '../../img/contacts/x.svg';

export const ContactsData: ContactModel[] = [
  {
    icon: linkedInIcon,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/reynelaxel/',
  },
  {
    icon: gitHubIcon,
    text: 'GitHub',
    link: 'https://github.com/AxelCreations/',
  },
  {
    icon: gmailIcon,
    text: 'Gmail',
    link: 'mailto:reynelaxel@gmil.com?subject%3DLet%27s%20work%20together',
  },
  {
    icon: xIcon,
    text: '(X) Twitter',
    link: 'https://twitter.com/ReynelAxel/',
  },
];
