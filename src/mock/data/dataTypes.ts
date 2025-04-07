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

const certDetailList: ICertDetailList = {
    'code': 200,
    'message': '요청이 처리되었습니다.',
    'data': {
        'id': 1,
        'name': '화학분석기사',
        'authorityName': '산업인력공단',
        'description': '화학분석기사는 화학 분석 지식 및 기술 전문 인력 양성을 위해 제정된 제도이다. 자격증 취득 후 분석, 개발, 논문 및 보고서 등을 수행할 수 있다.',
        'examSchedule': [
            {
                'type': '시험일정명',
                'data': ['화학분석기사 2회차']
            },
            {
                'type': '접수일',
                'data': ['2025-03-04T00:00:00Z', '2025-03-16T00:00:00Z']
            },
            {
                'type': '시험일',
                'data': ['2025-04-20T00:00:00Z']
            },
            {
                'type': '합격자 발표일',
                'data': ['2025-05-10T00:00:00Z']
            }
        ],
        'examDetail': [
            {
                'type': '필기시험',
                'examSubject': {
                    type: '시험과목',
                    data: ['화학의 이해와 원리안전관리', '분석계획수립과 분석절차기초', '화학물질 특성분석', '화학물질 구조 및 물성분석']
                },
                'examProcess': {
                    type: '시험방법',
                    'examTime': {
                        'type': '문제형식',
                        'data': ['객관식 4지 택일형']
                    },
                    'examType': {
                        'type': '문항수',
                        'data': ['80문항']
                    },
                    'examNum': {
                        'type': '시험시간',
                        'data': ['2시간']
                    }
                }
            },
            {
                'type': '실기시험',
                'examSubject': {
                    type: '시험과목',
                    data: ['화학분석 실무']
                },
                'examProcess': {
                    type: '시험방법',
                    'examTime': {
                        'type': '시험시간',
                        'data': ['복합형']
                    },
                    'examType': {
                        'type': '문제형식',
                        'data': ['']
                    },
                    'examNum': {
                        'type': '문제수',
                        'data': ['6시간 한도(필기 2시간, 작업 4시간 정도)']
                    }
                }
            }
        ],
        'qualification': [
            {
                'type': '유사자격 소지자',
                'data': [
                    '1. 산업기사 + 유사 직무분야 실무경력 1년',
                    '2. 기능사 + 유사 직무분야 실무경력 3년',
                    '3. 동일 및 유사 분야 기사 자격증 소지자',
                    '4. 동일 및 유사 분야 외국자격 소지자'
                ]
            },
            {
                'type': '관련학과 졸업자',
                'data': [
                    '1. 관련학과 졸업자 또는 졸업예정자',
                    '2. 3년제 전문대학 졸업자 + 실무경력 1년',
                    '3. 2년제 전문대학 졸업자 + 실무경력 2년',
                    '4. 기사 수준의 기술훈련과정 이수자',
                    '5. 산업기사 수준의 기술훈련과정 이수자 + 실무경력 2년'
                ]
            },
            {
                'type': '실무 경력자',
                'data': [
                    '유사 직무분야 실무경력 4년 이상'
                ]
            }
        ]
    }
};

interface ICertDetailList {
    'code': number,
    'message': string,
    'data': ICertDetailListDataTypes
}

export type { ICertDetailList };