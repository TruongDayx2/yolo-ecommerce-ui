import React from "react";
import { Link } from "react-router-dom";

import Grid from "./Grid";
import logo from "../assets/images/Logo-2.png"
//import Logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about",
    },
    {
        display: "Liên hệ",
        path: "/about",
    },
    {
        display: "Tuyển dụng",
        path: "/about",
    },
    {
        display: "Tin tức",
        path: "/about",
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about",
    },
];

const footerCustomerLinks = [
    {
        display: "Chính sách đối trả",
        path: "/about",
    },
    {
        display: "Chính sách bảo hành",
        path: "/about",
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <Grid col={4} mdCol={2} smCol={1} gap={10}>
                <div>
                    <div className="footer__title">Tổng đài hỗ trợ</div>
                    <div className="footer__content">
                        <p>
                            Liên hệ đặt hàng: <strong>0123456789</strong>
                        </p>
                        <p>
                            Thắc mắc đặt hàng: <strong>0123456789</strong>
                        </p>
                        <p>
                            Gợi ý, khiếu nại: <strong>0123456789</strong>
                        </p>
                    </div>
                </div>
                {/* About us  */}
                <div>
                    <div className="footer__title">Về Yolo</div>
                    <div className="footer__content">
                        {footerAboutLinks.map((item, index) => (
                            <p key={index}>
                                <Link to={item.path}>{item.display}</Link>
                            </p>
                        ))}
                    </div>
                </div>
                {/* About Customer  */}
                <div>
                    <div className="footer__title">Chăm sóc khách hàng</div>
                    <div className="footer__content">
                        {footerCustomerLinks.map((item, index) => (
                            <p key={index}>
                                <Link to={item.path}>{item.display}</Link>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="footer__about">
                    <p>
                        <Link to="/">
                            <img src={logo} className="footer__logo" alt=""/>
                        </Link>
                    </p>
                    <p>
                        Với thông điệp "Refined Life", YOLO mong muốn đem đến cho khách hàng một lối sống tinh gọn bằng các sản phẩm thời trang tinh tế.
                    </p>
                </div>
            </Grid>
        </footer>
    );
};

export default Footer;
