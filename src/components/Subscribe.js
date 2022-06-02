import { useState } from "react";

const Subscribe = () => {
    const [email,setEmail] = useState('');
    function handleSubscribeSubmit (e) {
        e.preventDefault();
        setEmail('');
    }
    return (
        <div className="subscribe">
            <div className="container">
                <div className="text">
                    <div className="section-title">
                        <h2 >اشترك الان</h2>
                    </div>
                    <p>فى خدمة البريد الإلكترونى</p>
                </div>
                <form onSubmit={handleSubscribeSubmit}>
                    <input 
                        type='email'
                        value={email}
                        placeholder="ادخل البريد الإلكترونى"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                        />
                    <button>ارسل</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe;