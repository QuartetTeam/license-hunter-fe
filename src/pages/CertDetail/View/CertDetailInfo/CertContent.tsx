import ArrowDown from '@icon/icon-arrow-down.svg?react';
import '@styles/pages/CertificateDetail/certContent.scss';
import { IExamDetailTypes } from '../../../../common/types/certTypes.ts';

const CertContent = ({ cert, data }: {
    cert: string,
    data: IExamDetailTypes []
}) => {
    return (
        <div className="cert-detail-box">
            <div className="cert-title">
                <ArrowDown className="cert-title__icon"/>시험내용
            </div>
            <div className="cert-subtitle">{cert} 시험내용</div>
            <table className="content-table">
                <thead>
                <tr>
                    {/*{data.map((item, index) => (*/}
                    <th className="content-table-header" rowSpan={2}>구분</th>
                    <th className="content-table-header" rowSpan={2}>시험과목</th>
                    <th className="content-table-header" colSpan={3}>시험방법</th>
                </tr>
                <tr>
                    <th className="content-table-header">시험시간</th>
                    <th className="content-table-header">문제형식</th>
                    <th className="content-table-header">문제수</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) =>
                    item.examSubject.data.length === 1 ? (
                            <tr key={index}>
                                <td className="content-table-body">{item.type}</td>
                                <td className="content-table-body">{item.examSubject.data[0]}</td>
                                <td className="content-table-body">{item.examProcess.examTime.data[0]}</td>
                                <td className="content-table-body">{item.examProcess.examType.data[0] || '-'}</td>
                                <td className="content-table-body">{item.examProcess.examNum.data[0]}</td>
                            </tr>
                        ) :
                        (
                            <>
                                <td className="content-table-body"
                                    rowSpan={item.examSubject.data.length}>{item.type}</td>
                                <td className="content-table-body">{item.examSubject.data[0]}</td>
                                <td className="content-table-body"
                                    rowSpan={item.examSubject.data.length}>{item.examProcess.examTime.data}</td>
                                <td className="content-table-body"
                                    rowSpan={item.examSubject.data.length}>{item.examProcess.examType.data}</td>
                                <td className="content-table-body"
                                    rowSpan={item.examSubject.data.length}>{item.examProcess.examNum.data}</td>

                                {item.examSubject.data.slice(1).map((dataItem, dataIndex) => (
                                    <tr key={dataIndex}>
                                        <td
                                            className="content-table-body">{dataItem}</td>
                                    </tr>
                                ))}

                            </>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default CertContent;