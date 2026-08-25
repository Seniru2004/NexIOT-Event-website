"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NeonGlowButton from "@/components/NeonGlowButton";


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
    duration:0.8
}}

className="
fixed
top-6
left-1/2
-translate-x-1/2

z-[9999]

w-[90%]
max-w-6xl

"

>


<div

className="

flex
items-center
justify-between


px-8
py-4


rounded-2xl


/* Glass Effect */

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
gap-4
"

>


{/* <Image

src="/images/Logo.png"

alt="NexIOT Logo"

width={50}

height={50}

/> */}
<div
className="
relative
w-10
h-10
overflow-visible
"
>

<Image
  src="/images/Logo.png"
  alt="NexIOT Logo"
  fill
  className="
  object-contain
  scale-150
  "
/>

</div>


<div>

<h1

className="
text-white
font-bold
text-xl
tracking-wide
"

>

</h1>


<p

className="
text-yellow-400
text-[10px]
uppercase
tracking-[0.3em]
"

>

</p>


</div>


</div>







{/* NAV LINKS */}

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





{/* REGISTER BUTTON */}

<NeonGlowButton
  label="Register"
  padding="8px 24px"
  rounded={100}
/>



</div>



</div>


</motion.nav>


)

}