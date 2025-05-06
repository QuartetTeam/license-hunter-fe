import { ICertDetailList, ICertList, ICertSearchList, IRecommendedList } from './dataTypes.ts';

const certList: ICertList = {
  code: 200,
  message: '요청이 처리되었습니다.',
  data: {
    content: [
      {
        id: 575,
        mainCategory: '경매·중개',
        subCategory: '유통·물류',
        name: '경매사(수산)',
        applicationDate: '2025-05-19T09:00:00Z',
        examDate: '2025-06-21T09:00:00Z',
        calendarSubscription: 0,
      },
      {
        id: 576,
        mainCategory: '경매·중개',
        subCategory: '유통·물류',
        name: '경매사(약용)',
        applicationDate: '',
        examDate: '',
        calendarSubscription: 0,
      },
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 2,
      sort: {
        empty: false,
        sorted: true,
        unsorted: false,
      },
      offset: 0,
      paged: true,
      unpaged: false,
    },
    last: false,
    totalPages: 3,
    totalElements: 6,
    first: true,
    size: 2,
    number: 0,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    numberOfElements: 2,
    empty: false,
  },
};

const certSearchList: ICertSearchList = {
  code: 200,
  message: '요청이 처리되었습니다.',
  data: {
    content: [
      {
        id: 2,
        mainCategory: '기계',
        subCategory: '기계장비설비.설치',
        name: '건설기계기술사',
        applicationDate: '2025-07-14T10:00:00Z',
        examDate: '2025-04-19T09:00:00Z',
        calendarSubscription: 0,
      },
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 2,
      sort: {
        empty: false,
        sorted: true,
        unsorted: false,
      },
      offset: 0,
      paged: true,
      unpaged: false,
    },
    last: false,
    totalPages: 3,
    totalElements: 6,
    first: true,
    size: 2,
    number: 0,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    numberOfElements: 2,
    empty: false,
  },
};

const certDetailList: ICertDetailList = {
  code: 200,
  message: '요청이 처리되었습니다.',
  data: {
    id: 1,
    name: '가스기술사',
    authorityName: '한국산업인력공단',
    authorityIconImageUrl: null,
    applicationUrl: null,
    description:
      '고압가스 및 도시가스의 제조, 저장, 운반, 사용에 관한 설비의 설계, 감리, 안전관리 등을 수행할 수 있는 최고 수준의 기술자격입니다. 가스 관련 법령에 따른 기술 검토 및 안전진단 업무도 수행할 수 있습니다.',
    viewCount: 0,
    CalendarSubscription: 0,
    qualification: [
      {
        type: '동일 및 유사 직무분야',
        data: [
          '기사 취득 후 실무경력 4년',
          '산업기사 취득 후 실무경력 5년',
          '기능사 취득 후 실무경력 7년',
          '실무경력 9년 등',
          '동일 및 유사 직무분야의 다른 종목 기술사 등급 취득자\n',
        ],
      },
      {
        type: '관련학과',
        data: ['4년제 대졸(관련학과)후 실무경력 6년'],
      },
    ],
    examDetails: [
      {
        examType: '필기',
        examSubject: '데베',
        examProcess: {
          problemType: '객관식 4지 택일형',
          problemNums: '60개',
          examTime: '60분',
        },
      },
      {
        examType: '필기',
        examSubject: '네트워크',
        examProcess: {
          problemType: '객관식 4지 택일형',
          problemNums: '20개',
          examTime: '30분',
        },
      },
    ],
    schedules: [
      {
        scheduleType: '접수일',
        examType: '필기',
        examRound: '2025년도 135회',
        date: ['2025-01-06T10:00:00Z', '2025-01-09T18:00:00Z'],
      },
      {
        scheduleType: '시험일',
        examType: '필기',
        examRound: '2025년도 135회',
        date: ['2025-02-08T09:00:00Z', '2025-02-08T09:00:00Z'],
      },
      {
        scheduleType: '합격일',
        examType: '필기',
        examRound: '2025년도 135회',
        date: ['2025-03-12T09:00:00Z'],
      },
      {
        scheduleType: '접수일',
        examType: '실기',
        examRound: '2025년도 135회',
        date: ['2025-03-17T10:00:00Z', '2025-03-21T18:00:00Z'],
      },
      {
        scheduleType: '시험일',
        examType: '실기',
        examRound: '2025년도 135회',
        date: ['2025-04-19T09:00:00Z', '2025-05-02T09:00:00Z'],
      },
      {
        scheduleType: '합격일',
        examType: '실기',
        examRound: '2025년도 135회',
        date: ['2025-05-09T09:00:00Z'],
      },
    ],
  },
};

const recommendedList: IRecommendedList = {
  code: 200,
  message: '요청이 처리되었습니다.',
  data: [
    {
      id: 369,
      mainCategory: '건설',
      subCategory: '건설기계운전',
      name: '굴착기운전기능사',
      applicationDate: '2025-04-17T10:00:00Z',
      examDate: '2025-04-11T09:00:00Z',
      calendarSubscription: 0,
    },
    {
      id: 377,
      mainCategory: '건설',
      subCategory: '건설기계운전',
      name: '기중기운전기능사',
      applicationDate: '2025-04-21T10:00:00Z',
      examDate: '2025-05-31T09:00:00Z',
      calendarSubscription: 0,
    },
    {
      id: 385,
      mainCategory: '건설',
      subCategory: '건설기계운전',
      name: '로더운전기능사',
      applicationDate: '2025-04-21T10:00:00Z',
      examDate: '2025-05-31T09:00:00Z',
      calendarSubscription: 0,
    },
    {
      id: 386,
      mainCategory: '건설',
      subCategory: '건설기계운전',
      name: '롤러운전기능사',
      applicationDate: '2025-04-21T10:00:00Z',
      examDate: '2025-05-31T09:00:00Z',
      calendarSubscription: 0,
    },
    {
      id: 388,
      mainCategory: '건설',
      subCategory: '건설기계운전',
      name: '모터그레이더운전기능사',
      applicationDate: '',
      examDate: '',
      calendarSubscription: 0,
    },
    {
      id: 406,
      mainCategory: '건설',
      subCategory: '건설기계운전',
      name: '불도저운전기능사',
      applicationDate: '2025-04-21T10:00:00Z',
      examDate: '2025-05-31T09:00:00Z',
      calendarSubscription: 0,
    },
  ],
};

export { certList, certSearchList, certDetailList, recommendedList };
