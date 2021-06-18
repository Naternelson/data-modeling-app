import ProjectsDisplay from './Display'
import { RedirectIfLoggedOut } from '../../routes/Redirects';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from '../../../store/entities/projects';


const ProjectMain = () => {
    const dispatch = useDispatch()
    const componentDidMount = () => {
        dispatch(loadProjects())
    }
    useEffect(componentDidMount, [])
    return  RedirectIfLoggedOut() || <div className={"container"}>
        <ProjectsDisplay/>
     </div>
 }
 export default ProjectMain;