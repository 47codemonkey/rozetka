import BasePage from "./page_objects/BasePage.cy"
import Search from "./page_objects/SearchTest.cy"
import Filter from "./page_objects/FilterTest.cy"
import Choose from "./page_objects/ChooseProductTest.cy"
import Buy from "./page_objects/BuyProductTest.cy"
import Order from "./page_objects/OrderConfirmationTest.cy"

const basePage = new BasePage()
const search = new Search()
const filter = new Filter()
const choose = new Choose()
const buy = new Buy()
const order = new Order()

describe('Product Purchase Test', () => {

  it('Buy the product', () => {
      basePage.launchApplication()
      search.searchProduct()
      filter.filterProduct()
      choose.chooseProduct()
      buy.buyProduct()
      order.orderConfirmation()
  })

})