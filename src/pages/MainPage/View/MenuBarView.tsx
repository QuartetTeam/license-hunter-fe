import '@styles/pages/MainPage/menuBarView.scss';

const MenuBarView = () => {
    return (
        <div className="menuBar">
            <div className="menu-button-group">
                <div className="menu-button-group1">
                    <button className="menu-button">플레이스홀더1</button>
                    <button className="menu-button">플레이스홀더2</button>
                    <button className="menu-button">플레이스홀더3</button>
                    <button className="menu-button">플레이스홀더4</button>
                </div>
                <div className="menu-button-group2">
                    <button className="menu-button">플레이스홀더1</button>
                    <button className="menu-button">플레이스홀더2</button>
                    <button className="menu-button">플레이스홀더3</button>
                    <button className="menu-button">플레이스홀더4</button>
                    <button className="menu-button">플레이스홀더5</button>
                </div>
            </div>
        </div>
    );
};

export default MenuBarView;