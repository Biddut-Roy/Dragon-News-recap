import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=' text-center w-full '>
           <img src={logo} alt="logo" className=' mx-auto' /> 
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D , YYYY")}</p>

        </div>
    );
};

export default Header;