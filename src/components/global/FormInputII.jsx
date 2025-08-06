export const FormInputII = ({
  name,
  data,
  inputName,
  handleChange,
  errors,
  type,
  placeholder,
  disabled,
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="font-nunito text-[14px] w-[170px] md:text-[14px] leading-[20px] font-normal text-[#000000]">
        {name}
      </p>
      <div className="w-[260px]">
        <input
        name={inputName}
        type={type}
        className="block rounded-lg focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:nunito focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[14px] font-normal font-nunito"
        value={data[inputName]}
        onChange={(e) => handleChange(inputName, e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errors[inputName] && (
        <p className="pt-1 text-xs font-medium text-red-500 font-nunito">
          {errors[inputName]}
        </p>
      )}
      </div>
    </div>
  );
};
