import { useSelector } from 'react-redux';
import { capitalize } from '../../../utilities/capitalize';
import ProjectCard from './ProjectCard';
const ProjectsDisplay = () => {
    const {data, order, status} = useSelector(s => s.entities.projects)
    const orderedData = order.map(o => {
        const {name, model, status} = data[o]
        return <ProjectCard key={o} name={name} model={model} status={status}/>
    })
    return  orderedData
 }
 export default ProjectsDisplay;