export enum SkillLevel {
  Beginner = 1,
  Advanced = 2,
  Experienced = 3,
  Expert = 4
}

type SkillModel = {
  icon: string;
  title: string;
  level: SkillLevel;
}

export default SkillModel;
