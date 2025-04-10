import { IAddCalendar, ICalendarList } from './dataTypes.ts';

const calendarList: ICalendarList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': [
        {
            'certificationId': 1,
            'calendarId': 1,
            'certificationName': '정보처리기사',
            'schedules': [
                {
                    'scheduleType': '접수일',
                    'examType': '필기',
                    'examRound': '1회 1차',
                    'date': ['2025-03-19T09:00:00Z', '2025-03-28T09:00:00Z']
                },
                {
                    'scheduleType': '시험일',
                    'examType': '필기',
                    'examRound': '2회 2차',
                    'date': ['2025-04-01T09:00:00Z']
                },
                {
                    'scheduleType': '합격자 발표일',
                    'examType': '실기',
                    'examRound': '3회 3차',
                    'date': ['2025-04-09T14:00:00Z']
                }
            ]
        }
    ]
};

const addCalendar: IAddCalendar = {
    'code': 201,
    'message': '리소스가 생성되었습니다.'
};

export { calendarList, addCalendar };