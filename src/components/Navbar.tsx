"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import NeonGlowButton from "@/components/NeonGlowButton";


export default function Navbar(){


const [open,setOpen] = useState(false);



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
    duration:0.8
}}


className="
fixed

top-4
md:top-6

left-1/2
-translate-x-1/2

z-[9999]

w-[92%]
md:w-[90%]

max-w-6xl

"


>


<div

className="

flex
items-center
justify-between


px-5
md:px-8

py-3
md:py-4


rounded-2xl


bg-white/20

backdrop-blur-md

border
border-white/30


shadow-[0_4px_30px_rgba(0,0,0,0.1)]

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

w-9
h-9

md:w-10
md:h-10

"

>


<Image

src="/images/Logo.png"

alt="NexIOT Logo"

fill

className="
object-contain
scale-125
"

/>


</div>



<h1

className="
text-white

font-bold

text-lg
md:text-xl

tracking-wide

"

>



</h1>



</div>





{/* DESKTOP LINKS */}

<div

className="

hidden

md:flex

items-center

gap-8

"

>


{
links.map((link)=>(


<motion.a

key={link}

whileHover={{

scale:1.05,

color:"#facc15"

}}


className="

text-white/80

text-sm

font-medium

cursor-pointer

transition

"

>

{link}

</motion.a>


))

}



<NeonGlowButton

label="Register"

padding="8px 24px"

rounded={100}

/>


</div>





{/* MOBILE MENU BUTTON */}

<button

className="

md:hidden

text-white

text-2xl

"

onClick={()=>setOpen(!open)}

>

{open ? "✕" : "☰"}

</button>




</div>






{/* MOBILE MENU */}

{

open &&

<motion.div

initial={{
opacity:0,
y:-10
}}

animate={{
opacity:1,
y:0
}}

className="

md:hidden

mt-3

rounded-2xl

bg-black/70

backdrop-blur-xl

border

border-white/20

p-6

"

>


<div

className="

flex

flex-col

gap-5

items-center

"

>


{
links.map((link)=>(

<a

key={link}

className="

text-white/80

text-sm

"

>

{link}

</a>

))

}



<NeonGlowButton

label="Register"

padding="8px 24px"

rounded={100}

/>


</div>


</motion.div>


}



</motion.nav>


)

}