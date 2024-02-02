import SkillModel from './models/SkillModel';
import SkillsData from './data/Skills';

interface GetSkillListByNameProps {
  names: string[];
}

export const GetSkillListByName = ({ names }: GetSkillListByNameProps): SkillModel[] => {

  const skillList = SkillsData.reduce<SkillModel[]>((acc, item) => {
    item.skills.forEach(skill => {

      const isIncluded = names.some(name => {
        return name.toLowerCase() === skill.title.toLowerCase();
      });

      if (isIncluded) {
        acc.push(skill);
      }
    });

    return acc;
  }, [] as SkillModel[]);

  return skillList;
}
