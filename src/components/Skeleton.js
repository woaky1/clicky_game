import React from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';

function Skeleton () {
    return (
        <div>
            {/* <div className="row"> */}

            {/* </div> */}
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-md-12">
                        <Jumbo />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skeleton;