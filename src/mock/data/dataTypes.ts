// 메일링 API
interface IMailingContent {
    mailingId: number
    name: string,
    receiptDate: string,
    examDate: string,
    CalendarSubscriptionCount: number
}

interface IMailingData {
    content: IMailingContent[],
    page: number,
    pageSize: number,
    totalElements: number,
    totalPages: number,
    first: boolean,
    last: boolean,
    empty: boolean
}

interface IMailingList {
    code: number,
    message: string,
    data: IMailingData
}

interface IAddMailing {
    code: number,
    message: string
}

// 캘린더 API
interface ISchedules {
    scheduleType: string,
    examType: string,
    examRound: string,
    date: string[]
}

interface ICalendarData {
    certificationId: number,
    calendarId: number,
    certificationName: string,
    schedules: ISchedules[]
}

interface ICalendarList {
    code: number,
    message: string,
    data: ICalendarData []
}

interface IAddCalendar {
    code: number,
    message: string
}

// 사용자 API

// 자격증 API
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

// 카테고리 API


export type { IMailingList, IAddMailing, IAddCalendar, ICertDetailList, ICalendarList };