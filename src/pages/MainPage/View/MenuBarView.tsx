import '@styles/pages/MainPage/menuBarView.scss';
import FieldButton from '../../components/FieldButton.tsx';

const MenuBarView = () => {
    return (
        <div className="menuBar-view">
            <div className="menuBar">
                <div className="menu-button">
                    <div className="menu-button__first">
                        <FieldButton fieldName="경영·회계·사무"/>
                        <FieldButton fieldName="전기·전자"/>
                        <FieldButton fieldName="금융·보험"/>
                        <FieldButton fieldName="법률·경찰·소방·교도·국방"/>
                        <FieldButton fieldName="보건·의료"/>
                    </div>
                    <div className="menu-button__second">
                        <FieldButton fieldName="사회복지·종교"/>
                        <FieldButton fieldName="문화·예술·디자인·방송"/>
                        <FieldButton fieldName="화학·바이오"/>
                        <FieldButton fieldName="영업판매"/>
                        <FieldButton fieldName="건설"/>
                        <FieldButton fieldName="기계"/>
                    </div>
                </div>
                <div className="more-menu-button">더보기</div>
            </div>

        </div>
    );
};

export default MenuBarView;