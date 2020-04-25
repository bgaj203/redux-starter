import store from './store'
import { bugAdded, bugRemoved, bugResolved } from './actions'

const unsubscribe = store.subscribe(() => {
    console.log('Store Changed', store.getState())
})

store.dispatch(bugAdded('Bug_1'))
store.dispatch(bugAdded('Bug_2'))
store.dispatch(bugAdded('Bug_3'))
store.dispatch(bugRemoved(1))
store.dispatch(bugResolved(3))

// console.log(store.getState())