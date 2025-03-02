/* import initTabs, { tabsSelectors } from './tabs.js'
import { initModals } from './modals.js'
import { initSliders } from './sliders.js'

initTabs()
initModals()
initSliders() */

// можно так экспортировать все сущности
// import logCat, { a, b, c } from './constants.js'
// а можно так экспортировать все сущности
import * as constants from './constants.js'

console.log(constants.a)
console.log(constants.b)
console.log(constants.c)

constants.default()

console.log(constants)
