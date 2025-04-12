import { IAddMailing, IMailingList } from './dataTypes.ts';

const mailingList: IMailingList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'content': [
            {
                'id': 575,
                'mainCategory': '경매·중개',
                'subCategory': '유통·물류',
                'name': '경매사(수산)',
                'applicationDate': '2025-05-19T09:00:00Z',
                'examDate': '2025-06-21T09:00:00Z',
                'calendarSubscription': 0
            },
            {
                'id': 576,
                'mainCategory': '경매·중개',
                'subCategory': '유통·물류',
                'name': '경매사(약용)',
                'applicationDate': '2025-05-19T09:00:00Z',
                'examDate': '2025-06-21T09:00:00Z',
                'calendarSubscription': 0
            }
        ],
        'page': 0,
        'pageSize': 4,
        'totalElements': 5,
        'totalPages': 2,
        'first': true,
        'last': false,
        'empty': false
    }
};

const addMailing: IAddMailing = {
    'code': 201,
    'message': '리소스가 생성되었습니다.'
};

export { mailingList, addMailing };