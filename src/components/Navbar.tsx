"use client";

import { motion } from "framer-motion";


export default function Navbar(){

const links = [
    "Home",
    "About",
    "Schedule",
    "Speakers",
    "Sponsors"
];


return(

<motion.nav

initial={{
    y:-80,
    opacity:0
}}

animate={{
    y:0,
    opacity:1
}}

transition={{
    duration:0.8,
    ease:"easeOut"
}}


className="
fixed
top-6
left-1/2
-translate-x-1/2
z-50

w-[92%]
max-w-7xl

"

>


<div

className="

flex
items-center
justify-between

px-8
py-4

rounded-3xl

bg-black/50
backdrop-blur-xl

border
border-yellow-500/20

shadow-[0_0_40px_rgba(234,179,8,0.12)]

"

>



{/* LOGO */}

<div
className="
flex
items-center
gap-3
"
>


<div

className="

relative

w-11
h-11

rounded-2xl

bg-yellow-500

flex
items-center
justify-center

text-black

font-black
text-xl

shadow-[0_0_25px_rgba(234,179,8,0.7)]

"

>

N

</div>



<div>

<h1

className="
text-white
font-bold
text-xl
tracking-wider
"

>

NexIOT

</h1>


<p

className="
text-yellow-500
text-[10px]
tracking-[0.35em]
uppercase
"

>

Innovation Summit

</p>


</div>


</div>







{/* LINKS */}

<div

className="
hidden
md:flex

items-center
gap-9
"

>


{
links.map((link)=>(


<motion.a

key={link}

whileHover={{
    y:-2
}}

className="

relative

text-white/70

text-sm

font-medium

cursor-pointer

group

"

>


{link}



<span

className="

absolute

left-0

-bottom-2

w-0

h-[2px]

bg-yellow-500

transition-all

group-hover:w-full

"

/>



</motion.a>


))

}



{/* REGISTER BUTTON */}


<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}


className="

ml-4

px-6
py-3

rounded-full

bg-yellow-500

text-black

font-semibold

text-sm

shadow-[0_0_25px_rgba(234,179,8,0.5)]

"

>

Register

</motion.button>



</div>



</div>


</motion.nav>


)

}