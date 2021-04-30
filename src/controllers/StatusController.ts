export function getStatusNameByID(id: number) {
    switch (id) {
        case 0: return {text: "На авторизации", color: 'rgb(104, 140, 188)'}
        case 1: return {text: "Не авторизовано", color: 'rgb(188 104 116)'}
        case 2: return {text: "Авторизовано", color: 'rgb(104 188 130)'}
        default: return {text: "Ошибка статуса", color: 'rgb(121 121 121)'}
    }
}