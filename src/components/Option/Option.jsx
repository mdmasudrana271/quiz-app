const Option = ({ opt, handleSelect }) => {
  return (
    <div  onClick={()=>handleSelect(opt) }  className="">
        <button  className="flex justify-around gap-5 my-5 mx-5 py-2 px-5 rounded-lg cursor-pointer  bg-indigo-400">
            <span className="text-sm">{opt}</span> 
        </button>
    </div>

  );
};

export default Option;
