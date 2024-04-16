import './Style/Footer.css'

function Footer() {

    return(
        <div className="column">
            <div className="row">
                <div className="col-sm-6">
                        <div className="card-body cus">
                            <h1 className="card-title">Born To Battle Competition</h1>
                            <p className="card-text">Royal College Union Office, Rajakeeya Mawatha,</p>
                            <p className="card-text">Colombo</p>
                            <p className="card-text">Contact : +94 771794692</p>
                    </div>
                </div>
                <div className="col-sm-6 cus">
                        <div className="card-body">
                            <h1 className="card-title">Links & Social Media Platforms</h1>
                            <p className="card-text">IDS - Born To Battle Competition</p>
                            <p className="card-text">Invisible Dance Studio - IDS</p>
                            <p className="card-text">idsborntobattle@gmail.com</p>
                    </div>
                </div>
                
            </div>  
            <div className="bottom_foot">
                <hr />
                <p className="card-text">Copyright © 2024 Born To Battle. All Rights Reserved. | Privacy policy</p>
            </div>

        </div>
        
    )
}

export default Footer;
