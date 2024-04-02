import React from "react";
function StarComponent() {
    return (
        <div>
            <div className="star-main-container">
                <div>
                    <img src="https://i.ibb.co/p0xYF9C/eatout-image-png.jpg" alt="" />
                </div>
                <div className="star-data-container">
                    <h1 style={{color:"blue"}}>Starxai</h1>
                    <p style={{color:'white'}}>Paperless menu app ordering app for restaurants using QR
                        code. Scan, Order and Pay for the meals.
                    </p>
                    <div>
                        <p className="para-data">View Website</p><span className="arrow-icon"><i style={{color:"blue"}} class="bi bi-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StarComponent;