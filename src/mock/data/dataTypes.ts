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

// 카테고리 API
interface ICategoryData {
    id: number,
    name: string,
    type: string
}

interface ICategory {
    code: number,
    message: string,
    data: ICategoryData[],
}

// 자격증 API
interface ICertData {
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

interface ICertList {
    code: number,
    message: string,
    data: ICertListData
}

interface ICertSearchList {
    code: number,
    message: string,
    data: ICertData[]
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
    viewCount: number | null,
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

// 메일링 API
interface IMailingContent {
    id: number,
    mainCategory: string,
    subCategory: string,
    name: string,
    applicationDate: string,
    examDate: string,
    calendarSubscription: number
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

// 사용자 API
interface IUserData {
    email: string,
    nickname: string,
    profileImageUrl: string,
    interests: string [],
    status: string
}

interface IUserList {
    code: number,
    message: string,
    data: IUserData
}

interface IChangeNickData {
    nickname: string,
}

interface IChangeNick {
    code: number,
    message: string,
    data: IChangeNickData
}

interface IChangeEmailData {
    email: string,
}

interface IChangeEmail {
    code: number,
    message: string,
    data: IChangeEmailData
}

interface IChangeInterestData {
    categoryNames: string[];
}

interface IChangeInterest {
    code: number,
    message: string,
    data: IChangeInterestData
}

interface IChangeMailingData {
    status: string;
}

interface IChangeMailingStatus {
    code: number,
    message: string,
    data: IChangeMailingData
}

export type {
    ICalendarList,
    IAddCalendar,
    ICategory,
    ICertList,
    ICertSearchList,
    ICertDetailList,
    IRecommendedList,
    IMailingList,
    IAddMailing,
    IUserList,
    IChangeNick,
    IChangeEmail,
    IChangeInterest,
    IChangeMailingStatus
};