import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import gallery01 from '../../assets/gallery/gallery01.webp'
// import gallery02 from '../../assets/gallery/gallery02.webp'
import gallery03 from '../../assets/gallery/gallery03.webp'
import gallery04 from '../../assets/gallery/gallery04.webp'
import gallery05 from '../../assets/gallery/gallery05.webp'
import gallery06 from '../../assets/gallery/gallery06.webp'
import gallery07 from '../../assets/gallery/gallery07.webp'
import gallery08 from '../../assets/gallery/gallery08.webp'
import gallery09 from '../../assets/gallery/gallery09.webp'

function Gallery() {
    return (
        <section id='gallery'>
            <div className='gallery-text'><h1>Image Gallery</h1></div>
            <div className='gallery'>
                <Swiper slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}>
                    <SwiperSlide><img src={gallery01} alt="gallery" /></SwiperSlide>
                    {/* <SwiperSlide><img src={gallery02} alt="gallery" /></SwiperSlide> */}
                    <SwiperSlide><img src={gallery03} alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery04} alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery05} alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery06} alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery07} alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery08} alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery09} alt="gallery" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Gallery