interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export const RadioGroup = ({
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) => {
  return (
    <div className="flex items-stretch gap-5">
      {options.map((option) => (
        <div
          key={option.value}
          className="flex min-h-5 items-center gap-2.5 justify-center flex-1"
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="border self-stretch flex min-h-4 w-4 flex-col items-center justify-center my-auto rounded-[33px] border-[rgba(32,75,180,1)] border-solid">
              {value === option.value && (
                <div className="bg-[rgba(32,75,180,1)] flex min-h-2 w-full h-2 rounded-[50%]" />
              )}
            </div>
            <span className="text-base text-black font-normal">
              {option.label}
            </span>
          </label>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            className="hidden"
          />
        </div>
      ))}
    </div>
  );
};
