import '@styles/pages/MainPage/menuBarView.scss';
import ManagementIcon from '@icon/Field/icon-management.svg?react';
import ElectricityIcon from '@icon/Field/icon-electricity.svg?react';
import CashIcon from '@icon/Field/icon-cash.svg?react';
import PoliceIcon from '@icon/Field/icon-police.svg?react';
import DoctorIcon from '@icon/Field/icon-doctor.svg?react';
import SocialWelfareIcon from '@icon/Field/icon-social-welfare.svg?react';
import ArtDesignIcon from '@icon/Field/icon-art-design.svg?react';
import ChemBioIcon from '@icon/Field/icon-chem-bio.svg?react';
import BusinessSalesIcon from '@icon/Field/icon-business-sales.svg?react';
import ConstructionIcon from '@icon/Field/icon-construction.svg?react';
import MachineIcon from '@icon/Field/icon-machine.svg?react';

const MenuBarView = () => {
    return (
        <div className="menuBar-view">
            <div className="menuBar">
                <div className="menu-button">
                    <div className="menu-button__first">
                        <button className="menu-button-group">
                            <ManagementIcon/>
                            <div className="menu-button-group__text">경영·회계·사무</div>
                        </button>
                        <button className="menu-button-group">
                            <ElectricityIcon/>
                            <div className="menu-button-group__text">전기·전자</div>
                        </button>
                        <button className="menu-button-group">
                            <CashIcon/>
                            <div className="menu-button-group__text">금융·보험</div>
                        </button>
                        <button className="menu-button-group">
                            <PoliceIcon/>
                            <div className="menu-button-group__text">법률·경찰·소방·교도·국방</div>
                        </button>
                        <button className="menu-button-group">
                            <DoctorIcon/>
                            <div className="menu-button-group__text">보건·의료</div>
                        </button>
                    </div>
                    <div className="menu-button__second">
                        <button className="menu-button-group">
                            <SocialWelfareIcon/>
                            <div className="menu-button-group__text">사회복지·종교</div>
                        </button>
                        <button className="menu-button-group">
                            <ArtDesignIcon/>
                            <div className="menu-button-group__text">문화·예술·디자인·방송</div>
                        </button>
                        <button className="menu-button-group">
                            <ChemBioIcon/>
                            <div className="menu-button-group__text">화학·바이오</div>
                        </button>
                        <button className="menu-button-group">
                            <BusinessSalesIcon/>
                            <div className="menu-button-group__text">영업판매</div>
                        </button>
                        <button className="menu-button-group">
                            <ConstructionIcon/>
                            <div className="menu-button-group__text">건설</div>
                        </button>
                        <button className="menu-button-group">
                            <MachineIcon/>
                            <div className="menu-button-group__text">기계</div>
                        </button>
                    </div>
                </div>
                <div className="more-menu-button">더보기</div>
            </div>

        </div>
    );
};

export default MenuBarView;