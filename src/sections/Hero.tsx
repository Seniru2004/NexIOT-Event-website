"use client";

import ThrineModel from "@/components/ThrineModel";
import LiquidGrid from "@/components/LiquidGrid";


export default function Hero(){

return (

<section
className="
relative
h-screen
overflow-hidden
bg-black
"
>


{/* ORIGINAL ORIGINKIT BACKGROUND */}

<div
className="
absolute
inset-0
z-0
"
>

<LiquidGrid
    mode="dots"
    background="#000000"
    glowColor="#A7800A"
    lineColor="#FFFFFF4D"
    cellSize={16}
    intensity={100}
/>

</div>



{/* CONTENT */}

<div
className="
relative
z-10
h-full
container
mx-auto
grid
grid-cols-2
items-center
px-10
"
>


{/* LEFT SIDE */}

<div
className="
text-white
"
>


<h1
className="
text-7xl
font-bold
"
>

NexIOT

</h1>


<h2
className="
mt-5
text-3xl
text-yellow-500
"
>

Innovate. Connect. Transform.

</h2>



<p
className="
mt-6
max-w-xl
text-white/70
text-lg
"
>

A next-generation IoT innovation platform
bringing together technology enthusiasts,
developers, and innovators to shape the future
of connected systems.

</p>



<button
className="
mt-8
px-8
py-4
rounded-full
bg-yellow-500
text-black
font-semibold
hover:scale-105
transition
"
>

Register Now

</button>


</div>





{/* RIGHT SIDE 3D MODEL */}

<div
className="
h-[650px]
"
>

<ThrineModel/>

</div>



</div>


</section>

)

}