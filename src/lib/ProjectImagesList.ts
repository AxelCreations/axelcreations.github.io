interface GetProjectImageListProps {
  projectName: string;
  count: number;
}

export const GetProjectImageList = ({ projectName, count }: GetProjectImageListProps): string[] => {
  const result: string[] = [];

  for (let i = 1; i <= count; i++) {
    const image = require(`../img/work/${projectName}/${projectName}${i}.webp`);
    
    result.push(image);
  }

  return result;
}