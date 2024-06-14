import { useState, useRef } from 'react';
import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';
import styles from "./Projects.module.css";

export const Projects = () => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 0.5; // Adjust sensitivity (0.5 means slower)
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        // Snap to nearest project card after releasing mouse
        snapToNearestCard();
    };

    const snapToNearestCard = () => {
        const container = scrollRef.current;
        if (!container) return;
        
        const children = Array.from(container.children);
        const distances = children.map(child => Math.abs(child.offsetLeft - container.scrollLeft));
        const closestChild = children[distances.indexOf(Math.min(...distances))];
        
        container.scrollTo({
            left: closestChild.offsetLeft,
            behavior: 'smooth'
        });
    };

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div
                className={`${styles.projects} ${isMouseDown ? styles.dragging : ''}`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {projects.map((project, id) => (
                    <ProjectCard key={id} project={project} style={{ scrollSnapAlign: 'start' }} />
                ))}
            </div>
        </section>
    );
}
