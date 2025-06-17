import Nav from "./nav"
import './../styles/shop.css'
import './../util/util.css'
import mock from '/mock.png'

function Shop(){
    return(
        <div className="shop">
            <div className="top">
                <Nav/>
            </div>
            <div className="offer flex flex-2 pad16 gap16">
                <svg className="annuncemnt" fill="#ffffff" viewBox="0 -0.2 50.963 50.963" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="announcement" d="M997.7,276.689c4.562,1.118,11.424,3.839,19.778,10.381v-36.3c-8.354,6.54-15.216,9.262-19.778,10.381ZM990.676,293l-.057-.067-.068-.111c-.633-1.078-1.445-3.321-1.715-7.894l0-.026V279.7h-4.608l-2.611,0v16.36h7.32c.023,0,.049-.007.077-.008l.09-.01.13.008c.03,0,.057.005.079.009a1.869,1.869,0,0,0,1.822-1.862,1.833,1.833,0,0,0-.25-.906A1.891,1.891,0,0,0,990.676,293Zm-17.6-28.3v8.448a4.244,4.244,0,0,0,4.231,4.227h18.065v-16.9H977.309A4.242,4.242,0,0,0,973.078,264.7Zm49.969-19.193H1020.8a1.011,1.011,0,0,0-.995.995v44.844a1,1,0,0,0,.995.991h2.245a.994.994,0,0,0,.992-.993V246.495A1,1,0,0,0,1023.047,245.5Z" transform="translate(-973.078 -245.502)"></path> </g></svg>
                <h2 className="heading2 heading2_small">Get 30% off on new releases use "RKT30" as coupon code.</h2>
                <svg className="annuncemnt annrotate" fill="#ffffff" viewBox="0 -0.2 50.963 50.963" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="announcement" d="M997.7,276.689c4.562,1.118,11.424,3.839,19.778,10.381v-36.3c-8.354,6.54-15.216,9.262-19.778,10.381ZM990.676,293l-.057-.067-.068-.111c-.633-1.078-1.445-3.321-1.715-7.894l0-.026V279.7h-4.608l-2.611,0v16.36h7.32c.023,0,.049-.007.077-.008l.09-.01.13.008c.03,0,.057.005.079.009a1.869,1.869,0,0,0,1.822-1.862,1.833,1.833,0,0,0-.25-.906A1.891,1.891,0,0,0,990.676,293Zm-17.6-28.3v8.448a4.244,4.244,0,0,0,4.231,4.227h18.065v-16.9H977.309A4.242,4.242,0,0,0,973.078,264.7Zm49.969-19.193H1020.8a1.011,1.011,0,0,0-.995.995v44.844a1,1,0,0,0,.995.991h2.245a.994.994,0,0,0,.992-.993V246.495A1,1,0,0,0,1023.047,245.5Z" transform="translate(-973.078 -245.502)"></path> </g></svg>
            
            </div>

            <div className="catagorySelector_ flex flex-1 gap48 ">
                <div className="flex flex-2 gap48">
                    <button className="catBtn">T-shirts</button>
                    <button className="catBtn">Specks</button>
                    <button className="catBtn">Combo offers</button>
                </div>
                <div className="additionalbtns flex flex-1 gap16">
                    <button className="extrabtn">Sort by price</button>
                    <button className="extrabtn">Sort by discount</button>

                </div>
            </div>

            <div className="allproducts">
                <div className="prodcatalog grid grid-12-col gap16">
                    <div className="filters pad16">
                        <div className="pricefilter flex flex-dir gap8 pad16">
                            <label className="priceRange label">Price range</label>
                            <div className="flex flex-2 gap16">
                                <input className="inp" placeholder="Min" type="number"/>
                                <p className="to">to</p>
                                <input className="inp" placeholder="Max" type="number"/> 
                            </div>
                        </div>

                        <div className="pricefilter flex flex-dir gap8 pad16">
                            <label className="priceRange label">Colors</label>
                            <div className="grid grid-5-col gap16">
                                {["#ddf51d", "#2f8f33", "#000", "#ddf51d", "#2f8f33", "#000", "#ddf51d", "#2f8f33", "#000", "#ddf51d", "#2f8f33", "#000", "#ddf51d", "#2f8f33"].map(el=>
                                    <button  className="colorbtn" style={{backgroundColor: el}}></button>
                                )}
                            </div>
                        </div>

                        <div className="pricefilter flex flex-dir gap8 pad16">
                            <label className="priceRange label">Size</label>
                            <div className="grid grid-2-col gap16">
                                {["L" ,"M", "XL", "XXl", "XXXL"].map(el=>
                                    <button  className="colorbtn sizebntn" >{el}</button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="prods grid grid-3-col gap16">
                        {[1,2,3,4,5,6,7,8].map(el=>
                            <div className="prod">
                                <div className="sticker1">
                                    <p className="ofsticker">40% off</p>
                                </div>
                                <img src={mock} className="prodpic" alt="products"/>
                                <div className="flex flex-dir gap8">
                                    <p className="catagory">Custom design</p>
                                    <h4 className="cathead">Special custom design tshirt</h4>
                                    <p className="price">799/-</p>
                                    <button className="addToCart">Add cart +</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Shop;