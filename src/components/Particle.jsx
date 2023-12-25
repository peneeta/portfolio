import React from "react";
import Particles from "react-tsparticles";
import { useCallback } from "react"; 
import { loadSlim } from "tsparticles-slim"; 

function Particle() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: -1
                },
                style: {
                    position: "absolute",
                    top: 0,
                    left:0
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: "#4a7dff"
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.3,
                    },
                    size: {
                        value: {
                            min: 3,
                            max: 5,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        opacity: 0.4,
                        color: "#ffffff",
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                    },
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 10,
                            opacity: 0.8,
                        },
                        repulse: {
                            distance: 200,
                        },
                        push: {
                            quantity: 4,
                        },
                        remove: {
                            quantity: 2,
                        },
                    },
                },
            }}
        />
    )
}

export default Particle