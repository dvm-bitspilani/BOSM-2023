import React, { useEffect, useState, useCallback } from 'react'
import * as cossac from '../Styles/cossac.module.css'
import Cursor from "../images/cursor.png";
import { navigate } from "gatsby";
import LoaderVideo from "../images/loader.mp4";
import cossacLogo from "../images/logo.svg";
import Ayush from "../images/Ayush.png"
import Anushka from "../images/Anushka.png"
import Shirish from "../images/Shirish.png"
import Shreyas from "../images/shreyas.png"
import Syed from "../images/hani.png"
import AnushkaShukla from "../images/AnushkaShukla.png"
import Yashwasin from "../images/Yashwasin.png"
import Aditya from "../images/Aditya.png"
import gsap from 'gsap';



const Cossac = () => {

    const data = [
        {
            id: 1,
            name: "Shreyas Sesham",
            dept: "Department of Publications and Correspondence",
            photo: Shreyas,
        },
        {
            id: 2,
            name: "Shirish Kumaravel",
            dept: "Department of Reception and Accommodation",
            photo: Shirish,
        },
        {
            id: 3,
            name: "Ayush Bhandari",
            dept: "Department of Sponsorship and Marketing, BOSM",
            photo: Ayush,
        },
        {
            id: 4,
            name: "Anushka Patil",
            dept: "Department of Controls, BOSM",
            photo: Anushka,
        },
        {
            id: 5,
            name: "Syed Hani",
            dept: "Joint Sports Secretary",
            photo: Syed,
        },
        {
            id: 6,
            name: "Anushka Shukla",
            dept: "Joint Sports Secretary",
            photo: AnushkaShukla,
        },
        {
            id: 7,
            name: "Yashwasin Jain",
            dept: "Joint Sports Secretary",
            photo: Yashwasin,
        },
        {
            id: 8,
            name: "Aditya Sriram",
            dept: "Sports Secretary",
            photo: Aditya,
        },     
    ]
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    const [currentData, setCurrentData] = useState(data[0])

    const closeButtonHandler = () => {
        navigate("/");
        document.body.style.height = "1600vh";
    };

    const isBrowser = typeof window !== "undefined";

    // useEffect(() => {
    //     const cursor = document.getElementById("cursor");
    //     const cursorCircle = document.getElementById("cursorFollower");

    //     if (window.innerWidth > 1000) {
    //         window.onpointermove = (event) => {
    //             const { clientX, clientY } = event;

    //             cursor.style.display = "block";
    //             cursorCircle.style.display = "block";
    //             cursor.style.opacity = "1";
    //             cursorCircle.style.opacity = "1";
    //             cursor.style.left = `${clientX}px`;
    //             cursor.style.top = `${clientY}px`;

    //             let _clientX = clientX - 52;
    //             let _clientY = clientY - 52;

    //             cursorCircle.animate(
    //                 {
    //                     left: `${_clientX}px`,
    //                     top: `${_clientY}px`,
    //                 },
    //                 { duration: 500, fill: "forwards" }
    //             );
    //         };
    //     }
    //     setIsLoading(false);
    //     return () => {
    //         window.onpointermove = null;
    //         window.scrollTo(0, 0);
    //     };
    // }, [isLoading]);

    const [videoLoaded, setIsVideoLoaded] = useState(false)

    useEffect(() => {
        const videos = document.querySelectorAll("video");

        let videosLoaded = 0;

        const handleVideoLoad = () => {
            videosLoaded++;
            if (videosLoaded === videos.length) {
                setTimeout(() => {
                    setIsVideoLoaded(true);
                }, 2000);
            }
        };

        videos.forEach((video) => {
            if (video.readyState >= 2) {
                handleVideoLoad();
            } else {
                video.addEventListener("loadeddata", handleVideoLoad);
                video.addEventListener("error", handleVideoLoad);
            }
        });

        const cleanup = () => {
            videos.forEach((video) => {
                video.removeEventListener("loadeddata", handleVideoLoad);
                video.removeEventListener("error", handleVideoLoad);
            });
        };

        return cleanup;
    }, []);
    useEffect(() => {
        if (videoLoaded) {
            const assets = document.querySelectorAll(
                "img", "font", "style"
            );

            let assetsLoaded = 0;

            const handleAssetLoad = () => {
                assetsLoaded++;
                if (assetsLoaded === assets.length) {
                    setTimeout(() => {
                        setIsLoading2(false);
                    }, 2000);
                }
            };

            assets.forEach((asset) => {
                if (
                    asset.complete ||
                    asset.readyState === 4 ||
                    asset.tagName === "LINK"
                ) {
                    handleAssetLoad();
                } else {
                    asset.addEventListener("load", handleAssetLoad);
                    asset.addEventListener("error", handleAssetLoad);
                }
            });

            const cleanup = () => {
                assets.forEach((asset) => {
                    asset.removeEventListener("load", handleAssetLoad);
                    asset.removeEventListener("error", handleAssetLoad);
                });
            };

            return cleanup;
        }
    }, [videoLoaded]);

    useEffect(() => {
        document.body.style.height = "fit-content";
    }, []);


    const handleKeyDown = (event) => {
        const key = event.key;

        const keyToIndex = {
            '1': 0,
            '2': 1,
            '3': 2,
            '4': 3,
            '5': 4,
            '6': 5,
            '7': 6,
            '8': 7,
        };

        if (keyToIndex[key] !== undefined) {
            const newIndex = keyToIndex[key];

            const tl = gsap.timeline();

            tl
                .to("#dept", { x: -1500, opacity: 0, duration: 1 })

                .to("#name", { x: -800, opacity: 0, duration: 1 }, "-=1")
                // .to("#photo", { opacity: 0, duration: 1 }, "-=1")
                .call(() => {
                    setCurrentData(data[newIndex]);
                })
                .to("#dept", { x: 0, opacity: 1, duration: 1 })
                .to("#name", { x: 0, opacity: 1, duration: 1 }, "-=1")
            // .to("#photo", { opacity: 1, duration: 1 }, "-=1");
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <React.Fragment>
            {isLoading2 && <div className="loader" id="loader">
                <video autoPlay loop muted playsInline>
                    <source src={LoaderVideo} type="video/mp4" />
                </video>
            </div>}
            {/* <div className="cursor" id="cursor"></div>
            <div className="cursorFollower" id="cursorFollower">
                <img id="cursorImg" src={Cursor} alt=""></img>
            </div> */}
            <div className={cossac.wrapper}>
                <div className={cossac.logo}>
                    <img src={cossacLogo} alt=''></img>
                </div>
                <div id='dept' className={cossac.dept}>
                    <span>{currentData.dept}</span>
                </div>
                <div id='name' className={cossac.name}>
                    <span>{currentData.name}</span>
                </div>
                {data.map((item) => (
                    <div className={cossac.photo}>
                        <img
                            key={item.id}
                            src={item.photo}
                            alt=""
                            style={{ opacity: currentData.id === item.id ? 1 : 0, transition: 'opacity 2s ease' }}
                        />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Cossac
export const Head = () => (
    <>
        <title>CoSSAc and Sports Council | BOSM '23 </title>
        <link rel="icon" type="image/x-icon" href={cossacLogo} />
    </>
);