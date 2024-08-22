import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import gallery01 from '../../assets/gallery/gallery01.png'
import gallery02 from '../../assets/gallery/gallery02.png'
import gallery03 from '../../assets/gallery/gallery03.png'
import gallery04 from '../../assets/gallery/gallery04.png'
import gallery05 from '../../assets/gallery/gallery05.png'
import gallery06 from '../../assets/gallery/gallery06.png'
import gallery07 from '../../assets/gallery/gallery07.png'
import gallery08 from '../../assets/gallery/gallery08.png'
import gallery09 from '../../assets/gallery/gallery09.png'

function Gallery() {
    return (
        <section id='gallery'>
            <div className='gallery-text'>Image Gallery</div>
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
                    <SwiperSlide><img src={gallery02} alt="gallery" /></SwiperSlide>
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