export interface ICategoryDataTypes {
  id: number;
  name: string;
}

export interface ICategoryTypes {
  code: number;
  message: string;
  data: ICategoryDataTypes[];
}
