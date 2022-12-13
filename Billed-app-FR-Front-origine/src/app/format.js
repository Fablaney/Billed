// ajout pour convertir en date
const MONTHS_FR = {
    "Jan.": 0,
    "Fév.": 1,
    "Mar.": 2,
    "Avr.": 3,
    "Mai.": 4,
    "Jui.": 5,
    "Jui.": 6,
    "Aoû.": 7,
    "Sep.": 8,
    "Oct.": 9,
    "Nov.": 10,
    "Déc.": 11,
}
export const convertToDate = (formatedDate) => {

    let [day, month, year] = formatedDate.split(" ")

    year = parseInt(year)
    month = MONTHS_FR[month]
    day = parseInt(day)

    return new Date(year, month, day)
}

export const formatDate = (dateStr) => {

    if(dateStr !=  null)
    {
        // s'assurer que la date qui vient de la db est valide
        const [y, m, d] = dateStr.split("-")

        // je vérifie que l'année ait 4 chiffre, le mois 2 chiffres et le jour 2 chifres, sinon invalide
        if(y.length != 4 || m.length != 2 || d.length != 2 )
        {
            return "date invalide!"
        }

        const date = new Date(dateStr)
        const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date)
        const mo = new Intl.DateTimeFormat('fr', { month: 'short' }).format(date)
        const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
        const month = mo.charAt(0).toUpperCase() + mo.slice(1)
        return `${parseInt(da)} ${month.substr(0,3)}. ${ye.toString().substr(2,4)}`
    }

    throw new Error("date null")
}
 
export const formatStatus = (status) => {
    switch (status) {
        case "pending":
            return "En attente"
        case "accepted":
            return "Accepté"
        case "refused":
            return "Refused"
    }
}