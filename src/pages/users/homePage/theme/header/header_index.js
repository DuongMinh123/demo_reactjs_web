import { memo } from "react"
import "./home_header_style.scss"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiFillTwitterCircle } from "react-icons/ai";


const HomePageHeader = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col_6">trái</div>
                    <div className="col_6 header_top_right">
                        <ul>
                            <li>
                                <a href="">
                                    <AiOutlineFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <AiOutlineInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <AiOutlineLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <AiFillTwitterCircle />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <AiFillTwitterCircle />
                                </a>
                                <span>Đăng Nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(HomePageHeader);