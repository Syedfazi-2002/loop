import React from "react";
function InovoiceComponent() {
    return (
        <div>
            <div className="star-main-container">
                <div>
                    <img src="https://i.ibb.co/f0FSH0K/invoice-works-png.jpg" alt="" />
                </div>
                <div className="star-data-container">
                    <h1 style={{ color: "blue" }}>The Invoice</h1>
                    <p style={{ color: 'white' }}>Fidisys Invoice mobile app helps freelancers, small business
                        owners to create invoices in a minute and share with their
                        clients seamlessly via multiple channels.
                    </p>
                    <div>
                        <p className="para-data">View Website</p><span className="arrow-icon"><i style={{ color: "blue" }} class="bi bi-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InovoiceComponent;