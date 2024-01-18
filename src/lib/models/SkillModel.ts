export enum SkillLevel {
  Beginner,
  Advanced,
  Experienced,
  Expert
}

type SkillModel = {
  icon: string;
  title: string;
  level: SkillLevel;
}

export default SkillModel;
