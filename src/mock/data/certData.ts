const certList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'content': [
            {
                'id': 1,
                'name': '정보처리기사',
                'applicationDate': null,
                'examDate': '2025-02-25T00:00:00Z',
                'CalendarSubscriptionCount': 0
            },
            {
                'id': 2,
                'name': '네트워크관리사',
                'applicationDate': null,
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

const certDetailList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'id': 1,
        'name': '정보처리기사',
        'authorityName': '산업인력공단',
        'authorityIconImageUrl': null,
        'applicationUrl': 'https://www.q-net.or.kr/man001.do?gSite=Q&gIntro=Y',
        'description': '정보통신 활용 기술을 평가합니다',
        'qualification': '4년제 학사',
        'scheduleSet': [
            {
                'scheduleType': 'EXAM_DATE',
                'examType': 'WRITTEN',
                'date': '2025-03-25T00:00:00Z'
            },
            {
                'scheduleType': 'APPLICATION_DATE',
                'examType': 'PRACTICAL',
                'date': '2025-02-25T00:00:00Z'
            },
            {
                'scheduleType': 'APPLICATION_DATE',
                'examType': 'WRITTEN',
                'date': '2025-07-01T00:00:00Z'
            }
        ],
        'examDetailSet': [
            {
                'examType': 'WRITTEN',
                'subject': '데이터베이스',
                'problemType': 'MULTIPLE_CHOICE',
                'totalProblems': 30,
                'timeLimit': 30
            },
            {
                'examType': 'WRITTEN',
                'subject': '프로그래밍 언어',
                'problemType': 'MULTIPLE_CHOICE',
                'totalProblems': 30,
                'timeLimit': 30
            },
            {
                'examType': 'PRACTICAL',
                'subject': '프로그래밍 활용',
                'problemType': 'LONG_ANSWER',
                'totalProblems': 20,
                'timeLimit': 60
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
            'examDate': '2025-03-25T00:00:00Z',
            'CalendarSubscriptionCount': 0
        },
        {
            'id': 2,
            'name': '네트워크관리사',
            'applicationDate': null,
            'examDate': '2025-06-01T00:00:00Z',
            'CalendarSubscriptionCount': 0
        }
    ]
};

export { certList, certDetailList, recommendedList };