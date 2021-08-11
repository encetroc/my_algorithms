/**
 *
 * Sans utiliser de fonction prototype, faire une fonction qui prend 2 paramètres :
- Une chaîne de caractères que l’on veut trouver (Exemple: “simple”)
- Une chaîne de caractères dans laquelle on effectue la recherche (Exemple: “PayPlug is simple”)

Et qui retourne :
Un Booléen (vrai ou faux) permettant de savoir si l’on a trouvé (ou non) la chaîne de caractères recherchée dans la seconde chaîne de caractère
 */

const containsString = (shortString, longString) => {
    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < shortString.length; j++) {
            if (shortString[j] !== longString[i + j]) {
                break
            }
        }
        return true
    }
    return false
}

console.log(containsString('abc', 'xyzabcd'))