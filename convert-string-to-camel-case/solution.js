function toCamelCase(str){
  return str.replace(/(-\q|_\w)/g, (changeInto) => changeInto.toUpperCase()).replace(/-|_/g, '');
  }