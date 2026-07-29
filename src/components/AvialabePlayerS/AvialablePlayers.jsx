import { use } from "react";
import Player from "../Player/Player";


const AvialablePlayers = ({ PromiseFetchPlayer }) => {
    const players = use(PromiseFetchPlayer);
    console.log(players);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto">
                {
                    players.map(palyer => <Player key={palyer.id} palyer={palyer}></Player>)
                }
            </div>
        </>
    );
};

export default AvialablePlayers;