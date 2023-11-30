/**
 * 
 * @param {Array<String>} deck 
 * @returns 
 */

export const pedirCarta = (deck) => {

    if(!deck || deck.length===0) throw new Error('No hay cartas')

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
