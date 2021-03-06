import home from './views/home.vue'
import list from './views/list.vue'
import notFund from './views/404.vue'

export default function(router) {
    router.map({
        '/': {
            name: 'home',
            component: home
        },
        '/list': {
            name: 'list',
            component: list
        },
        '*': {
            name: 'notFund',
            component: notFund
        }
    });

}
