import Header from "../Components/Header/Header";
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div className=" md:w-10/12 mx-auto space-y-10">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;