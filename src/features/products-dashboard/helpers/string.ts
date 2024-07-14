// uppercase the first letter of a string
const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export { capitalize };