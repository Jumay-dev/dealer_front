export function getStatusNameByID(id: number) {
    switch (id) {
        case 0: return "На авторизации"
        case 1: return "Не авторизовано"
        case 2: return "Авторизовано"
        default: return "Ошибка статуса"
    }
}