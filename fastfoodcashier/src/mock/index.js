import Mock from "mockjs"
import {offenGoods} from "./response/offenGoods"
import {type0Goods} from "./response/type0Goods"
Mock.mock(/\/offen/,"get",offenGoods);

Mock.mock(/\/typegoods/,"get",type0Goods)

export default Mock

