const Option = ({ opt, handleSelect, id }) => {
  return (
    <div className="flex justify-center align-middle gap-5 m-5">
      <label  className="label cursor-pointer">
        <span onClick={() => handleSelect(opt)} className="label-text font-semibold mr-5">{opt}</span>
        <input type="radio" name={id} className="radio checked:bg-blue-500" />
      </label>
    </div>
  );
};

export default Option;
