export const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#fbeddb",
    padding: "5px 10px",
    alignItems: "center",
    borderColor: state.isFocused ? "#c9a88d" : "#787a7b",
    boxShadow: state.isFocused ? "0 0 0 1px #c9a88d" : "0 0 0 1px #787a7b",
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    fontWeight: state.isFocused ? "600" : "400",
    backgroundColor: state.isSelected ? "#c9a88d" : "#fbeddb",
  }),
};

export const selectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "", // Background color of the selected option
  },
});

export const sortTypes = [
  { value: "new", label: "Сначала новые" },
  { value: "popular", label: "Сначала популярные" },
];
