
const router = new VueRouter({
    routes: [
        {
            path: '/library',
            component: library,
            props: true,
            children: [
                {
                    path: 'library_section1',
                    component: librarySection1,
                    children: [
                        {
                            path: 'library_subsection1',
                            component: librarySubsection1,
                            props: {message: 'Романы на любой вкус!!'}
                        },
                        {
                            path: 'library_subsection2',
                            component: librarySubsection2,
                            props: {message: 'Большой выбор зарубежных и отечественных поетов!!'}
                        },
                        {
                            path: 'library_subsection3',
                            component: librarySubsection3,
                            props: {message: 'Правдиные истории всех времен!!'}
                        }
                    ]
                },

                {
                    path: 'library_section2',
                    component: librarySection2,
                    children: [
                        {
                            path: 'library_subsection1',
                            component: librarySubsection1,
                            props: {message: 'Наука для каждого!!'}
                        }
                    ]
                },
                {
                    path: 'library_section3',
                    component: librarySection3,
                    children: [
                        {
                            path: 'library_subsection1',
                            component: librarySubsection1,
                            props: {message: 'Разгадки на крупнейшие загадки мира!!'}
                        }
                    ]
                },
                {
                    path: 'library_section4',
                    component: librarySection4,
                    children: [
                        {
                            path: 'library_subsection1',
                            component: librarySubsection1,
                            props: {message: 'Похимичим?!!'}
                        },
                        {
                            path: 'library_subsection2',
                            component: librarySubsection2,
                            props: {message: 'Физика вокруг нас!!'}
                        },
                        {
                            path: 'library_subsection3',
                            component: librarySubsection3,
                            props: {message: 'Без истории не будет нашего будущего!!'}
                        }
                    ]
                },
            ]
        },

    ]
});