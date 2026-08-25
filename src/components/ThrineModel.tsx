"use client";

import { useEffect, useRef } from "react";


export default function ThrineModel() {

  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    if (!containerRef.current) return;


    const script = document.createElement("script");

    script.type = "module";
    script.src = "https://www.thrine.app/embed/v1.js";

    document.head.appendChild(script);



    const model = document.createElement("model-embed");

    model.setAttribute(
      "src",
      "https://pub-eef027e83d7c4fc7aa28c9dcd06d7f89.r2.dev/users/2e28fba6-a34f-46ea-bc33-0381e8460640/models/3e848f90bf3d32c2995951d1fa0000e1107a60ec6517ee7e06337985bbbfb93b.glb"
    );


    model.setAttribute(
      "alt",
      "NexIOT 3D Model"
    );


    model.style.width="100%";
    model.style.height="100%";
    model.style.display="block";



    const config = document.createElement("script");

    config.type="application/json";


    config.textContent = JSON.stringify({

      version:1,

      model:{
        scale:1
      },


      background:{
        enabled:false,
        color:"#0a0a0f"
      },


      camera:{
        fov:45,
        height:9,
        distance:100
      },


      lighting:{
        brightness:100,
        rotation:0,
        fill:0
      },


      preset:{
        type:"heatmap",

        params:{
          cool:"#2b1d7a",
          mid:"#ff5a1f",
          hot:"#fff3b0",
          contour:55,
          relief:70,
          innerGlow:45,
          outerGlow:0,
          angle:45,
          grain:20,
          speed:40,
          scale:100
        },

        seed:24301
      },


      animation:{
        enabled:true,

        entries:[
          {
            id:"entrance",
            type:"entrance",
            enabled:true,
            trigger:"appear",

            params:{
              duration:0.9,
              rise:35,
              scale:80,
              tilt:0,
              ease:100,
              overshoot:true
            }
          }
        ]
      },


      interactions:{
        sensitivity:50,
        momentum:50,
        draggable:true,
        zoom:true,
        zoomRange:50
      }


    });


    model.appendChild(config);


    containerRef.current.appendChild(model);



    return()=>{

  if(containerRef.current){

    containerRef.current.innerHTML="";

  }

};


  }, []);



  return(

    <div
      ref={containerRef}
      className="
      w-full
      h-full
      "
    />

  );

}