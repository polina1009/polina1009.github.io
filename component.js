const library = ({
    // props: ['title', 'message'],
    template: `
        <section>
            <p class="library-name">Библиотека имени Вернадского</p>
            <div class="cont-sections">
                <router-link class="l-section" to = "/library/library_section1">отделение художественной литературы</router-link><br>
                <router-link class="l-section" to = "/library/library_section2">отделение научной литературы</router-link><br>
                <router-link class="l-section" to = "/library/library_section3">отделение документальной литературы</router-link><br>
                <router-link class="l-section" to = "/library/library_section4">отделение учебной литературы</router-link><br>
                <router-view></router-view>
            </div>
        </section>
    `
});

const librarySection1 = ({
    props: ["message"],
    template: `
        <section>
            <h2 class="sections-title"><b>отделение художественной литературы</b></h2>
            <div class="lit-sec">
                <p><i>Зарубежная литература</i></p>
                <router-link class = "router-link-subsection" to = "/library/library_section1/library_subsection1"><img class="img-width" src="https://img01-uz.olx.uz/images_olxuz/12933210_1_644x461_prodayutsya-knigi-sovetskayazarubezhnaya-literatura-tashkent.jpg" /></router-link>
            </div>
            <div class="lit-sec">
                <p><i>Поезия</i></p>
                <router-link class = "router-link-subsection" to = "/library/library_section1/library_subsection2"><img class="img-width" src="https://artic.gr/wp-content/uploads/2017/08/e-learning-panepistimio-dimiourgiki_grafi-3.jpg" /></router-link>
            </div>
            <div class="lit-sec">
                <p><i>Исторический роман</i></p>
                <router-link class = "router-link-subsection" to = "/library/library_section1/library_subsection3"><img class="img-width" src="https://j.livelib.ru/boocover/1000321255/o/d08a/Anton_Chehov__Vishnevyj_sad._Povesti_i_rasskazy.jpeg" /></router-link>
            </div>
            <router-view></router-view>
        </section>
    `
});

const librarySection2 = ({
    props: [ "message"],
    template: `
        <section class="l-sections">
            <h2 class="sections-title"><b>отделение научной литературы</b></h2>
            <router-link class = "router-link-subsection" to = "/library/library_section2/library_subsection1"><img class="img-width" src="https://cdn.fishki.net/upload/post/201504/03/1488991/untitled-2.jpg" /></router-link>
            <router-view></router-view>
        </section>
    `
});

const librarySection3 = ({
    props: ["message"],
    template: `
        <section class="l-sections">
            <h2 class="sections-title"><b>отделение документальной литературы</b></h2>
            <router-link class = "router-link-subsection" to = "/library/library_section3/library_subsection1"><img class="img-width" src="http://rulibs.com/ru_zar/nonf_biography/bushueva/0/i_023.jpg" /></router-link>
            <router-view></router-view>
        </section>
    `
});

const librarySection4 = ({
    props: ["message"],
    template: `
        <section class="l-sections">
            <h2 class="sections-title"><b>отделение учебной литературы</b></h2>
            <router-link class = "router-link-subsection" to = "/library/library_section4/library_subsection1"><img class="img-link" src="http://osnova.com.ua/images/book/5466.jpg" /></router-link>
            <router-link class = "router-link-subsection" to = "/library/library_section4/library_subsection2"><img class="img-link" src="https://ozon-st.cdn.ngenix.net/multimedia/1015662717.jpg" /></router-link>
            <router-link class = "router-link-subsection" to = "/library/library_section4/library_subsection3"><img class="img-link" src="http://александр-принт.рф/_cache/thumbs/1200x1800/4ad4c50bf4ed.jpg" /></router-link>
            <router-view></router-view>
        </section>
    `
});

const librarySubsection1 = ({
    props: ["message"],
    template: `
        <div>
            <h1><i>{{message}}</i></h1>
        </div>
    `
});

const librarySubsection2 = ({
    props: ["message"],
    template: `
        <div class="cont-mess">
            <h1><i>{{message}}</i></h1>
        </div>
    `
});

const librarySubsection3 = ({
    props: ["message"],
    template: `
        <div>
            <h1><i>{{message}}</i></h1>
        </div>
    `
});