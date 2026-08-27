"use client";

import { useEffect, useRef } from "react";

const MODEL_SRC =
  "https://pub-eef027e83d7c4fc7aa28c9dcd06d7f89.r2.dev/users/2e28fba6-a34f-46ea-bc33-0381e8460640/models/3e848f90bf3d32c2995951d1fa0000e1107a60ec6517ee7e06337985bbbfb93b.glb";

const SCRIPT_ID = "thrine-embed-script";


export default function ThrineModel() {

  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    const container = containerRef.current;

    if (!container) return;


    let cancelled = false;


    const loadModel = async () => {

      /*
       * Load the Thrine script ONLY ONCE.
       */
      let script = document.getElementById(
        SCRIPT_ID
      ) as HTMLScriptElement | null;


      if (!script) {

        script = document.createElement("script");

        script.id = SCRIPT_ID;

        script.type = "module";

        script.src = "https://www.thrine.app/embed/v1.js";

        document.head.appendChild(script);

      }


      /*
       * Wait until the custom element is available.
       */
      if (
        !customElements.get("model-embed")
      ) {

        await customElements.whenDefined(
          "model-embed"
        );

      }


      if (cancelled || !container) return;


      /*
       * Prevent duplicate model instances.
       */
      container.innerHTML = "";


      const model =
        document.createElement("model-embed");


      model.setAttribute(
        "src",
        MODEL_SRC
      );


      model.setAttribute(
        "alt",
        "NexIOT 3D Model"
      );


      model.style.width = "100%";

      model.style.height = "100%";

      model.style.display = "block";


      /*
       * Thrine configuration
       */
      const config =
        document.createElement("script");


      config.type =
        "application/json";


      config.textContent =
        JSON.stringify({

          version: 1,


          model: {
            scale: 1
          },


          background: {
            enabled: false,
            color: "#0a0a0f"
          },


          camera: {
            fov: 45,
            height: 9,
            distance: 100
          },


          lighting: {
            brightness: 100,
            rotation: 0,
            fill: 0
          },


          preset: {

            type: "heatmap",

            params: {

              cool: "#2b1d7a",

              mid: "#ff5a1f",

              hot: "#fff3b0",

              contour: 55,

              relief: 70,

              innerGlow: 45,

              outerGlow: 0,

              angle: 45,

              grain: 20,

              speed: 40,

              scale: 100

            },

            seed: 24301

          },


          animation: {

            enabled: true,

            entries: [

              {

                id: "entrance",

                type: "entrance",

                enabled: true,

                trigger: "appear",

                params: {

                  duration: 0.9,

                  rise: 35,

                  scale: 80,

                  tilt: 0,

                  ease: 100,

                  overshoot: true

                }

              }

            ]

          },


          interactions: {

            sensitivity: 50,

            momentum: 50,

            draggable: true,

            zoom: true,

            zoomRange: 50

          }

        });


      model.appendChild(config);

      container.appendChild(model);

    };


    loadModel();


    return () => {

      cancelled = true;


      /*
       * Remove ONLY this model.
       * Do NOT remove the global Thrine script.
       */
      if (container) {

        container.innerHTML = "";

      }

    };


  }, []);


  return (

    <div

      ref={containerRef}

      className="
        w-full
        h-full
        overflow-hidden
      "

    />

  );

}