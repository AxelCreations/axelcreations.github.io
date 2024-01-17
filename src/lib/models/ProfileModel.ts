type ProfileGoals = {
  title: string | null;
  descriptions: string[];
}

type ProfileModel = {
  icon: string;
  title: string;
  goals: ProfileGoals[];
}

export default ProfileModel;