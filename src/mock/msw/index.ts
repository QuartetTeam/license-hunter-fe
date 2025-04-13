import calendarHandlers from './calendar.ts';
import categoryHandlers from './category.ts';
import certHandlers from './certification.ts';
import mailingHandlers from './mailing.ts';
import userHandlers from './user.ts';

const handlers = [
  ...calendarHandlers,
  ...categoryHandlers,
  ...certHandlers,
  ...mailingHandlers,
  ...userHandlers,
];

export default handlers;
