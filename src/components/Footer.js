import Logo from './Logo';
import {FaFacebookF} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Logo/>
                <div className='links'>
                    <ul>
                    <li>شركتنا</li>
                    <li>تواصل معنا</li>
                    <li>وظائفنا</li>
                    </ul>
                    <ul>
                    <li>اخبار كونتكت</li>
                    <li>عروض كونتكت</li>
                    <li>برامج المكافأت</li>
                    <li>منتجاتنا</li>
                    </ul>
                </div>
                <div className='social-download'>
                    <div className='social'>
                        <span>تابعنا على مواقع التواصل الاجتماعى</span>
                        <i><FaFacebookF/></i>
                        <i><FaTwitter/></i>
                        <i><FaYoutube/></i>
                    </div>
                    <div className='download'>
                        <span>حمل تطبيق كونتكت</span>
                        <img src='/images/googlePlay.PNG'/>
                        <img src='/images/appStore.PNG'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
