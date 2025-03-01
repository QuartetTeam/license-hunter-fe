import '@styles/pages/MainPage/menuBarView.scss';
import ManagementIcon from '@icon/icon-management.svg?react';
import ElectricityLogo from '@icon/icon-electricity.svg?react';
import CashLogo from '@icon/icon-cash.svg?react';
import PoliceLogo from '@icon/icon-police.svg?react';
import DoctorLogo from '@icon/icon-doctor.svg?react';
import SocialWelfareLogo from '@icon/icon-social-welfare.svg?react';
import ArtDesignLogo from '@icon/icon-art-design.svg?react';
import ChemBioLogo from '@icon/icon-chem-bio.svg?react';
import BusinessSalesLogo from '@icon/icon-business-sales.svg?react';
import ContructionLogo from '@icon/icon-construction.svg?react';
import MachineLogo from '@icon/icon-machine.svg?react';

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
                            <ElectricityLogo/>
                            <div className="menu-button-group__text">전기·전자</div>
                        </button>
                        <button className="menu-button-group">
                            <CashLogo/>
                            <div className="menu-button-group__text">금융·보험</div>
                        </button>
                        <button className="menu-button-group">
                            <PoliceLogo/>
                            <div className="menu-button-group__text">법률·경찰·소방·교도·국방</div>
                        </button>
                        <button className="menu-button-group">
                            <DoctorLogo/>
                            <div className="menu-button-group__text">보건·의료</div>
                        </button>
                    </div>
                    <div className="menu-button__second">
                        <button className="menu-button-group">
                            <SocialWelfareLogo/>
                            <div className="menu-button-group__text">사회복지·종교</div>
                        </button>
                        <button className="menu-button-group">
                            <ArtDesignLogo/>
                            <div className="menu-button-group__text">문화·예술·디자인·방송</div>
                        </button>
                        <button className="menu-button-group">
                            <ChemBioLogo/>
                            <div className="menu-button-group__text">화학·바이오</div>
                        </button>
                        <button className="menu-button-group">
                            <BusinessSalesLogo/>
                            <div className="menu-button-group__text">영업판매</div>
                        </button>
                        <button className="menu-button-group">
                            <ContructionLogo/>
                            <div className="menu-button-group__text">건설</div>
                        </button>
                        <button className="menu-button-group">
                            <MachineLogo/>
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