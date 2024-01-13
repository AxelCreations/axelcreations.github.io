import SkillModel from './SkillModel';

type ProjectModel = {
  title: string;
  description: string;
  images: string[];
  skills: SkillModel[] | null;
}

export default ProjectModel;
