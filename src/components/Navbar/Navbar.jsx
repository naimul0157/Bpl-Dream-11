import Navimg from '../../assets/logo.png'
import coin from '../../assets/Coin.png'
const Navbar = ({avilableBalance}) => {
    return (
        <div className="navbar w-4/5 mx-auto">
            <div className="flex-1">
                <img src={Navimg} alt="" />
            </div>
            <div className="flex gap-2 border-2 border-white rounded-xl p-2">
              <span>{avilableBalance}</span>
              <span>coin</span>
              <img src={coin} alt="" />

            </div>
        </div>
    );
};

export default Navbar;