/* eslint-disable @next/next/no-img-element */
"use client";
import dm_img from "@/assets/digitalMarketing.png";
import ve_img from "@/assets/videoEditing.png";
import wd_img from "@/assets/webDevelopment.png";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { TbArrowBadgeDownFilled, TbArrowBadgeUpFilled } from "react-icons/tb";

export function OurServices() {
    return (
        <div>
            <h3 className="text-center font-extrabold text-3xl mb-5">
                Our <span className="text-primary">Services</span>
            </h3>
            <section className="flex flex-col sm:flex-row gap-5">
                <ServiceCard
                    title="Digital Marketing"
                    image={dm_img}
                    details="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet alias necessitatibus recusandae impedit. Itaque quas
                    laudantium, consequuntur aperiam dolorem doloremque, at
                    beatae tenetur consectetur reprehenderit a nostrum similique
                    iure quisquam ea! Doloremque beatae molestias commodi, natus
                    voluptatem est a laboriosam quae adipisci vitae praesentium
                    minima ut nesciunt, placeat esse illo maiores veniam!
                    Repudiandae recusandae corporis suscipit aliquam porro esse
                    doloribus repellendus! Vel ex id corrupti excepturi laborum!
                    Consequuntur voluptates amet repellat minima est ad alias
                    eum sunt sequi illum dolorem recusandae accusantium incidunt
                    illo facilis totam placeat dolore, ipsa aspernatur, quaerat
                    velit odit itaque molestias iure? Rem nemo ipsa minus?"
                />
                <ServiceCard
                    title="Video Editing"
                    image={ve_img}
                    details="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet alias necessitatibus recusandae impedit. Itaque quas
                    laudantium, consequuntur aperiam dolorem doloremque, at
                    beatae tenetur consectetur reprehenderit a nostrum similique
                    iure quisquam ea! Doloremque beatae molestias commodi, natus
                    voluptatem est a laboriosam quae adipisci vitae praesentium
                    minima ut nesciunt, placeat esse illo maiores veniam!
                    Repudiandae recusandae corporis suscipit aliquam porro esse
                    doloribus repellendus! Vel ex id corrupti excepturi laborum!
                    Consequuntur voluptates amet repellat minima est ad alias
                    eum sunt sequi illum dolorem recusandae accusantium incidunt
                    illo facilis totam placeat dolore, ipsa aspernatur, quaerat
                    velit odit itaque molestias iure? Rem nemo ipsa minus?"
                />
                <ServiceCard
                    title="Web Development"
                    image={wd_img}
                    details="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet alias necessitatibus recusandae impedit. Itaque quas
                laudantium, consequuntur aperiam dolorem doloremque, at
                beatae tenetur consectetur reprehenderit a nostrum similique
                iure quisquam ea! Doloremque beatae molestias commodi, natus
                voluptatem est a laboriosam quae adipisci vitae praesentium
                minima ut nesciunt, placeat esse illo maiores veniam!
                Repudiandae recusandae corporis suscipit aliquam porro esse
                doloribus repellendus! Vel ex id corrupti excepturi laborum!
                Consequuntur voluptates amet repellat minima est ad alias
                eum sunt sequi illum dolorem recusandae accusantium incidunt
                illo facilis totam placeat dolore, ipsa aspernatur, quaerat
                velit odit itaque molestias iure? Rem nemo ipsa minus?"
                />
            </section>
        </div>
    );
}

function ServiceCard({
    image,
    title,
    details,
}: {
    image?: StaticImageData;
    title?: string;
    details?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grow basis-1/3 h-80 rounded-2xl p-3 overflow-hidden bg-primary/10 relative">
            <h4 className="text-center font-extrabold text-xl pt-5">{title}</h4>
            <img
                src={image?.src}
                alt={title}
                className="h-56 w-full object-contain"
            />
            <section
                className={`absolute left-0 bottom-0 right-0 rounded-2xl bg-gray-800/30 ${
                    isOpen ? "h-full" : "h-10"
                } z-10 transition-height duration-500 backdrop-blur-sm py-1 px-2`}
            >
                <div
                    className="mb-2"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? (
                        <TbArrowBadgeDownFilled className="size-8 mx-auto cursor-pointer text-white" />
                    ) : (
                        <TbArrowBadgeUpFilled className="size-8 mx-auto cursor-pointer text-white" />
                    )}
                </div>
                <article className="h-[85%] overflow-y-auto text-white font-bold">
                    {details}
                </article>
            </section>
        </div>
    );
}
