export const createUrl = (prop: any) => {
    let result;
    if (prop.length > 1) {
      result = prop.split(" ").join("");
    } else {
      result = prop;
    }
    let capitalizedStr = result.charAt(0).toLowerCase() + result.slice(1);
    return capitalizedStr;
  };