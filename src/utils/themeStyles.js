export const themeColors = {
  light: {
    background: '#e5e7eb', // bg-gray-200
    text: '#000000', // text-black
    box: '#cbd5e1', // bg-slate-300
    border: '#d1d5db' // border-gray-300
  },
  dark: {
    background: '#1a202c', // bg-gray-900
    text: '#ffffff', // text-white
    box: '#1e293b', // bg-slate-800
    border: '#4338ca' // border-indigo-700
  }
};

export function getThemeStyles(theme) {
  const backgroundColor =
    theme === "light"
      ? "bg-gray-200 transition duration-500"
      : "bg-gray-900 transition duration-500";
  const textColor =
    theme === "light"
      ? "text-black transition duration-500"
      : "text-white transition duration-500";
  const boxColor =
    theme === "light"
      ? "bg-slate-300 transition duration-500"
      : "bg-slate-800 transition duration-500";
  const borderColor =
    theme === "light" ? "border-gray-300" : "border-indigo-700";

  return { backgroundColor, textColor, boxColor, borderColor };
}
