
import Dustbin from '../../assets/Vector.png'
const SelectedPlayers = ({ selectPlayer }) => {
    const { player_name, img, batting_hand } = selectPlayer;
    return (
        <div className="border border-red-500 rounded-2xl flex justify-between items-center py-4 px-3 mb-3">
            <div className='flex gap-5 items-center'>
                    <img className="w-[100px] h-[100px] rounded-2xl" src={img} alt="" />
                <div className=''>
                    <h1 className='font-extrabold text-xl'>
                        {player_name}
                    </h1>
                    <h2 className='text-gray-400'>
                        {batting_hand}
                    </h2>
                </div>
            </div>
            <div className='w-1/6 flex justify-center'>
                <img className='cursor-pointer' src={Dustbin} alt=""/>
            </div>
        </div>
    );
};

export default SelectedPlayers;