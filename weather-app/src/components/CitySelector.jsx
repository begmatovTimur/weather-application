import Select from "react-select";

const options = [
  { value: "new-york", label: "New York" },
  { value: "london", label: "London" },
  { value: "tokyo", label: "Tokyo" },
  { value: "sydney", label: "Sydney" },
  { value: "cairo", label: "Cairo" },
];

const customClassNames = {
  control: () =>
    "w-64 bg-white dark:bg-[#212529] border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d6efd] transition duration-200",
  option: ({ isFocused, isSelected }) =>
    `px-4 py-2 text-sm transition ${
      isSelected
        ? "bg-[#0d6efd] text-white"
        : isFocused
        ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
        : "text-black dark:text-white"
    }`,
  input: () => "cursor-text",
  dropdownIndicator: () => "cursor-pointer",
};

export default function CitySelector() {
  return (
    <Select
      options={options}
      classNames={customClassNames}
      onChange={(data)=>localStorage.setItem("currentCity", data.label)}
      placeholder="Select a city..."
    />
  );
}
