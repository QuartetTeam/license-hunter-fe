export interface ISchedules {
    scheduleType: string,
    date: string[]
}

export interface ICalendarData {
    certificationId: number,
    calendarId: number,
    certificationName: string,
    schedules: ISchedules[]
}

export interface ICalendarList {
    code: number,
    message: string,
    data: ICalendarData []
}