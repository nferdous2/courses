
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <div className='sticky-top'>
            <Header></Header>
            </div>
            <Outlet></Outlet>
            <div>
            <Footer></Footer>
            </div>
        </div >
    );
};

export default Main;