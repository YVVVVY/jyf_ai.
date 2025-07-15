import { Outlet } from "react-router-dom";
const Product = () => {
    return(
        <>
        <h1>产品列表</h1>
        {/* 二级路由的占位符 */}
        <Outlet />
        </>
    )
}

export default Product;