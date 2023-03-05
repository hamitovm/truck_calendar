//Получение всех дней недели для переданной в функцию даты
export const getCurrentWeekDays = (date: Date) => {
    let days: Date[] = []
    let day = date.getDay() === 0 ? 7 : date.getDay()
    let mondayDay = new Date(+date - (day - 1) * 24 * 60 * 60 * 1000)

    for (let i = 0; i < 7; i++) {
        days.push(new Date(+mondayDay + i * 24 * 60 * 60 * 1000))
    }
    return days;
}