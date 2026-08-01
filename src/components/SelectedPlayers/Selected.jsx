import SelectedPlayers from "../SelectedPlayer/SelectedPlayers";

const Selected = ({selectedData, removeHandle}) => {
    console.log(selectedData);
    return (
        <div className="w-4/5 mx-auto">
            {
                selectedData.map(selectPlayer => <SelectedPlayers removeHandle={removeHandle} selectPlayer={selectPlayer}></SelectedPlayers>)
            }
        </div>
    );
};

export default Selected;