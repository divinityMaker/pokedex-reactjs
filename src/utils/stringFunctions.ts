export const stringFunctions = {
  toUpperCase: (str: string): string => {
    return str.toUpperCase()
  },
  capitalizeFirstLetter: (str: string): string => {
    return str[0].toUpperCase() + str.slice(1)
  }
}
