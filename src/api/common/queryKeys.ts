const authQueryKey = {
    postMvToAuth: 'postMvToAuth',
    postLogin: 'postLogin',
    postRefresh: 'postRefresh',
    postLogout: 'postLogout'
};

const certQueryKey = {
    get: 'getCertData',
    getDetail: 'getCertDetailData',
    getRecommend: 'getCertRecommendData',
    getCategory: 'getCertCategoryData'
};

const mailingQueryKey = {
    get: 'getMailingData',
    post: 'postMailingData',
    delete: 'deleteMailingData'
};

const calendarQueryKey = {
    get: 'getCalendarData',
    post: 'postCalendarData',
    delete: 'deleteCalendarData'
};


export { authQueryKey, mailingQueryKey, calendarQueryKey, certQueryKey };