"use client";

import ThrineModel from "@/components/ThrineModel";
import LiquidGrid from "@/components/LiquidGrid";
import NeonGlowButton from "@/components/NeonGlowButton";



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


{/* LEFT CONTENT CARD */}

<div
className="
relative
w-full
h-[420px]
rounded-3xl
overflow-hidden
border
border-white/20
"
>


{/* IMAGE BACKGROUND */}

<div
className="
absolute
inset-0
z-0
"
>

{/* Put your Originkit image effect component here */}

</div>



{/* DARK OVERLAY */}

<div
className="
absolute
inset-0
bg-black/50
z-10
"
/>



{/* TEXT */}

<div
className="
relative
z-20
p-10
h-full
flex
flex-col
justify-center
"
>


<h1
className="
text-white
text-6xl
font-bold
"
>
NexIOT
</h1>


<h2
className="
mt-3
text-3xl
text-yellow-400
"
>
Innovate. Connect. Transform.
</h2>


<p
className="
mt-5
max-w-md
text-white/70
"
>
A next-generation IoT innovation platform bringing together technology enthusiasts, developers, and innovators to shape the future of connected systems.
</p>


<div className="mt-8">

<NeonGlowButton
label="Register"
/>

</div>


</div>


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