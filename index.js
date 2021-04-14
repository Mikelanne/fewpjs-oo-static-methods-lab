class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9-'' +]+/gi, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(" ");
    let array = [];
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        array.push(words[i][0].toUpperCase() + words[i].substr(1));
      } else if (exceptions.includes(words[i])) {
        array.push(words[i]);
      } else {
        array.push(words[i][0].toUpperCase() + words[i].substr(1));
      }
    }
    return array.join(" ")
  }
}