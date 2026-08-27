"use client";

import ThrineModel from "@/components/ThrineModel";
import LiquidGrid from "@/components/LiquidGrid";
import NeonGlowButton from "@/components/NeonGlowButton";


export default function Hero(){

return (

<section
className="
relative
min-h-screen
overflow-hidden
bg-black
flex
items-center
"
>


{/* BACKGROUND */}

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

container
mx-auto

grid
grid-cols-1
md:grid-cols-2

items-center

gap-10

px-5
md:px-10

py-20

"

>





{/* LEFT CONTENT CARD */}

<div

className="
relative

w-full

h-[420px]

sm:h-[450px]

rounded-3xl

overflow-hidden

border

border-white/20

order-first

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

{/* DotImageReveal goes here */}

</div>





{/* OVERLAY */}

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

p-6

sm:p-10

h-full

flex

flex-col

justify-center

text-center

md:text-left

"

>


<h1

className="
text-white

text-5xl

sm:text-6xl

md:text-7xl

font-bold

leading-tight

"

>

NexIOT

</h1>



<h2

className="
mt-3

text-xl

sm:text-2xl

md:text-3xl

text-yellow-400

"

>

Innovate. Connect. Transform.

</h2>




<p

className="
mt-5

text-sm

sm:text-base

max-w-md

mx-auto

md:mx-0

text-white/70

leading-relaxed

"

>

A next-generation IoT innovation platform bringing together technology enthusiasts, developers, and innovators to shape the future of connected systems.

</p>





<div

className="
mt-8

flex

justify-center

md:justify-start

"

>

<NeonGlowButton

label="Register"

/>

</div>



</div>


</div>







{/* 3D MODEL */}

<div

className="

h-[280px]

sm:h-[450px]

md:h-[650px]


order-last

"

>


<ThrineModel/>


</div>





</div>



</section>

)

}