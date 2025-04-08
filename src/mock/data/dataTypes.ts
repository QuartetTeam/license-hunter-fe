interface ICertDetailChildTypes {
    type: string;
    data: string [];
}

interface IExamDetailTypes {
    type: string,
    examSubject: ICertDetailChildTypes
    examProcess: {
        type: string,
        examTime: ICertDetailChildTypes,
        examType: ICertDetailChildTypes,
        examNum: ICertDetailChildTypes
    }
}

interface ICertDetailListDataTypes {
    id: number,
    name: string,
    authorityName: string,
    description: string,
    examSchedule: ICertDetailChildTypes []
    examDetail: (ICertDetailChildTypes | IExamDetailTypes) [],
    qualification: ICertDetailChildTypes [];
}

interface ICertDetailList {
    'code': number,
    'message': string,
    'data': ICertDetailListDataTypes
}

export type { ICertDetailList };