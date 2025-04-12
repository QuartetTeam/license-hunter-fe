export interface ICategoryDataTypes {
    id: string,
    name: string
}

export interface ICategoryTypes {
    code: number,
    message: string,
    data: ICategoryDataTypes[]
}