import SkillModel from './SkillModel';

type ProjectModel = {
  title: string;
  company: string;
  description: string;
  date: string;
  link: string | null;
  repo: string | null;
  images: string[];
  skills: SkillModel[] | null;
}

export default ProjectModel;
