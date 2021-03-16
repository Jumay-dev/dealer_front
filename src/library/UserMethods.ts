import { backend } from '../config/server'

export function getRoleNameByRoleID(id) {
    switch (id) {
        case 1: return "Менеджер DS.Med"
        case 2: return "Руководитель"
        case 3: return "Сотрудник"
        case 4: return "Авторизатор"
        case 5: return "Администратор"
        default: return "Неизвестная роль"
    }
}

export function updateUser(user) {
    const token = localStorage.getItem("react-crm-token")
    let data = new FormData
    for (let key in user) {
        data.append(key, user[key])
    }
    // data.append('project_visibility', checked === true ? "1" : "0")

    fetch(`${backend}/api/users/update`, {
        method: "POST",
        headers: {
            "Authorization": token
        },
        body: data
    })
}