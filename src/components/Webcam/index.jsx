import "./index.less";
import React, { useRef, useEffect } from "react";

const Webcam = () => {
    const videoRef = useRef(null);


    const getVideo = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            console.log(stream);
            videoRef.current.srcObject = stream;
            // videoRef.current.play();
            videoRef.current.pause();
            stream.getTracks().forEach(track => track.stop());
        } catch (error) {
            console.error("Error accessing camera:", error);
            alert("Error accessing camera or camera in use. Please ensure you have granted permission.");
        }
    };

    useEffect(() => {
        getVideo();
    }, []);


    return (
        <div className="Webcam">
            <video ref={videoRef} />
        </div>
    );
};

export default Webcam;