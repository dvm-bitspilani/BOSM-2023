import React, { useState , useEffect} from "react";
import { navigate } from "gatsby";
import * as styles from "../Styles/Sponsors.module.css"
import "../Styles/developer.css"
import arrow from "../images/arrow.svg"
import Cursor from "../images/cursor.png";
import enerzal from "../images/sponsors/enerzal.png"
import easemytrip from "../images/sponsors/easemytrip.png"
import plum from "../images/sponsors/plum.png"
import LoaderVideo from "../images/loader.mp4"


export default function Sponsors() {

  const [isLoading, setIsLoading] = useState(true)
  const [sponsorsData, setSponsorsData] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch("https://bitsbosm.org/2023/wallet/sponsors");
        console.log(response)
        const data = await response.json();
        setSponsorsData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      }
    };
  
    fetchSponsors();
  }, []);

  const goBack = () => {
    navigate("/")
  }

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
    // setIsLoading(false);
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
            setIsLoading(false);
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

  console.log(sponsorsData["sponsors"])

  return (
    <>
    {isLoading && <div className="loader" id="loader">
        <video autoPlay loop muted playsInline>
        <source src={LoaderVideo} type="video/mp4" />
        </video>
    </div>}
    <div className="cursor" id="cursor"></div>
    <div className="cursorFollower" id="cursorFollower">
        <img id="cursorImg" src={Cursor} alt=""></img>
    </div>
    <div className={styles.bg}>
        <div className={styles["heading"]}>
            <img src={arrow} alt="logo" onClick={goBack}></img>
            <h1>Sponsors</h1>
            <img src={arrow} alt="" style={{opacity: '0', pointerEvents:'none'}}></img>
        </div>
        <div className={styles["sponsors"]}>
        {sponsorsData["sponsors"] && sponsorsData["sponsors"].map((sponsor, index) => (
          <div key={index} className={styles["sponsor"]}>
            <h1>{sponsor.category}</h1>
            <img src={sponsor.url} alt={sponsor.name} />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}