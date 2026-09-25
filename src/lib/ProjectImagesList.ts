interface GetProjectImageListProps {
  projectName: string;
  count: number;
}

const projectImages = import.meta.glob('../img/work/*/*.webp', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>;

export const GetProjectImageList = ({ projectName, count }: GetProjectImageListProps): string[] => {
  const result: string[] = [];

  for (let i = 1; i <= count; i++) {
    const imagePath = `../img/work/${projectName}/${projectName}${i}.webp`;
    const image = projectImages[imagePath];

    if (image) {
      result.push(image);
    }
  }

  return result;
}