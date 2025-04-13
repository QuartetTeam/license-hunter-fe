import { ICategory } from './dataTypes.ts';

const categoryParentList: ICategory = {
  code: 200,
  message: '요청이 처리되었습니다.',
  data: [
    {
      id: 2,
      name: '경매·중개',
      type: 'MAIN',
    },
    {
      id: 4,
      name: '교육·연구·학문',
      type: 'MAIN',
    },
    {
      id: 5,
      name: '기계',
      type: 'MAIN',
    },
    {
      id: 8,
      name: '보건·의료',
      type: 'MAIN',
    },
    {
      id: 9,
      name: '복지·종교',
      type: 'MAIN',
    },
    {
      id: 10,
      name: '비즈니스·사무',
      type: 'MAIN',
    },
    {
      id: 12,
      name: '서비스·여행·레저',
      type: 'MAIN',
    },
    {
      id: 13,
      name: '섬유.패션',
      type: 'MAIN',
    },
    {
      id: 14,
      name: '식품',
      type: 'MAIN',
    },
    {
      id: 16,
      name: '예술·디자인·미디어',
      type: 'MAIN',
    },
    {
      id: 20,
      name: '전기.전자',
      type: 'MAIN',
    },
    {
      id: 23,
      name: 'IT',
      type: 'MAIN',
    },
  ],
};

const categoryChildList: ICategory = {
  code: 200,
  message: '요청이 처리되었습니다.',
  data: [
    {
      id: 12,
      name: '금형.공작기계',
      type: 'SUB',
    },
    {
      id: 13,
      name: '기계장비설비.설치',
      type: 'SUB',
    },
    {
      id: 14,
      name: '기계제작',
      type: 'SUB',
    },
    {
      id: 15,
      name: '자동차',
      type: 'SUB',
    },
    {
      id: 16,
      name: '조선',
      type: 'SUB',
    },
    {
      id: 17,
      name: '철도',
      type: 'SUB',
    },
    {
      id: 18,
      name: '항공',
      type: 'SUB',
    },
    {
      id: 19,
      name: '스마트팩토리·설비자동화',
      type: 'SUB',
    },
  ],
};

export { categoryParentList, categoryChildList };
