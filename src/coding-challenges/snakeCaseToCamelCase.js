var output = function (s) {
  let strings = s.split("_");
  strings[0].charAt(0).toLowerCase();
  let camelCase = strings[0];

  for (let i = 1; i < strings.length; i++) {
    strings[i].charAt(0).toUpperCase();
    camelCase += strings[i];
  }
  console.log(camelCase);
};
