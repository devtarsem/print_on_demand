import Nav from "./nav";
import './../styles/marketing.css'
import './../util/util.css'
import { Link } from "react-router";
import mock from '/mock.png'
import chasma from '/chasma.png'


const data = [
    {
        feature : 'Door step delivery',
        pro : 'Free above 499'
    }
    ,
    {
        feature : 'Secure payments',
        pro : 'by Razorpay'
    }
    ,
    {
        feature : '100% Refund policy',
        pro : '1 week money back'
    }
    ,
    {
        feature : 'Online support',
        pro : '24/7 support system'
    }
]

function Marketing(){
    return(
        <div className="mark">
            <header className="head">
                <div className="top">
                    <Nav/>
                </div>
                <div className="middle">
                    <div className="midcont grid grid-2-col gap96">
                        <div className="grid_content flex flex-2 flex-dir gap8">
                            <h2 className="cursive">Biggest sale</h2>
                            <h2 className="heading2">Men's Fashion</h2>
                            <h3 className="heading3">Min. 35-70% off</h3>
                            <div className="btns flex flex-1 gap48">
                                <Link to='/' className='headCTA'>Shop Now</Link>
                                <Link to='/' className='headCTA'>Latest releases</Link>

                            </div>
                        </div>
                        <div className="pics flex flex-2">
                            <img src={mock} className="mockimg" alt="model"/>
                        </div>
                    </div>
                </div>
                <div className="bottom  flex flex-1 gap16">
                    {data.map(el=>
                        <div className="feabox flex flex-2 flex-dir gap8">
                            <p className="fea1">{el.feature}</p>
                            <p className="fea2">{el.pro}</p>
                        </div>
                    )}
                </div>

            </header>

            <div className="catalog">
                <div className="catalogCont grid grid-4-col grid-2-row gap16 ">
                    <div className="cata1 pad16">
                        <div className="cata1cont flex flex-dir gap16">
                            <p className="off">Upto 70% off</p>
                            <h4 className="catahead">Custom Men's design</h4>
                            <Link to='/' className="cta">Shop now</Link>
                        </div>
                    </div>
                    <div className="cata2 pad16">
                        <h4 className="catahead off">Upto 40% off</h4>

                    </div>
                    <div className="cata3"></div>
                    <div className="cata4"></div>

                </div>
            </div>

            <div className="featured_prods flex flex-dir gap16">
                <h2 className="feaProd">Featured products</h2>
                <div className="flex flex-2 gap48">
                    <button className="btn_">New arrivals</button>
                    <button className="btn_">Print on demand</button>
                    <button className="btn_">Eye wear</button>
                </div>
                <div className="grid grid-4-col gap24">
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

            <div className="comboOffers ">
                <div className="combos grid grid-2-col gap16">
                    <div className="combopic1 pad16 ">
                        <p className="off">Upto 35% off</p>
                        <p className="off off_">Custom T-shirt + eye wears</p>

                    </div>
                    <div className="combopic2">

                    </div>
                </div>
            </div>

            <div className="ourBirthdayCatalog flex flex-dir gap16">
                <h2 className="feaProd">Premium catagory</h2>
                <div className="flex flex-2 gap48">
                    <button className="btn_">Birthday special</button>
                    <button className="btn_">Festivel special</button>
                    <button className="btn_">Corporate special</button>
                </div>
                <div className="grid grid-4-col gap24">
                    {[1,2,3,4,5,6,7,8].map(el=>
                        <div className="prod">
                            <div className="sticker1">
                                <p className="ofsticker">40% off</p>
                            </div>
                            <img src={'/des1.png'} className="prodpic" alt="products"/>
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

            <div className="tryMocksups flex flex-dir gap16">
                <h2 className="feaProd">Try our designs</h2>
                <div className="mockuptru grid grid-10-col gap48">
                    <div className="tshirts pad16 flex flex-dir gap16">
                        <h3 className="urmockups">Our Mockups</h3>
                        <div className="grid grid-2-col gap16">
                            {[1,2,3,4,5,6].map(el=>
                                <div className="mockuptrp"></div>
                            )}
                        </div>
                    </div>
                    <div className="displaycot pad16">

                    </div>
                    <div className="designsca pad16">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Marketing;