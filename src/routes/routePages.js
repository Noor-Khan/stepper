import home from '../components/pages/Home.vue'
import about from '../components/pages/About.vue'
import gallery from '../components/pages/Gallery.vue'
export const routes = [
    {path: '', component: home},
    {path: '/About/:id', component: about},
    {path: '/Gallery', component: gallery}
];