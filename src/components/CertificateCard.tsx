import CheckboxChecked from '@icon/icon-checkbox-check.svg?react';
import CheckboxEmpty from '@icon/icon-checkbox-empty.svg?react';
import { useCertService } from '../features/Certification/useCertService.ts';
import mailingStore from '@store/mailing/mailingStore';
import { ICertData } from '@type/cert.ts';
import { IMailingContent } from '@type/mailing.ts';
import './style/certificateCard.scss';

const CertificateCard = ({
  data,
  trashIconSelected = false,
  // requiredCalender = false
}: {
  data?: ICertData[] | IMailingContent[];
  trashIconSelected?: boolean;
}) => {
  const { checkArr, setCheckArr } = mailingStore();
  const { formatDate, moveToCertDetailById } = useCertService();

  const handleCheckArr = (mailingsId: number) => {
    if (checkArr.includes(mailingsId)) {
      setCheckArr(checkArr.filter((item) => item !== mailingsId));
    } else {
      setCheckArr([...checkArr, mailingsId]);
    }
  };
  return (
    <>
      {data?.map((item, index) => (
        <div key={index} className="certificate-info">
          {trashIconSelected && (
            <div className="certificate-info-checkbox">
              {checkArr.includes(item.id) ? (
                <CheckboxChecked onClick={() => handleCheckArr(item.id)} />
              ) : (
                <CheckboxEmpty onClick={() => handleCheckArr(item.id)} />
              )}
            </div>
          )}
          <div className="certificate-info-box" onClick={() => moveToCertDetailById(item?.id)}>
            <div className="certificate-info-box__image"></div>
            <div className="certificate-info-box__text">
              <div className="certificate-info-box__text__name">{item?.name}</div>
              <div className="certificate-info-box__text__date">
                <div className="certificate-info-box__text__date-receipt">
                  접수일 | {formatDate(item?.applicationDate)}
                </div>
                <div className="certificate-info-box__text__date-test">
                  시험일 | {formatDate(item?.examDate)}
                </div>
              </div>
            </div>
            {/*추후 캘린더 기능 추가 예정*/}
            {/*{requiredCalender && (*/}
            {/*    <div className="certificate-info-calender">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none"*/}
            {/*             viewBox="0 0 24 24"*/}
            {/*             strokeWidth={1.5}*/}
            {/*             stroke="currentColor"*/}
            {/*             className="certificate-info-calender__icon">*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
            {/*                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>*/}
            {/*        </svg>*/}
            {/*        <div className="certificate-info-calender__count">*/}
            {/*            {item?.CalendarSubscriptionCount}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
          </div>
        </div>
      ))}
    </>
  );
};

export default CertificateCard;
