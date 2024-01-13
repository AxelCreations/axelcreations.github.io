type ProfileGoals = {
  title: string;
  description: string;
}

type ProfileModel = {
  icon: string;
  title: string;
  goals: ProfileGoals[];
}

export default ProfileModel;