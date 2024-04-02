import React from "react";
function Groomer() {
    return (
        <div>
                        <h1 style={{ color: 'white', textAlign: "center" }}>Our Works</h1>

            <div className="groomer-main-container">
                <div>
                    <img src="https://i.ibb.co/dr75Z4Y/cc-works-png.jpg" alt="" />
                </div>
                <div className="groomer-small-container">
                    <h1 style={{ color: "blue" }}>Groomer</h1>
                    <p style={{color:"white"}}>We build the official website for Groomer where customers can quickly book their salon appointments with just a few clicks.</p>
                    <p className="para-data">View Website</p> <span className="arrow-icon"><i style={{color:"blue"}} class="bi bi-arrow-right"></i></span>
                </div>
            </div>
        </div>
    )
}
export default Groomer;