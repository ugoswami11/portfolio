import './testimonials.css';
import {Data} from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Testimonials(){
    return(
        <section className='testimonial container section' id='testimonials'>
            <h2 className='section-title'>My Clients says</h2>
            <span className='section-subtitle'>Testimonials</span>

            <Swiper className="testimonial-container mySwiper"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                }}
                modules={[Pagination]}
            >
                {Data.map(({id, image, title, description})=>{
                    return(
                        <SwiperSlide className='testimonial-card' key={id}>
                            <img src={image} alt="" className='testimonial-img'/>
                            <h3 className='testimonial-name'>{title}</h3>
                            <p className="testimonial-description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}