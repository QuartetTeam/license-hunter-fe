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

const certQueryKey = {
    get: 'getCertData',
    getDetail: 'getCertDetailData',
    getRecommend: 'getCertRecommendData',
    getCategory: 'getCertCategoryData'
};

export { mailingQueryKey, calendarQueryKey, certQueryKey };