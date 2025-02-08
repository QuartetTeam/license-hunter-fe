import '@styles/layout/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="title">quartet</div>
                <div className="header-button-group">
                    <button className="login">로그인</button>
                </div>
            </div>
        </div>
    );
};

export default Header;