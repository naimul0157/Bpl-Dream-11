import SelectedPlayers from "../SelectedPlayer/SelectedPlayers";

const Selected = ({selectedData, removeHandle, setToggle}) => {
    // console.log(selectedData);
    return (
        <div className="w-4/5 mx-auto">
            {
                selectedData.map(selectPlayer => <SelectedPlayers key={selectPlayer.player_name} removeHandle={removeHandle} selectPlayer={selectPlayer}></SelectedPlayers>)
            }
                <div onClick={()=>setToggle(true)} className="border border-red-400 w-1/7 flex justify-center rounded-xl text-md font-bold cursor-pointer">
                <div>
                    +
                </div>
                <div>
                    Add Players
                </div>
            </div>
        </div>
    );
};

export default Selected;