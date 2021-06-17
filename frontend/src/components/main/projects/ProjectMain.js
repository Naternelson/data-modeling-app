import ProjectsDisplay from './ProjectsDisplay'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProjectMain = () => {
    const dipatch = useDispatch()

    return  <div className={"container"}>
        <ProjectsDisplay/>
     </div>
 }
 export default ProjectMain;