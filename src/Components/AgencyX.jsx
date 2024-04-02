import React from "react";
function AgencyComp() {
    return (
        <div >
            <div className="agency-main-container" >
                <div className="agency-small-container">
                    <h1 style={{ color: "blue" }}>AgencyX</h1>
                    <p style={{ color: 'white' }}>E-commerce shopping app that allows user to buy groceries
                        online from the nearby outlets within the neighborhood
                    </p>
                    <div>
                        <p className="para-data">View Website</p><span className="arrow-icon"><i style={{ color: "blue" }} class="bi bi-arrow-right"></i></span>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/9hnWtyp/needsmart-works-png.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default AgencyComp;