import {Swiper,SwiperSlide} from "swiper/react";

import {EffectCoverflow,Pagination,Navigation} from "swiper/modules";

import {motion} from "framer-motion";

import "swiper/css";

import "swiper/css/effect-coverflow";

import "swiper/css/navigation";

import "swiper/css/pagination";

import {certs} from "../data/certificates";

export default function Certifications(){

return(

<section id="certifications" className="py-24">

<div className="max-w-7xl mx-auto">

<h1 className="text-5xl font-bold text-center mb-16">
Certificates
</h1>

<Swiper

effect={"coverflow"}

grabCursor={true}

centeredSlides={true}

slidesPerView={"auto"}

loop={true}

navigation

pagination={{clickable:true}}

coverflowEffect={{
rotate:0,
stretch:0,
depth:250,
modifier:2,
slideShadows:true,
scale:0.9
}}

modules={[EffectCoverflow,Pagination,Navigation]}

>

{

certs.map((c,index)=>(

<SwiperSlide

key={index}

className="max-w-md"

>

<motion.div

whileHover={{scale:1.03}}

className="rounded-3xl overflow-hidden bg-[#0F172A] shadow-2xl"

>

<img

src={c.image}

className="h-80 w-full object-cover"

/>

<div className="p-6">

<p className="uppercase text-orange-400 text-sm">

{c.org}

</p>

<h2 className="text-white text-3xl font-bold mt-2">

{c.title}

</h2>

<p className="text-gray-400 mt-2">

{c.year}

</p>

<div className="flex flex-wrap gap-2 mt-5">

{

c.tags.map(tag=>(

<span

key={tag}

className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"

>

{tag}

</span>

))

}

</div>

<a

href={c.link}

target="_blank"

className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl"

>

View Certificate

</a>

</div>

</motion.div>

</SwiperSlide>

))

}

</Swiper>

</div>

</section>

)

}