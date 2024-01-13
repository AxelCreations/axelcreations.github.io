enum SkillLevel {
  Beginner,
  Advanced,
  Experienced,
  Expert
}

type SkillCategory = {
  category: string;
}

type SkillModel = {
  icon: string;
  title: string;
  level: SkillLevel;
  category: SkillCategory;
}

export default SkillModel;
