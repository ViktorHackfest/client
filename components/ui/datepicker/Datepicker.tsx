type DatepickerProps = {
  id: string;
  name: string;
  value?: string;
};

export const Datepicker = ({ id, name, value }: DatepickerProps) => {
  return (
    <div className="bg-red-200 w-fit p-2 rounded-2xl">
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        className="rounded-2xl py-2 px-4"
      />
    </div>
  );
};
