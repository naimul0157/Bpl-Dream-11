import { useState } from 'react';
import flag from '../../assets/report 1.png'
// import AvialablePlayers from '../AvialabePlayerS/AvialablePlayers';
// import sakib from '../../assets/'
const Player = ({ palyer, setAvialableBalance, avilableBalance, countSelect, setCountSelect }) => {
    const [ChoseBtn, SetchoseBtn] = useState(false)
    const { player_name, player_country, player_playing_role, batting_hand, price, img, rating } = palyer
    function handleBUtton(PlayerParameter) {
        SetchoseBtn(true);
            (avilableBalance >= 0 ? setAvialableBalance(avilableBalance - PlayerParameter)
         || setCountSelect(countSelect + 1) : alert('insufficient balance'));

    }
    return (
        <div>
            <div className="card border border-teal-600">
                <figure>
                    <img className='h-200px'
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{player_name}</h2>
                    <div className='flex items-center flex-wrap justify-between border-b-2 border-gray-500 p-2'>
                        <div className='flex'>
                            <img src={flag} alt="" />
                            <p>
                                {player_country}
                            </p>
                        </div>
                        <div>
                            <button className='border-2 border-teal-300 p-1 rounded-md'>{player_playing_role}</button>
                        </div>
                    </div>
                    <div className='flex justify-between font-bold'>
                        <h2>Rating</h2>
                        <span>{rating}</span>

                    </div>
                    <div className='flex justify-between'>
                        <h2>
                            {batting_hand}
                        </h2>
                        <h2 className='text-gray-500'>
                            {batting_hand}
                        </h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>
                            Price:${price}
                        </h2>
                        <button disabled={ChoseBtn || avilableBalance<=0 || countSelect==4} onClick={() => {
                            handleBUtton(price)
                        }

                        } className={`btn border-gray-400 ${ChoseBtn && `bg-green-400`}`}>{ChoseBtn ? "Cosed" : 'Chose Player'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;