import ArrowDown from '@icon/icon-arrow-down.svg?react';
import { IQualification } from '../../../../common/types/certTypes.ts';
import '@styles/pages/CertificateDetail/certQualifications.scss';

const CertQualifications = ({ cert, data }: {
    cert: string,
    data: IQualification []
}) => {
    return (
        <div className="cert-detail-box">
            <div className="cert-title">
                <ArrowDown className="cert-title__icon"/>응시자격
            </div>
            <div className="cert-subtitle">{cert} 응시자격</div>
            <table className="qual-table">
                <tbody>
                {data.map((item, index) => (
                    item.data.map((dataItem, dataIndex) => (
                        <tr key={index}>
                            {dataIndex === 0 && (
                                <td className="qual-table-header"
                                    rowSpan={item?.data?.length}>{item?.type}
                                </td>)}
                            <td className={dataIndex === 0 ? 'qual-table-body-first' : 'qual-table-body'}>{dataItem}</td>
                        </tr>
                    ))
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CertQualifications;