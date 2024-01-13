import SkillModel from './SkillModel';

type ExperienceModel = {
  icon: string;
  company: string;
  title: string;
  description: string;
  excerpt: string;
  initialDate: string;
  endDate: string;
  skills: SkillModel[] | null;
}

export default ExperienceModel;