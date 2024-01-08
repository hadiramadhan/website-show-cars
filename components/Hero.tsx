"use client";

import Image from "next/image"
import CustomButton from './CustomButton'



const Hero = () => {
    const handleScrool = () => {

    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Temukan lah Mobil Impian MU
            </h1>
            <p className="hero__subsitile">
            merampingkan pengalaman sewa mobil Anda dengan mudah kami
            proses pemesanan
            </p>
            <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScrool}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero"
                fill className="object-contain"
                />
                <div className="hero__image-overlay"/>
            </div>
        </div>
    </div>
    )
}

export default Hero