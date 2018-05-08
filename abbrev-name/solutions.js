function abbrevName(name){
  var firstName = name.split(' ');
  return `${firstName[0].charAt(0).toUpperCase()}.${firstName[1].charAt(0).toUpperCase()}`;
  }