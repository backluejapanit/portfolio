import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
    <>
        <h2 className="head-text">Để lại lời nhắn || offer tuyển dụng cho mình nhé 🤗 </h2>

        <div className="app__footer-cards">
            <div className="app__footer-card ">
                <img src={images.email} alt="email" />
                <a href="mailto:tranquocbao031094@gmail.com" className="p-text">tranquocbao031094@gmail.com</a>
            </div>
            <div className="app__footer-card">
                <img src={images.mobile} alt="phone" />
                <a href="tel:+84 (804) 176-3964" className="p-text">+84 (804) 176 3964</a>
            </div>
        </div>

        {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className="p-text" type="text" placeholder="Họ tên" name="username" value={username} onChange={handleChangeInput} />
                </div>
                <div className="app__flex">
                    <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea
                        className="p-text"
                        placeholder="Nội dung"
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Gửi tin nhắn' : 'Nội đung đang được gửi đi'}</button>
            </div>
        ) : (
        <div>
            <h3 className="head-text">
            Cảm ơn sự phản hồi của bạn !
            </h3>
        </div>
        )}
    </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);