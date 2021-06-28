import { useSelector } from 'react-redux';
import { capitalize } from '../../../utilities/capitalize';
import ProjectCard from './ProjectCard';
const ProjectsDisplay = () => {
    const {data, order, status} = useSelector(s => s.entities.projects)
    console.log({data, order, status})
    const orderedData = order.map(o => {
        const {name, model, status, id} = data[o]
        return <ProjectCard key={o} name={name} model={model} status={status} id={id}/>
    })
    return  orderedData
 }
 export default ProjectsDisplay;