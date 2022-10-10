const Option = ({ opt, handleSelect }) => {
  console.log(opt);
  return (
    <div onClick={()=>handleSelect(opt)} className="">
        <div  className=" cursor-pointer flex justify-around gap-5 my-5">
            <span className="text-sm">{opt}</span> 
            <input type="radio" name="radio-6" className="radio checked:bg-blue-500" />
        </div>
    </div>

  );
};

export default Option;
