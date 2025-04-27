const authQueryKey = {
  postLogin: 'postLogin',
  postRefresh: 'postRefresh',
  postLogout: 'postLogout',
};

const certQueryKey = {
  get: 'getCertData',
  search: 'searchCertData',
  getDetail: 'getCertDetailData',
  getRecommend: 'getCertRecommendData',
};

const categoryQueryKey = {
  getCategory: 'getCertCategoryData',
  getChildCategory: 'getChildCategory',
};

const mailingQueryKey = {
  get: 'getMailingData',
  post: 'postMailingData',
  delete: 'deleteMailingData',
  getStatus: 'getMailingStatus',
  patchStatus: 'patchMailingStatus',
};

const calendarQueryKey = {
  get: 'getCalendarData',
  post: 'postCalendarData',
  delete: 'deleteCalendarData',
};

const userQueryKey = {
  get: 'getUserData',
  patchNick: 'changeNickname',
  patchEmail: 'changeEmail',
  patchInterest: 'changeInterest',
  patchMailing: 'changeMailing',
  delete: 'deleteUserData',
};

export {
  authQueryKey,
  certQueryKey,
  categoryQueryKey,
  mailingQueryKey,
  calendarQueryKey,
  userQueryKey,
};
