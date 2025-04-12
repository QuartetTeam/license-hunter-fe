import { useCookies } from 'react-cookie';

const useHandleCookies = () => {
    const [cookies, setCookie, removeCookie] = useCookies();

    const saveCookie = (name: string, item: string) => {
        setCookie(name, item, {
            secure: true,
            sameSite: 'strict',
            httpOnly: false
        });
    };

    const deleteCookie = (name: string) => {
        removeCookie(name, {
            secure: true,
            sameSite: 'strict',
            httpOnly: false
        });
    };

    return {
        cookies,
        saveCookie,
        deleteCookie
    };
};

export default useHandleCookies;