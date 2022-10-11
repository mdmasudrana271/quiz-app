const Option = ({ opt, handleSelect }) => { 
  
 const handleClick=(e)=>{
    console.log("this is working fine");
    e.preventDefault();
    e.target.style.color = 'gray'
}
  return (
    <div   onClick={(e)=> handleClick(e)} className="">
        <button  onClick={()=>handleSelect(opt) } className="flex justify-around gap-5 my-5 mx-5 py-2 px-5 rounded-lg cursor-pointer  bg-indigo-400">
            <span className="text-sm font-bold">{opt}</span>
        </button>
    </div>

    
  );
};

export default Option;
