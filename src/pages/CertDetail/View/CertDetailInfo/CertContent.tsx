import ArrowDown from '@icon/icon-arrow-down.svg?react';
import { IExamDetail } from '../../../../common/types/certTypes.ts';
import '@styles/pages/CertificateDetail/certContent.scss';

const CertContent = ({ cert, data }: { cert?: string; data?: IExamDetail[] }) => {
  return (
    <div className="cert-detail-box">
      <div className="cert-title">
        <ArrowDown className="cert-title__icon" />
        시험내용
      </div>
      <div className="cert-subtitle">{cert} 시험내용</div>
      <table className="content-table">
        <thead>
          <tr>
            <th className="content-table-header" rowSpan={2}>
              구분
            </th>
            <th className="content-table-header" rowSpan={2}>
              시험과목
            </th>
            <th className="content-table-header" colSpan={3}>
              시험방법
            </th>
          </tr>
          <tr>
            <th className="content-table-header">시험시간</th>
            <th className="content-table-header">문제형식</th>
            <th className="content-table-header">문제수</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="content-table-body">{item.examType}</td>
              <td className="content-table-body">{item.examSubject}</td>
              <td className="content-table-body">{item.examProcess.problemType}</td>
              <td className="content-table-body">{item.examProcess.problemNums || '-'}</td>
              <td className="content-table-body">{item.examProcess.examTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertContent;
