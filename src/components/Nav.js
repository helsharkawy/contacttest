import {FaAngleDown} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="main-nav">
            <li className='active'><Link to='/'>الرئيسية</Link></li>
            <li><FaAngleDown/>
                شركتنا    
            </li>
            <li><FaAngleDown/>
                منتجاتنا
            </li>
            <li><FaAngleDown/>
                برامجنا
            </li>
            <li><FaAngleDown/>
                عروضنا
            </li>
            <li>علاقات المستثمرين</li>
            <li>وظائفنا</li>
            
        </ul>
    )
}

export default Nav;