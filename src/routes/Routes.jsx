

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

// const Routes = () => {
//     return (
//         <Ros>
//             <Route path="/" exact element={<Home/>} />
//             <Route path="/Catalog" element={<Catalog/>} />
//             <Route path="/Catalog/:slug" element={<Product/>} />
//             <Route path="/Cart" element={<Cart/>} />
//         </Ros>
//     );
// };

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Catalog', component: Catalog },
    { path: '/Catalog/:slug', component: Product },
    { path: '/Cart', component: Cart},
];

// cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };


