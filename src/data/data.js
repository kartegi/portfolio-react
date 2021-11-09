import calcImg from '../img/calc.jpeg'
import dataTableImg from '../img/data-table.webp'
import devListImg from '../img/dev-list.jpeg'

export const projectList = {
    projects: [
        {
            img: dataTableImg,
            id: 1,
            title: 'Data table',
            desc: 'In this project I fetch data and list it in the table. Also I implemented sorting (press on the column title), searching and simple pagination.',
            tech: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
            gitLink: 'https://github.com/kartegi/datatable',
            demoLink: 'https://datatable-d06b1.web.app/'
        },

        {
            img: devListImg,
            id: 2,
            title: 'Dev list',
            desc: 'I fetch users from Github API, store them in redux store and list them on page with search ability. In this project I wanted to implement my redux knowledge.',
            tech: ['ReactJS', 'Redux', 'Redux Thunk', 'React Router', 'JavaScript', 'HTML', 'SASS'],
            gitLink: 'https://github.com/kartegi/redux-user-list',
            demoLink: 'https://dev-list-ac6a6.web.app/'
        },
        
        {
            img: calcImg,
            id: 3,
            title: 'Postfix notation',
            desc: 'This is a calculator with parentheses and order of operations. I used postfix notation to accomplish this project. The hardest part in this project for me was to understand postfix notation, as soon as I understood postfix notation rest of the project was kind of easy to deal with.',
            tech: ['ReactJS', 'JavaScript', 'HTML', 'SASS', 'Grid'],
            gitLink: 'https://github.com/kartegi/paretheses-calc',
            demoLink: 'https://paretheses-calc.web.app/'
        },
    ]
}