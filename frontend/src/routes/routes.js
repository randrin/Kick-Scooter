import { Route, Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/store/AboutScreen";
import SigninScreen from "../screens/store/auth/SigninScreen";
import CartScreen from "../screens/store/CartScreen";
import CheckoutScreen from "../screens/store/CheckoutScreen";
import ContactScreen from "../screens/store/ContactScreen";
import Error404Screen from "../screens/store/Error404Screen";
import FaqScreen from "../screens/store/FaqScreen";
import QuickViewScreen from "../screens/store/QuickViewScreen";


const Routes = () => (
    <Switch>
      <Route exact path="/" strict component={HomeScreen} />
      <Route exact path="/cart/:productId?" strict component={CartScreen} />
      <Route exact path="/checkout" strict component={CheckoutScreen} />
      <Route exact path="/signin" strict component={SigninScreen} />
      <Route exact path="/view" strict component={QuickViewScreen} />
      <Route exact path="/contact" strict component={ContactScreen} />
      <Route exact path="/about" strict component={AboutScreen} />
      <Route exact path="/faq" strict component={FaqScreen} />
      <Route component={Error404Screen} />
      {/* <Route exact path="/page/:pageNumber/size/:pageSize" strict component={HomeScreen} />
      <Route exact path="/product/:productId" strict component={ProductScreen} />
      <Route exact path="/product/:productId/edit" strict component={ProductEditScreen} />
      <Route exact path="/order/:orderId" strict component={OrderScreen} />
      <Route exact path="/orders/history" strict component={OrderHistoryScreeen} />
      <PrivateRoute exact path="/profile" strict component={ProfileScreen} />
      <PrivateRoute exact path="/map" strict component={MapScreen} />
      <AdminRoute exact path="/productlist" strict component={ProductListScreen} />
      <AdminRoute exact path="/productlist/page/:pageNumber/size/:pageSize" strict component={ProductListScreen} />
      <SellerRoute exact path="/productlist/seller" strict component={ProductListScreen} />
      <SellerOrAdminRoute exact path="/create/product" strict component={ProductCreateScreen} />
      <AdminRoute exact path="/orderlist" strict component={OrderListScreen} />
      <AdminRoute exact path="/userlist" strict component={UserListScreen} /> 
      <SellerRoute exact path="/orderlist/seller" strict component={OrderListScreen} /> 
      <AdminRoute exact path="/user/:userId/edit" strict component={UserEditScreen} />
      <Route exact path="/seller/:sellerId/page/:pageNumber/size/:pageSize" strict component={SellerScreen} />
      <Route exact path="/seller/:sellerId" strict component={SellerScreen} />
      <Route exact path="/search/name/:name?" strict component={SearchScreen} />
      <Route exact path="/search/category/:category" strict component={SearchScreen} />
      <Route exact path="/search/category/:category/name/:name" strict component={SearchScreen} />
      <Route exact path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/size/:pageSize/page/:pageNumber" strict component={SearchScreen} />
*/}
    </Switch>
  );
  
  export default Routes;