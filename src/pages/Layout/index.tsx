import { Outlet } from  'react-router-dom';
import { SMain } from './style';
import { ComponentHeader } from '../../components';

export const Layout = () => {
    return (
        <>
            <ComponentHeader />
            <SMain>
                <Outlet />
            </SMain>
        </>
    )
}
