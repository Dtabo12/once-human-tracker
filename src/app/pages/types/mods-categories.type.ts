export type ModCategories = {
  id: number,
  name: string;
  completed: boolean;
  subCategories?: ModCategories[];
}