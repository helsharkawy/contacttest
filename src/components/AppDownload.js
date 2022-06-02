const AppDownload = () => {
    return (
        <div className="app-download">
            <div className="container">
                <div className="text-links">
                    <div className="section-title">
                        <h2>حمل تطبيق كونتكت الأن</h2>
                    </div>
                    <div className="links">
                        <div className="google">
                            <a href="https://play.google.com/store/apps"><img src="/images/googlePlay.PNG" alt="Google Play"/></a>
                        </div>
                        <div className="apple">
                            <a href="https://www.apple.com/store"><img src="/images/appStore.PNG" alt="Apple Store"/></a>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src="/images/mobile.png" alt='Mobile'/>
                </div>

            </div>
        </div>
    )
}

export default AppDownload;