import calcImg from '../img/calc.jpeg'
import dataTableImg from '../img/data-table.webp'
import devListImg from '../img/dev-list.jpeg'

export const projectList = {
    projects: [
        {
            img: dataTableImg,
            id: 1,
            title: 'Data table',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ut accusantium ea. Ut nam harum rerum autem error voluptas at. Quae modi nulla sint, corporis ratione repellendus consectetur vitae exercitationem!',
            gitLink: 'https://github.com/kartegi/datatable',
            demoLink: 'https://datatable-d06b1.web.app/'
        },

        {
            img: devListImg,
            id: 2,
            title: 'Dev list',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ut accusantium ea. Ut nam harum rerum autem error voluptas at. Quae modi nulla sint, corporis ratione repellendus consectetur vitae exercitationem!',
            gitLink: 'https://github.com/kartegi/dev_list',
            demoLink: 'https://kartegi.github.io/dev_list/'
        },
        
        {
            img: calcImg,
            id: 3,
            title: 'Calculator with parentheses',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ut accusantium ea. Ut nam harum rerum autem error voluptas at. Quae modi nulla sint, corporis ratione repellendus consectetur vitae exercitationem!',
            gitLink: 'https://github.com/kartegi/calculaterWithBrackets',
            demoLink: 'https://kartegi.github.io/calculaterWithBrackets/'
        },
    ]
}