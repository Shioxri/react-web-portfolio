import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export const Projects = () => {

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
            <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    grabCursor={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
            >
           
                    {projects.map((project, id) => (
                    <SwiperSlide key={id}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
            
      </Swiper>
      </div>
        </section>
    );
}
