import React, { useState, useEffect } from "react";
import "../Styles/Error.css"

export default function Error(props) {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        setImageSrc(URL.createObjectURL(props.img));        
    }, [props.img]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    return (
        <div className="backdrop" onClick={handleBackdropClick} aria-hidden="true" >
            <div className="error">
                <section style={{ 
                    backgroundImage: `url(${imageSrc})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {/* <img id="image" src={imageSrc} alt="Uploaded" /> */}
                </section>
                {/* <p>Your Uploaded Image.</p> */}
                <span className="previewBtnContainer">
                    <div onClick={props.onEditPhoto} aria-hidden="true" >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 15.5V16.9C22.5 18.8602 22.5 19.8403 22.1185 20.589C21.783 21.2475 21.2475 21.783 20.589 22.1185C19.8403 22.5 18.8602 22.5 16.9 22.5H7.1C5.13982 22.5 4.15972 22.5 3.41103 22.1185C2.75247 21.783 2.21703 21.2475 1.88148 20.589C1.5 19.8403 1.5 18.8602 1.5 16.9V15.5M17.8333 7.33333L12 1.5M12 1.5L6.16667 7.33333M12 1.5V15.5" stroke="#75ABB8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Edit
                    </div>
                    <div onClick={props.onClose} aria-hidden="true" >Back</div>
                </span>
            </div>
        </div>
    );
};
