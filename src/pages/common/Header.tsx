import '@styles/layout/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="title">Header</div>
                <button className="logout">LOGOUT</button>
            </div>
        </div>
    );
};

export default Header;