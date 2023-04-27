import HomePage from './components/HomePage.vue'

//for login & register items
import LoginPage from './components/LoginPage.vue'
import SigninPage from './components/SigninPage.vue'

//for carousel items
import ItemPage from './components/ItemPage.vue'
import CarouselPage from './components/Carousel/CarouselPage.vue'
import CarouselOne from './components/Carousel/CarouselOne.vue'
import CarouselTwo from './components/Carousel/CarouselTwo.vue'
import CarouselThree from './components/Carousel/CarouselThree.vue'
import FooterPage from './components/FooterPage.vue'
import ShoesPage from './components/ShoesPage.vue'

//for mobiles items
import SamsungPage from './components/Mobile/SamsungPage.vue'
import NokiaPage from './components/Mobile/NokiaPage.vue'
import ApplePage from './components/Mobile/ApplePage.vue'
import OppoPage from './components/Mobile/OppoPage.vue'
import RedmiPage from './components/Mobile/RedmiPage.vue'
import VivoPage from './components/Mobile/VivoPage.vue'

//for top items
import GroceryPage from './components/Top/GroceryPage.vue'
import AppliancePage from './components/Top/AppliancePage.vue'
import ElectronicPage from './components/Top/ElectronicPage.vue'
import FashionPage from './components/Top/FashionPage.vue'
import ToysPage from './components/Top/ToysPage.vue'
import MobilePage from './components/Top/MobilePage.vue'


//for shoes items
import AdidasPage from './components/Shoes/AdidasPage.vue'
import NikePage from './components/Shoes/NikePage.vue'
import PandasPage from './components/Shoes/PandasPage.vue'
import SparkPage from './components/Shoes/SparkPage.vue'
import SportsPage from './components/Shoes/SportsPage.vue'
import VelcroPage from './components/Shoes/VelcroPage.vue'

//for laptop items
import AppleLaptopPage from './components/Laptop/AppleLaptopPage.vue'
import AsusPage from './components/Laptop/AsusPage.vue'
import DellPage from './components/Laptop/DellPage.vue'
import HpPage from './components/Laptop/HpPage.vue'
import LenovoPage from './components/Laptop/LenovoPage.vue'
import MicrosoftPage from './components/Laptop/MicrosoftPage.vue'


//for cart items
import CartPage from './components/Cart/CartPage.vue'
import ShowcartPage from './components/Cart/ShowcartPage.vue'

//for checkout item
import CheckoutPage from './components/Checkout/CheckoutPage.vue'
import StripPage from './components/Checkout/StripPage.vue'
import CancelPage from './components/Checkout/CancelPage.vue'
import SuccessPage from './components/Checkout/SuccessPage.vue'

import ViewPage from './components/ViewPage.vue'
import ViewsecondPage from './components/ViewsecondPage.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/viewpayment',
        name:'ViewPage',
        component:ViewPage
    },
    {
        path:'/viewpaymentsecond',
        name:'ViewsecondPage',
        component:ViewsecondPage
    },
    {
    path:'/',
    name:'HomePage',
    component:HomePage
    },
    {
        path:'/signup',
        name:'LoginPage',
        component:LoginPage
    },
    {
        path:'/login',
        name:'SigninPage',
        component:SigninPage
    },
    {
        path:'/items',
        name:'ItemPage',
        component:ItemPage
    },
    {
        path:'/carousel',
        name:'CarouselPage',
        component:CarouselPage
    },
    {
        path:'/carouseltone',
        name:'CarouselOne',
        component:CarouselOne
    },
    {
        path:'/carouseltwo',
        name:'CarouselTwo',
        component:CarouselTwo
    },
    {
        path:'/carouselthree',
        name:'CarouselThree',
        component:CarouselThree
    },
    {
        path:'/footerpage',
        name:'FooterPage',
        component:FooterPage
    },
    {
        path:'/shoes',
        name:'ShoesPage',
        component:ShoesPage
    },

//for mobile phone items
    {
        path:'/samsung',
        name:'SamsungPage',
        component:SamsungPage
    },
    {
        path:'/apple',
        name:'ApplePage',
        component:ApplePage
    },
    {
        path:'/oppo',
        name:'OppoPage',
        component:OppoPage
    },
    {
        path:'/redmi',
        name:'RedmiPage',
        component:RedmiPage
    },
    {
        path:'/nokia',
        name:'NokiaPage',
        component:NokiaPage
    },
    {
        path:'/vivo',
        name:'VivoPage',
        component:VivoPage
    },

//for top items
    {
        path:'/grocery',
        name:'GroceryPage',
        component:GroceryPage
    },
    {
        path:'/appliance',
        name:'AppliancePage',
        component:AppliancePage
    },
    {
        path:'/electronic',
        name:'ElectronicPage',
        component:ElectronicPage
    },
    {
        path:'/fashion',
        name:'FashionPage',
        component:FashionPage
    },
    {
        path:'/mobile',
        name:'MobilePage',
        component:MobilePage
    },
    {
        path:'/toys',
        name:'ToysPage',
        component:ToysPage
    },

    //for shoes items
    {
        path:'/adidas',
        name:'AdidasPage',
        component:AdidasPage
    },
    {
        path:'/nike',
        name:'NikePage',
        component:NikePage
    },
    {
        path:'/panda',
        name:'PandasPage',
        component:PandasPage
    },
    {
        path:'/spark',
        name:'SparkPage',
        component:SparkPage
    },
    {
        path:'/sport',
        name:'SportsPage',
        component:SportsPage
    },
    {
        path:'/velcro',
        name:'VelcroPage',
        component:VelcroPage
    },

    //for laptop item
    {
        path:'/applelaptop',
        name:'AppleLaptopPage',
        component:AppleLaptopPage
    },
    {
        path:'/asus',
        name:'AsusPage',
        component:AsusPage
    },
    {
        path:'/dell',
        name:'DellPage',
        component:DellPage
    },
    {
        path:'/hp',
        name:'HpPage',
        component:HpPage
    },
    {
        path:'/lenovo',
        name:'LenovoPage',
        component:LenovoPage
    },
    {
        path:'/microsoft',
        name:'MicrosoftPage',
        component:MicrosoftPage
    },

    //for cart item
    {
        path:'/details',
        name:'CartPage',
        component:CartPage
    },
    {
        path:'/cart',
        name:'ShowcartPage',
        component:ShowcartPage
    },

    //for checkout item
    {
        path:'/checkout',
        name:'CheckoutPage',
        component:CheckoutPage
    },
    {
        path:'/checkouterror',
        name:'CancelPage',
        component:CancelPage
    },
    {
        path:'/checkoutsuccess',
        name:'SuccessPage',
        component:SuccessPage
    },
    {
        path:'/checkoutstrip',
        name:'StripPage',
        component:StripPage
    }
    
  
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;