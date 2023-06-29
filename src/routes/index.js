//Search
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

//Layout
import { HeaderOnly } from "~/Components/Layouts";


//k can dang nhap
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout:HeaderOnly },
    { path: '/search', component: Search, layout:null },
]
//phai dang nhap
const privateRoutes = [
    
]

export { publicRoutes, privateRoutes}