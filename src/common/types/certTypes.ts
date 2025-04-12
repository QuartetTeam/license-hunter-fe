// 자격증 조회 API
export interface ICertData {
    id: number,
    mainCategory: string,
    subCategory: string,
    name: string,
    applicationDate: string,
    examDate: string,
    calendarSubscription: number
}

interface ICertPageable {
    pageNumber: number,
    pageSize: number,
    sort: ICertListSort,
    offset: number,
    paged: boolean,
    unpaged: boolean
}

interface ICertListSort {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
}

interface ICertListData {
    content: ICertData[],
    pageable: ICertPageable,
    last: boolean,
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    sort: ICertListSort,
    numberOfElements: number,
    first: boolean,
    empty: boolean
}

interface ICertSearchList {
    code: number,
    message: string,
    data: ICertData[]
}

interface ICertList {
    code: number,
    message: string,
    data: ICertListData
}

interface IQualification {
    type: string,
    data: string []
}

interface IExamProcess {
    problemType: string,
    problemNums: string,
    examTime: string
}

interface IExamDetail {
    examType: string,
    examSubject: string,
    examProcess: IExamProcess
}

interface IExamSchedule {
    scheduleType: string,
    examType: string,
    examRound: string,
    date: string[]
}

interface ICertDetailListDataTypes {
    id: number,
    name: string,
    authorityName: string,
    authorityIconImageUrl: string | null,
    applicationUrl: string | null,
    description: string,
    viewCount: number,
    CalendarSubscription: number,
    qualification: IQualification [],
    examDetails: IExamDetail [],
    schedules: IExamSchedule []
}

interface ICertDetailList {
    'code': number,
    'message': string,
    'data': ICertDetailListDataTypes
}

interface IRecommendedList {
    code: number,
    message: string,
    data: ICertData[];
}

// 자격증 상세 조회 API
export interface IQualification {
    type: string,
    data: string []
}

interface IExamProcess {
    problemType: string,
    problemNums: string,
    examTime: string
}

export interface IExamDetail {
    examType: string,
    examSubject: string,
    examProcess: IExamProcess
}

export interface IExamSchedule {
    scheduleType: string,
    examType: string,
    examRound: string,
    date: string[]
}

export interface ICertDetailListDataTypes {
    id: number,
    name: string,
    authorityName: string,
    authorityIconImageUrl: string,
    applicationUrl: string,
    description: string,
    viewCount: number | null,
    CalendarSubscription: number,
    qualification: IQualification [],
    examDetails: IExamDetail [],
    schedules: IExamSchedule []
}

export interface ICertDetailList {
    'code': number,
    'message': string,
    'data': ICertDetailListDataTypes
}