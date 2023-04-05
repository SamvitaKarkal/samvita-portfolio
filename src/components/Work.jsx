import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { fade } from '../utils/animation';
import { data } from '../utils/data.json';

const Work = () => {
  return (
    <WorkContainerStyle variants={fade}>
      <p>PROJECTS</p>
      <span className='projects-block'>
        {data.projects.map((project, idx) => (
          <Card key={idx} project={project} />
        ))}
      </span>
      <p>BLOGS</p>
      <span className='blog-block'>
        {data.blogs.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </span>
    </WorkContainerStyle>
  );
};

const Card = ({ project }) => {
  return (
    <CardStyle>
      <img src={`images/${project.image}`} alt={`no-${project.image}-found`} />
      <div className='project-details'>
        <h1>{project.title}</h1>
        <p>{project.desc}</p>
        <div className='app-links'>
          <a className="links" href={project.url} target='_blank' rel='noreferrer'>
            <i className='ri-links-line'></i>
          </a>
          <a className="links" href={project.code} target='_blank' rel='noreferrer'>
            <i className='ri-github-line'></i>
          </a>
        </div>
      </div>
    </CardStyle>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <CardStyle>
      <img src={`images/${blog.image}`} alt={`no-${blog.image}-found`} />
      
      <div className='project-details'>
      <a href={blog.url} target='_blank' rel='noreferrer'>
        <h1>{blog.title}</h1>
        <p>{blog.desc}</p>
      </a>
      </div>
    </CardStyle>
  );
};

const WorkContainerStyle = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: #0e0e0e;
  p {
    font-size: 1.2rem;
  }
  .projects-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 420px) {
      width: 56%;
    }
  }
  .blog-block {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  @media (max-width: 420px) {
    margin: 0px 8px;
    overflow: hidden;
    justify-content: center;
  }
`;

const CardStyle = styled.div`
  width: 400px;
  height: 300px;
  margin: 12px;
  background-image: #000;
  position: relative;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    opacity: 1;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  &:hover .project-details {
    opacity: 1;
  }
  &:hover img {
    opacity: 0.3;
  }
  @media (max-width: 420px) {
    width: 100vw;
  }
  .project-details {
    transition: all 1.5s ease;
    background-image: linear-gradient(#f6004c 10%, #000);
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    height: inherit;
    width: inherit;
    h1 {
      color: white;
      margin: 16px 0px 8px 0px;
    }
    p {
      color: white;
      margin: 0px 4px;
    }
    a {
      text-decoration: none;
    }
    .links {
      margin: 0px 8px;
      &:hover {
        i {
          transition: all 0.5 ease-in-out;
          color: white;
        }
      }
    }
    @media (max-width: 420px) {
      h1 {
        font-size: 16px;
      }
      p {
        font-size: 12px;
        margin: 0px 12px;
      }
    }
  }
`;
export default Work;
