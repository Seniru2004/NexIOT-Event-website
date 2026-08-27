"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function About(){


return (

<section

className="
relative
bg-black
text-white

py-20
md:py-28

overflow-hidden

"

>


<div

className="
container
mx-auto

px-6
md:px-10

grid

grid-cols-1
md:grid-cols-2

items-center

gap-12

"

>


{/* LEFT CONTENT */}

<motion.div

initial={{
opacity:0,
x:-50
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

text-white/70

text-base
md:text-lg

leading-relaxed

max-w-xl

"

>

NexIOT is a next-generation IoT innovation platform bringing together technology enthusiasts, developers, and innovators to explore the future of connected systems.

</p>



<p

className="

mt-4

text-white/70

text-base
md:text-lg

leading-relaxed

max-w-xl

"

>

Through collaboration and emerging technologies, NexIOT aims to inspire creative solutions and build smarter, connected experiences for the future.

</p>



</motion.div>







{/* RIGHT IMAGE */}

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

h-[300px]

md:h-[450px]

rounded-3xl

overflow-hidden

border

border-white/20

"

>


<Image

src="/images/about.png"

alt="About NexIOT"

fill

className="

object-cover

"

/>



{/* overlay */}

<div

className="

absolute

inset-0

bg-black/30

"

/>


</motion.div>



</div>


</section>


)

}