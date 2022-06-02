import {Link} from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='notfound' style={{textAlign:'center' , color: 'black' , padding:'100px'}}>
            <div className='container'>
                <h2>Sorry</h2>
                <p>This Page Not Found</p>
                <Link to='/'>Back to Home Page</Link>
            </div>
        </div>
    )
}

export default Notfound;