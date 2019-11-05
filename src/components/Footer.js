import React from 'react';

// This component creates the bar at the bottom of the page. Nothing fancy here.
function Footer() {
    return (
        <div className="row fluid mt-4" style={{backgroundColor: "red", fontFamily: "'Luckiest Guy', cursive"}}>
            <div className="col-md-12">
                <br />
                <br />
                <p>Pok&#233;Click!</p>
            </div>
        </div>
    )
}

export default Footer;