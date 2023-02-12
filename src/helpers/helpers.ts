export const getDayMonthYear = (date: Date) => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const getDate = (date: string) => {
    const year = +date.split('.')[2]
    const month = +date.split('.')[1] - 1
    const day = +date.split('.')[0]
    return new Date(year, month, day)
}