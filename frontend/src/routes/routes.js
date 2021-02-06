import { Route, Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";


const Routes = () => (
    <Switch>
      <Route exact path="/" strict component={HomeScreen} />
      {/* <Route exact path="/page/:pageNumber/size/:pageSize" strict component={HomeScreen} />
      <Route exact path="/product/:productId" strict component={ProductScreen} />
      <Route exact path="/product/:productId/edit" strict component={ProductEditScreen} />
      <Route exact path="/cart/:productId?" strict component={CartScreen} />
      <Route exact path="/signin" strict component={SigninScreen} />
      <Route exact path="/register" strict component={RegisterScreen} />
      <Route exact path="/shipping" strict component={ShippingAddressScreen} />
      <Route exact path="/payment" strict component={PaymentMethodScreen} />
      <Route exact path="/placeorder" strict component={PlaceOrderScreen} />
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
      <Route component={Error404} /> */}
    </Switch>
  );
  
  export default Routes;