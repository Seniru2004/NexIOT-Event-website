"use client";

import PixelReveal from "@/components/PixelReveal";
import { motion } from "framer-motion";


export default function About(){


return (

<section

className="
relative
text-white

py-20
md:py-28

"


>


{/* GLASS CONTENT BOX */}

<div

className="

container

mx-auto


px-5
md:px-10


"

>


<div

className="

rounded-3xl

bg-black/50

backdrop-blur-xl

border

border-white/20


shadow-[0_0_40px_rgba(168,128,10,0.15)]


p-6
md:p-12


grid

grid-cols-1

md:grid-cols-2


items-center


gap-12


"

>





{/* LEFT */}

<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

viewport={{
once:true
}}

className="

text-center

md:text-left

"

>


<h2

className="

text-4xl

md:text-5xl

font-bold

"

>

About NexIOT

</h2>



<div

className="

mt-3

w-20

h-1

bg-yellow-400

mx-auto

md:mx-0

"

/>





<p

className="

mt-6

text-white/80

text-base

md:text-lg

leading-relaxed

"

>

NexIOT is a next-generation IoT innovation platform bringing together

<span className="text-yellow-400 font-semibold">

 <p>technology enthusiasts, developers, and innovators</p>

</span>

 to explore the future of connected systems.

</p>





<p

className="

mt-5

text-white/70

text-sm

md:text-lg

leading-relaxed

"

>

The Internet of Things continues to reshape industries and communities through

<span className="text-yellow-400 font-semibold">

 connected, data-driven solutions.

</span>


Recognizing the importance of IoT skills among students,

<span className="text-yellow-400 font-semibold">

 IET On Campus – NSBM Green University

</span>

 together with

<span className="text-yellow-400 font-semibold">

 Hackathon Hub

</span>

 brings this competition to encourage purposeful technology-driven problem solving.

</p>




<p

className="

mt-5

text-white/70

text-sm

md:text-lg

leading-relaxed

"

>

Participants are encouraged to design IoT solutions aligned with the 

<span className="text-yellow-400 font-semibold">

  United Nations Sustainable Development Goals (SDGs),

</span>

 strengthening creativity,

<span className="text-yellow-400 font-semibold">

 innovation, collaboration, and real-world impact.

</span>

</p>




</motion.div>








{/* IMAGE */}

<motion.div

initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}

viewport={{
once:true
}}


className="

relative

w-full

h-[280px]

sm:h-[350px]

md:h-[450px]


rounded-3xl

overflow-hidden


border

border-white/20

"

>


<PixelReveal

imageSrc="/images/image.png"

gridSize={18}

transitionColor="#000000"

edgeHeight={20}

direction="left"

transition={{
type:"tween",
duration:2,
ease:"easeInOut"
}}

/>


</motion.div>





</div>


</div>


</section>

)

}