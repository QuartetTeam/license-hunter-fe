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
            <th className="schedule-table-header">구분</th>
            <th className="schedule-table-header">접수일(필기)</th>
            <th className="schedule-table-header">시험일(필기)</th>
            <th className="schedule-table-header">합격일(필기)</th>
            <th className="schedule-table-header">접수일(실기)</th>
            <th className="schedule-table-header">시험일(실기)</th>
            <th className="schedule-table-header">합격일(실기)</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="schedule-table-body">{item?.examRound}</td>
              {item?.scheduleDetails?.map((detailItem, detailIndex) => (
                <td key={`detail-${index}-${detailIndex}`} className="schedule-table-body">
                  {formatDate(detailItem?.dates)}
                </td>
              ))}
              {Array.from({ length: 6 - (item?.scheduleDetails?.length ?? 0) }).map(
                (_, emptyIndex) => (
                  <td key={`empty-${index}-${emptyIndex}`} className="schedule-table-body">
                    -
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertSchedule;
