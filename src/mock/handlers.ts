import { setupWorker } from 'msw/browser';
import handlers from './msw';

const worker = setupWorker(...handlers);
export default worker;
