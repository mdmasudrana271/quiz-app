const Option = ({ opt, handleSelect }) => {
  console.log(opt);
  return (
    // <div className="py-2 px-5 m-10  rounded-lg  font-semibold">
    //   <button onClick={()=>handleSelect(opt)} className="text-sm">{opt}</button>
    //   <input type="radio" name="radio-4" className="radio radio-accent" />
    // </div>

    <div onClick={()=>handleSelect(opt)} className="">
        <div  className="label cursor-pointer flex justify-around gap-5 my-5">
            <span className="label-text">{opt}</span> 
            <input type="radio" name="radio-6" className="radio checked:bg-blue-500" />
        </div>
    </div>

  );
};

export default Option;
