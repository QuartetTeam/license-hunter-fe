import {
    IChangeEmail,
    IChangeInterest,
    IChangeMailingStatus,
    IChangeNick,
    IUserList
} from './dataTypes.ts';

const userList: IUserList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'email': 'email@naver.com',
        'nickname': '닉네임',
        'profileImageUrl': 'https://ssl.pstatic.net/static/pwe/address/img_profile.png',
        'interests': [
            '경매·중개',
            '교육·연구·학문',
            '기계'
        ],
        'status': 'ACTIVE'
    }
};

const changeNick: IChangeNick = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'nickname': '변경된닉네임'
    }
};

const changeEmail: IChangeEmail = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'email': 'new@email.com'
    }
};

const changeInterest: IChangeInterest = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'categoryNames': [
            '경매·중개',
            '교육·연구·학문',
            '문화재·전통기술'
        ]
    }
};

const changeMailingStatus: IChangeMailingStatus = {
    'code': 200,
    'message': '요청에 성공하였습니다.',
    'data': {
        'status': 'ACTIVE'  // 또는 "PAUSED"
    }
};

export { userList, changeNick, changeEmail, changeInterest, changeMailingStatus };