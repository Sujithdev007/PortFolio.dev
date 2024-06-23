import React from 'react'
import {PROJECTS} from "../index.js"


const Projects = () => {
  return (
    <div className='border-b  pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <img 
                    src={project.image}  
                    width={150} 
                    height={150} 
                    className="mb-6 rounded" 
                    alt={project.title} />
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400 text-sm'>{project.description}</p>
                    {project.technologies.map((tech, index)=>(
                        <span className='mr-2 rounded bg-neutral-900 py-1 text-sm font-medium font-medium text-purple-900'>
                                {tech}
                        </span>
                    ))}
                </div>
            </div>
        )

        )}
      </div>
    </div>
  )
}

export default Projects
