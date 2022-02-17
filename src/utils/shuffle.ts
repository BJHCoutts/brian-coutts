// export const shuffle = (array: string[]): string[] => {

//   for (let i = array.length - 1; i >= 0; i--) {
//          const randomIndex = Math.floor(Math.random() * (i + 1));
//          array.push(array[randomIndex]);
//          array.splice(randomIndex, 1);
//      }
//      return array;
// } 

export const shuffle = (array:[] | string[]):[] | string[] => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}