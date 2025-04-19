import ArrowDown from '@icon/icon-arrow-down.svg?react';
import { useCertService } from '@feature/Certification/useCertService.ts';
import { IExamSchedule } from '@type/cert.ts';
import '../../style/certSchedule.scss';

const CertSchedule = ({ cert, data }: { cert?: string; data?: IExamSchedule[] }) => {
  const { formatDate } = useCertService();

  return (
    <div className="cert-detail-box">
      <div className="cert-title">
        <ArrowDown className="cert-title__icon" />
        시험일정
      </div>
      <div className="cert-subtitle">{cert} 시험일정</div>
      <table className="schedule-table">
        <thead>
          <tr>
            {data?.map((item, index) => (
              <th key={index} className="schedule-table-header">
                {item?.scheduleType}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data?.map((item, index) => (
              <td key={index} className="schedule-table-body">
                {formatDate(item?.date)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CertSchedule;
