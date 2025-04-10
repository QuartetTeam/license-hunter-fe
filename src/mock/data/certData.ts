import { ICertDetailList } from './dataTypes.ts';

const certList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'content': [
            {
                'id': 1,
                'name': '정보처리기사',
                'receiptDate': '2025-01-20T00:00:00Z',
                'examDate': '2025-02-25T00:00:00Z',
                'CalendarSubscriptionCount': 0
            },
            {
                'id': 2,
                'name': '네트워크관리사',
                'receiptDate': '2025-05-13T00:00:00Z',
                'examDate': '2025-06-01T00:00:00Z',
                'CalendarSubscriptionCount': 0
            }
        ],
        'pageable': {
            'pageNumber': 0,
            'pageSize': 15,
            'sort': {
                'empty': false,
                'sorted': true,
                'unsorted': false
            },
            'offset': 0,
            'unpaged': false,
            'paged': true
        },
        'last': true,
        'totalElements': 2,
        'totalPages': 1,
        'size': 15,
        'number': 0,
        'sort': {
            'empty': false,
            'sorted': true,
            'unsorted': false
        },
        'numberOfElements': 2,
        'first': true,
        'empty': false
    }
};

const certDetailList: ICertDetailList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'id': 1,
        'name': '가스기술사',
        'authorityName': '한국산업인력공단',
        'authorityIconImageUrl': null,
        'applicationUrl': null,
        'description': '고압가스 및 도시가스의 제조, 저장, 운반, 사용에 관한 설비의 설계, 감리, 안전관리 등을 수행할 수 있는 최고 수준의 기술자격입니다. 가스 관련 법령에 따른 기술 검토 및 안전진단 업무도 수행할 수 있습니다.',
        'viewCount': 0,
        'CalendarSubscription': 0,
        'qualification': [
            {
                'type': '동일 및 유사 직무분야',
                'data': [
                    '기사 취득 후 실무경력 4년',
                    '산업기사 취득 후 실무경력 5년',
                    '기능사 취득 후 실무경력 7년',
                    '실무경력 9년 등',
                    '동일 및 유사 직무분야의 다른 종목 기술사 등급 취득자\n'
                ]
            },
            {
                'type': '관련학과',
                'data': [
                    '4년제 대졸(관련학과)후 실무경력 6년'
                ]
            }
        ],
        'examDetails': [
            {
                'examType': '필기',
                'examSubject': '데베',
                'examProcess': {
                    'problemType': '객관식 4지 택일형',
                    'problemNums': '60개',
                    'examTime': '60분'
                }
            },
            {
                'examType': '필기',
                'examSubject': '네트워크',
                'examProcess': {
                    'problemType': '객관식 4지 택일형',
                    'problemNums': '20개',
                    'examTime': '30분'
                }
            }
        ],
        'schedules': [
            {
                'scheduleType': '접수일',
                'examType': '필기',
                'examRound': '2025년도 135회',
                'date': [
                    '2025-01-06T10:00:00Z',
                    '2025-01-09T18:00:00Z'
                ]
            },
            {
                'scheduleType': '시험일',
                'examType': '필기',
                'examRound': '2025년도 135회',
                'date': [
                    '2025-02-08T09:00:00Z',
                    '2025-02-08T09:00:00Z'
                ]
            },
            {
                'scheduleType': '합격일',
                'examType': '필기',
                'examRound': '2025년도 135회',
                'date': [
                    '2025-03-12T09:00:00Z'
                ]
            },
            {
                'scheduleType': '접수일',
                'examType': '실기',
                'examRound': '2025년도 135회',
                'date': [
                    '2025-03-17T10:00:00Z',
                    '2025-03-21T18:00:00Z'
                ]
            },
            {
                'scheduleType': '시험일',
                'examType': '실기',
                'examRound': '2025년도 135회',
                'date': [
                    '2025-04-19T09:00:00Z',
                    '2025-05-02T09:00:00Z'
                ]
            },
            {
                'scheduleType': '합격일',
                'examType': '실기',
                'examRound': '2025년도 135회',
                'date': [
                    '2025-05-09T09:00:00Z'
                ]
            }
        ]
    }
};

const recommendedList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': [
        {
            'id': 1,
            'name': '정보처리기사',
            'applicationDate': null,
            'receiptDate': '2025-01-20T00:00:00Z',
            'examDate': '2025-02-25T00:00:00Z',
            'CalendarSubscriptionCount': 0
        },
        {
            'id': 2,
            'name': '네트워크관리사',
            'applicationDate': null,
            'receiptDate': '2025-05-13T00:00:00Z',
            'examDate': '2025-06-01T00:00:00Z',
            'CalendarSubscriptionCount': 0
        }
    ]
};

export { certList, certDetailList, recommendedList };