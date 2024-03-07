import {memo} from "react"
import HomePageHeader from "../header/header_index"
import HomePageFooter from "../footer/footer_index"

const MasterLayout = ({children, ...props}) => {
    return (<div {...props}>
        <HomePageHeader/>
        {children}
        <HomePageFooter/>
        </div>);
}

export default memo(MasterLayout);