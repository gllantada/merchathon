export const PARA_PREPARAR = 0;
export const EN_PREPARACION = 1;
export const PARA_DESPACHO = 2;
const messages = ["Enviar para preparar", "Enviar a despacho", "Asignar repartidor"]

export const getActionText = (nav) => {
  return messages[nav]
}