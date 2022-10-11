const Option = ({ opt, handleSelect }) => {
  console.log(opt);
  return (
    <div onClick={()=>handleSelect(opt)} className="">
        <div  className="flex justify-around gap-5 my-5 mx-5 py-2 px-5 rounded-lg cursor-pointer  outline outline-gray-500">
            <span className="text-sm">{opt}</span> 
        </div>
    </div>

  );
};

export default Option;
