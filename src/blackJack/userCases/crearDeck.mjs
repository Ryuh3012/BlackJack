import _ from "underscore";
/**
 * 
 * @param {Array<string>} tipoDeCarta 
 * @param {Array<string>} cartaEspeciales 
 * @returns 
 */
export const crearDeck = (tipoDeCarta, cartaEspeciales) => {
    if(!tipoDeCarta|| tipoDeCarta.length===0)throw new Error('tipoDeCarta es obligatorio como un arreglo de string')
    if(!cartaEspeciales|| cartaEspeciales.length===0)throw new Error('cartaEspeciales es obligatorio como un arreglo de string')

    let deck = []
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCarta ) {
        for( let esp of cartaEspeciales ) {
            deck.push( esp + tipo);
        }
    }    
    return _.shuffle( deck );
}