import { Route, Routes } from "react-router-dom";
import HomePage_index from "./pages/users/homePage/homePage_index";
import { ROUTERS } from "./utils/utils_routers";
import MasterLayout_index from "./pages/users/homePage/theme/masterLayout/masterLayout_index";
import ProfilePage_index from "./pages/users/profilePage/profilePage_index";


const renderUserRouter = () => {
    const userRouter = [{
        path: ROUTERS.USER.HOME,
        component: <HomePage_index />
    },
    {
        path: ROUTERS.USER.PROFILE,
        component: <ProfilePage_index />
    }
]

    return (
        <MasterLayout_index>
            <Routes>
                {
                    userRouter.map((item, key) => (<Route key={key} path={item.path} element={item.component}></Route>))
                }
            </Routes>
        </MasterLayout_index>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;