
const Toggle = ({setToggle, toggle, countSelect}) => {
    return (
        <div className="w-4/5 mx-auto">
            <div className="md:flex justify-between my-3 items-center">
                <h1 className="font-bold text-2xl">
                    Avialable Players
                </h1>
                <div>
                    <button onClick={()=>setToggle(true)} className={`border border-r-0 px-4 py-2 border-gray-400 cursor-pointer rounded-l-md ${toggle === true?"bg-green-400":""}`}>
                        Avialable
                    </button>
                    <button onClick={()=> setToggle(false)} className={`border border-l-0 px-4 py-2 border-gray-400 rounded-r-md cursor-pointer ${toggle === false ? 'bg-green-400':''}`}>Selected <span>({countSelect})</span></button>
                </div>
            </div>
        </div>
    );
};

export default Toggle;