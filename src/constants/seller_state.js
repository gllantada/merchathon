export const PARA_PREPARAR = 0;
export const EN_PREPARACION = 1;
export const PARA_DESPACHO = 2;
const messages = ["Enviar para preparar", "Enviar a despacho", "Asignar repartidor"]
const succesMessage = ["¡Ordenes en preparación!", "¡Ordenes listas para despacho!", "Ordenes asignadas para su reparto"]
export const getActionText = (nav) => {
  return messages[nav]
}
export const getSuccesMessage = (nav) => {
  return messages[nav]
}