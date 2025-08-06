export const FormInput = ({
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
    <div className="w-full">
      <p className="font-nunito text-[14px] md:text-[14px] leading-[20px] font-normal text-[#000000]">
        {name}
      </p>
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
        <p className="pt-1 text-xs font-medium text-red-500 font-poppins">
          {errors[inputName]}
        </p>
      )}
    </div>
  );
};
