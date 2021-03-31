import { RouteConfig } from "vue-router";

import ProductMainEntry from "../../views/Products/ProductMainEntry.vue";

import ProductHomeIndex from "./views/ProductHomeIndex/ProductHomeIndex.vue";
import CartCheckout from "./views/CartCheckout/CartCheckout.vue";
import ProductImport from "./views/ProductImport/ProductImport.vue";
import ProductOrders from "./views/ProductOrders/ProductOrders.vue";
import EditableProductForm from "./views/EditableProductForm/EditableProductForm.vue";

export const routes: RouteConfig[] = [
    {
        path: "/",
        name: "ProductMainEntry",
        component: ProductMainEntry,
        children: [
            {
                path: "/cart",
                name: "CartCheckout",
                component: CartCheckout,
            },
            {
                path: "/admin/products",
                name: "ProductImport",
                component: ProductImport,
            },
            {
                path: "/admin/product-form/:productId?",
                name: "EditableProductForm",
                component: EditableProductForm,
            },
            {
                path: "/admin/orders",
                name: "ProductOrders",
                component: ProductOrders,
            },
            // default
            {
                path: "/*",
                name: "ProductHomeIndex",
                component: ProductHomeIndex,
            },
        ],
    },
];