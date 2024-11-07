import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsData = [
    {
        id: 1,
        name: "Patricia Perez",
        text: "Sus productos son de excelente calidad.",
        img: "https://picsum.photos/200",
        delay: 0.9,
    },
    {
        id: 2,
        name: "Juan Ortiz",
        text: "Sus tiempos de entrega son muy cortos.",
        img: "https://picsum.photos/seed/picsum/200/300",
        delay: 0.8,
    },
    {
        id: 3,
        name: "Yurley Riaño",
        text: "Tienen variedad de productos.",
        img: "https://picsum.photos/200/300?grayscale",
        delay: 0.9,
    },
    {
        id: 4,
        name: "Carolina Manrique",
        text: "Tienen muchos descuentos para sus clientes, aunque me gustaría que tuvieran tienda física.",
        img: "https://picsum.photos/200/300/?blur=2",
        delay: 0.7,
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-12 mb-10">
            <div className="container">
                <div className="p-6 space-y-4 text-center max-w-[600px] mx-auto mb-6">
                    <h1 className="text-4xl font-semibold text-blue-800 uppercase">Nuestros Testimonios</h1>
                    <p className="text-3xl font-semibold">¿Qué opinan nuestros clientes?</p>
                </div>
                <Slider {...settings}>
                    {TestimonialsData.map((item) => (
                        <div key={item.id}>
                            <div className="flex flex-col gap-4 p-8 mx-4 bg-gray-700 shadow-lg rounded-xl">
                                <div className="flex items-center justify-start gap-5">
                                    <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full" />
                                    <div>
                                        <p className="text-xl font-bold text-white">{item.name}</p>
                                    </div>
                                </div>
                                <div className="py-6 space-y-4">
                                <p className="text-lg text-white">{item.text}</p>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;