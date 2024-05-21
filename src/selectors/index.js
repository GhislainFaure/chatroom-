/**
 * fonction qui retourne l'id max d'un tableau d'objets
 * @param {array} items tableau d'objets avec une propriété id
 * @returns id max
 */
export function getHighestId(items) {
  const ids = items.map((item) => item.id);
  return Math.max(...ids);
}
