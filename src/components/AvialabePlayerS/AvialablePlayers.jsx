import { use } from "react";
import Player from "../Player/Player";


const AvialablePlayers = ({ PromiseFetchPlayer }) => {
    const players = use(PromiseFetchPlayer);
    console.log(players);
    return (
        <>
            <div className="flex justify-between w-4/5 mx-auto my-5 items-center">
                <h1>
                    Avialable Players
                </h1>
                <div className="border border-white rounded-xl p-2">
                    <button className="border-r p-1">
                        Avialable
                    </button>
                    <button className="p-1">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 w-4/5 mx-auto">
                {
                    players.map(palyer => <Player key={palyer.id} palyer={palyer}></Player>)
                }
            </div>
        </>
    );
};

export default AvialablePlayers;