import './../styles/marketing.css'
import './../util/util.css'
import {Link} from 'react-router'
import user from '/user.png'
import cart from '/cart.png'
import heart from '/heart.png'
import search from '/search.png'



function Nav(){
    return(
        <div className="nav">
            <div className="contacts flex flex-1">
                <div className='cont flex flex-1 gap16'>
                    <p className='emal'>skylite_group@gmail.com</p>
                    <p className='pho'>+91 94781-81139</p>
                </div>
                <div className='welcome flex flex-2'>
                    <p className='wel'>Welcome to our portal</p>
                </div>
            </div>
            <div className="navbar flex flex-1 pad16">
                <h1 className='heading'>Skylite fashions</h1>
                <div className='links flex flex-1 gap48'>
                    <Link className='link' to='/' >Home</Link>
                    <Link className='link' to='/shop' >Shop</Link>
                    <Link className='link' to='/pod' >Print your fellings</Link>
                    <Link className='link' to='/' >Track</Link>
                    <Link className='link' to='/' >Latest</Link>
                </div>
                <div className='iconspack flex flex-1 gap48'>
                    <Link to='/' className='iconLink'>
                        <img src={user} className='iconImg' alt='icon'/>
                    </Link>
                    <Link to='/' className='iconLink'>
                        <img src={cart} className='iconImg' alt='icon'/>
                    </Link>
                    <Link to='/' className='iconLink'>
                        <img src={heart} className='iconImg' alt='icon'/>
                    </Link>
                    <Link to='/' className='iconLink'>
                        <img src={search} className='iconImg' alt='icon'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;