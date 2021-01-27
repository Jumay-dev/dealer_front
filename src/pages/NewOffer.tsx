import React from 'react'
import ToolsOffersSidebar from '../components/ToolsOffersSidebar'
function NewOffer() {
    // TestData
    const [authorised, setAuthorised] = React.useState([
        {
            id: 0,
            parent: null,
            name: 'Рентгеновский аппарат Listem REX-650RF: FLUOROSCOPY',
            image: 'https://ds-med.ru/wp-content/uploads/2019/05/850-650-RF222-2.png',
            wiki: 'https://ds-med.ru/product/listem-rex-650rf-fluoroscopy/',
            price: 300000
        },
        {
            id: 1,
            parent: null,
            category: 1,
            name: 'Цифровой рентгеновский аппарат Listem PROGEN-650R: DRS',
            image: 'https://ds-med.ru/wp-content/uploads/2020/04/650-R-DRS.png',
            wiki: 'https://ds-med.ru/product/listem-progen-650r-drs/',
            price: 300000
        },
        {
            id: 2,
            parent: 0,
            category: 1,
            name: 'Кресло врача',
            image: 'https://ds-med.ru/wp-content/uploads/2020/04/650-R-DRS.png',
            wiki: 'https://ds-med.ru/product/listem-progen-650r-drs/',
            price: 300000
        },
        {
            id: 3,
            parent: 0,
            category: 1,
            name: 'Рабочее место врача',
            image: 'https://ds-med.ru/wp-content/uploads/2020/04/650-R-DRS.png',
            wiki: 'https://ds-med.ru/product/listem-progen-650r-drs/',
            price: 300000
        },
    ])

    return (
        <div>
            <ToolsOffersSidebar
                authorised={authorised}
            />
        </div>
    )
}

export default NewOffer