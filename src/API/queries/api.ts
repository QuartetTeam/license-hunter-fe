import axios from 'axios';
import ICalendarResponseType from '../queriesTypes.ts';
import endpoints from '../endpoints.ts';

const { BASE_URL, CALENDAR } = endpoints;

const getCalenderData = async () => {
    const response: ICalendarResponseType = await axios.get(`${BASE_URL}/${CALENDAR}`);
    return response.data;
};

export default getCalenderData;