function toCamelCase(str){
  return str.replace(/(?:-|_)([a-z])/gi, (changeInto, characterAfterDashOrUnderscore) => {
    return characterAfterDashOrUnderscore.toUpperCase();
  });
}