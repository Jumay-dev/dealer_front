import { backend } from '../config/server'

export function updateMainCompany(company: Object) {
    const token = localStorage.getItem("react-crm-token")
    let data = new FormData
    for (let key in company) {
        data.append(key, company[key])
    }

    fetch(`${backend}/api/company/updatemain`, {
        method: "POST",
        headers: {
            "Authorization": token
        },
        body: data
    })
}