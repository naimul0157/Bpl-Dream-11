import { use } from "react";
import Player from "../Player/Player";


const AvialablePlayers = ({ PromiseFetchPlayer, setAvialableBalance, avilableBalance, countSelect, setCountSelect }) => {
    const players = use(PromiseFetchPlayer);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto">
                {
                    players.map(palyer => <Player avilableBalance={avilableBalance} setAvialableBalance={setAvialableBalance} key={palyer.id} palyer={palyer} countSelect={countSelect} setCountSelect={setCountSelect}></Player>)
                }
            </div>
        </>
    );
};

export default AvialablePlayers;