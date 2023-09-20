import React, { useEffect, useState } from 'react'
import Cursor from "../images/cursor.png";
import { navigate } from "gatsby";
import * as dev from "../Styles/developers.module.css";
import logo from "../images/logo.svg";
import LoaderVideo from "../images/loader.mp4";
import closeBtn from "../images/arrow.svg";
import Figma from "../images/Figma.png"
import ReactIcon from "../images/React.png"
import Python from "../images/Python.png"
import DevCard from '../Components/DevCard';
import FrontCard from "../images/FrontCard.png";
import BackCard from "../images/BackCard.png";
import DesignCard from "../images/DesignCard.png";
import Sunpreet from "../images/Sunpreet.png"
import { useRef } from 'react';
import gsap from 'gsap';



const Developers = () => {

    const FrontTeam = [
        {
            id: 1,
            name: "LUV GUPTA",
            desc: "",
            image: Sunpreet,
            linkedin: "https://www.linkedin.com/in/luv-guptaa/",
            github: "https://github.com/LuvGuptaa",
            instagram: "https://www.instagram.com/luv_guptaa_/",
            behance: "",
            jersey: "98",
            hostel: "SK",
        },
        {
            id: 2,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 3,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 4,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 5,
            name: "SUNPREET BRAR",
            desc: "THINKIN OUT LOUD",
            image: Sunpreet,
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "09",
            hostel: "RM",
        },
    ]
    const BackTeam = [
        {
            id: 1,
            name: "LUV GUPTA",
            desc: "",
            image: Sunpreet,
            linkedin: "https://www.linkedin.com/in/luv-guptaa/",
            github: "https://github.com/LuvGuptaa",
            instagram: "https://www.instagram.com/luv_guptaa_/",
            behance: "",
            jersey: "98",
            hostel: "SK",
        },
        {
            id: 2,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 3,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 4,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 5,
            name: "SUNPREET BRAR",
            desc: "THINKIN OUT LOUD",
            image: Sunpreet,
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "09",
            hostel: "RM",
        },
    ]
    const DesignTeam = [
        {
            id: 1,
            name: "LUV GUPTA",
            desc: "",
            image: Sunpreet,
            linkedin: "https://www.linkedin.com/in/luv-guptaa/",
            github: "https://github.com/LuvGuptaa",
            instagram: "https://www.instagram.com/luv_guptaa_/",
            behance: "",
            jersey: "98",
            hostel: "SK",
        },
        {
            id: 2,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 3,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 4,
            name: "",
            desc: "",
            image: "",
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "",
            hostel: "",
        },
        {
            id: 5,
            name: "SUNPREET BRAR",
            desc: "THINKIN OUT LOUD",
            image: Sunpreet,
            linkedin: "",
            github: "",
            instagram: "",
            behance: "",
            jersey: "09",
            hostel: "RM",
        },
    ]

    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    const closeButtonHandler = () => {
        navigate("/");
        document.body.style.height = "1600vh";
    };

    const isBrowser = typeof window !== "undefined";

    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const cursorCircle = document.getElementById("cursorFollower");

        if (window.innerWidth > 1000) {
            window.onpointermove = (event) => {
                const { clientX, clientY } = event;

                cursor.style.display = "block";
                cursorCircle.style.display = "block";
                cursor.style.opacity = "1";
                cursorCircle.style.opacity = "1";
                cursor.style.left = `${clientX}px`;
                cursor.style.top = `${clientY}px`;

                let _clientX = clientX - 52;
                let _clientY = clientY - 52;

                cursorCircle.animate(
                    {
                        left: `${_clientX}px`,
                        top: `${_clientY}px`,
                    },
                    { duration: 500, fill: "forwards" }
                );
            };
        }
        setIsLoading(false);
        return () => {
            window.onpointermove = null;
            window.scrollTo(0, 0);
        };
    }, [isLoading]);


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



    // const handleFront = () => {
    //     const radius = 100; // Adjust the radius as needed
    //     const angleStep = (2 * Math.PI) / numberOfCards; // Divide the circle into equal parts based on the number of cards

    //     // Iterate over each cardWrapper and animate it to its position on the circle
    //     cardWrappers.forEach((cardWrapper, index) => {
    //         const angle = index * angleStep;
    //         const x = radius * Math.cos(angle);
    //         const y = radius * Math.sin(angle);

    //         // Use GSAP to animate the cardWrapper
    //         gsap.to(cardWrapper, {
    //             x,
    //             y,
    //             duration: 0.5, // Adjust the duration as needed
    //             ease: 'power2.out', // Choose an easing function
    //         });
    //     });
    // }

    return (
        <React.Fragment>
            {isLoading2 && <div className="loader" id="loader">
                <video autoPlay loop muted playsInline>
                    <source src={LoaderVideo} type="video/mp4" />
                </video>
            </div>}
            <div className="cursor" id="cursor"></div>
            <div className="cursorFollower" id="cursorFollower">
                <img id="cursorImg" src={Cursor} alt=""></img>
            </div>
            <div className={dev.section}>
                <div className={dev.header}>
                    <img
                        alt=""
                        src={closeBtn} onClick={closeButtonHandler} aria-hidden="true"
                    />
                    <h2>
                        Developers
                    </h2>
                </div>
                <div className={dev.teams}>
                    <div className={dev.design}>
                        <img className={dev.devTeam} src={Figma} alt=''></img>
                        {DesignTeam.map(team =>
                            <DevCard key={team.id} team={team} card={DesignCard} strip={<svg width="130" height="715" viewBox="0 0 130 715" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.55174 88.9999C44.1123 63.162 98.2393 7.5 129.955 0.595703C129.955 108.218 129.955 714.144 129.955 714.144H0.55168C0.55168 714.144 0.549618 129.999 0.55174 88.9999Z" fill="url(#paint0_linear_3838_613)" fill-opacity="0.71" />
                                <defs>
                                    <linearGradient id="paint0_linear_3838_613" x1="65.2539" y1="455.553" x2="65.2539" y2="627.236" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#543E8F" />
                                        <stop offset="1" stopColor="#543E8F" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>} linear1="#BAA3E4" linear2="#B69FE0" linear3="#AC94D7" barColor="#77639A" fontColor="#AF9CDB" iconColor="#AF9CDB" teamName="DESIGN" />
                        )}
                    </div>
                    <div className={dev.front}>
                        <img className={dev.devTeam} src={ReactIcon} alt=''></img>
                        {FrontTeam.map((team)=>
                                <DevCard key={team.id} team={team} card={FrontCard} strip={<svg width="131" height="709" viewBox="0 0 131 709" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.79051 88.4042C44.3511 62.5662 100.938 9.39561 130.194 0C130.194 107.622 130.194 708.144 130.194 708.144H0.790448C0.790448 708.144 0.788389 129.403 0.79051 88.4042Z" fill="url(#paint0_linear_3838_562)" fill-opacity="0.71" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3838_562" x1="65.4916" y1="449.552" x2="65.4916" y2="621.235" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#234164" />
                                            <stop offset="1" stopColor="#234164" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>} linear1="#8ACFED" linear2="#43A1CA" linear3="#124A62" barColor="#43A1CA" fontColor="#76B7CC" iconColor="#76B7CC" teamName="FRONT END"/>
                        )}
                    </div>
                    <div className={dev.back}>
                        <img className={dev.devTeam} src={Python} alt=''></img>
                        {BackTeam.map(team =>
                            <DevCard key={team.id} team={team} card={BackCard} strip={<svg width="131" height="716" viewBox="0 0 131 716" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.67137 88.4137C44.232 62.5758 100.819 9.40514 130.075 0.00952148C130.075 107.632 130.075 715.144 130.075 715.144H0.671307C0.671307 715.144 0.669248 129.413 0.67137 88.4137Z" fill="url(#paint0_linear_3838_530)" fill-opacity="0.71" />
                                <defs>
                                    <linearGradient id="paint0_linear_3838_530" x1="65.3725" y1="456.551" x2="65.3725" y2="628.234" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#164125" />
                                        <stop offset="1" stopColor="#164125" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>} linear1="#A1DEA3" linear2="#9FE0A9" linear3="#85CC74" barColor="#11A491" fontColor="#A1DEA3" iconColor="#A1DEA3" teamName="BACK END" />
                        )}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Developers;

export const Head = () => (
    <>
        <title>Developers | BOSM '23 </title>
        <link rel="icon" type="image/x-icon" href={logo} />
    </>
);