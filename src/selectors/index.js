/**
 * fonction qui retourne l'id max d'un tableau d'objets
 * @param {array} items tableau d'objets avec une propriété id
 * @returns id max
 */
export function getHighestId(items) {
  const ids = items.map((item) => item.id);
  return Math.max(...ids);
}

/**
 * fonction qui renvoie un selector , qui determine si l'auteur du message correspond à l'utilisateur connecté
 * @param {string} author auteur du message
 * @returns selector
 */
export function isMessageMine(author) {
  return (state) => author === state.messages.pseudo;
}
