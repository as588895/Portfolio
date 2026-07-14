import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { certs } from "../data/certificates";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-gray-50 dark:bg-slate-900 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          Certifications
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Professional certifications earned through continuous learning.
        </p>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2,
            slideShadows: true,
            scale: 0.9,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="pb-12"
        >
          {certs.map((c, index) => (
            <SwiperSlide key={index} className="max-w-md">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden bg-[#0F172A] shadow-2xl"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">
                  <p className="text-orange-400 uppercase text-sm">
                    {c.org}
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {c.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {c.year}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-xl text-white font-medium"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}