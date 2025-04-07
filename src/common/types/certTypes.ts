export interface ICertDetailChildTypes {
    type: string;
    data: string [];
}

export interface IExamDetailTypes {
    type: string,
    examSubject: ICertDetailChildTypes
    examProcess: {
        type: string,
        examTime: ICertDetailChildTypes,
        examType: ICertDetailChildTypes,
        examNum: ICertDetailChildTypes
    }
}

export interface ICertDetailListDataTypes {
    id: number,
    name: string,
    authorityName: string,
    description: string,
    examSchedule: ICertDetailChildTypes []
    examDetail: IExamDetailTypes [],
    qualification: ICertDetailChildTypes [];
}

export interface ICertDetailList {
    'code': number,
    'message': string,
    'data': ICertDetailListDataTypes
}