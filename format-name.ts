interface IName {
    last?: string
    first?: string
}

export function formatName (name: IName): string {
    return `${name?.last}${name?.last && name?.first ? ', ' : ''}${name?.first}`
}
const obj: IName = {
    last: "Chowdery",
    first: "Simon"
}

const formattedName = formatName(obj)

console.log(formattedName);

