import React, { useState, useEffect } from "react";
import "../Styles/Error.css"

export default function Error(props) {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        setImageSrc(URL.createObjectURL(props.img));        
    }, [props.img]);

    return (
        <div className="backdrop" onClick={props.onClose}>
            <div className="error">
                <img id="image" src={imageSrc} alt="Uploaded" />
                <p>Your Uploaded Image.</p>
                <div onClick={props.onClose}>Back</div>
            </div>
        </div>
    );
};
