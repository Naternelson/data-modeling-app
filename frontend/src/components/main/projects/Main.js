import ProjectsDisplay from './Display'
import { RedirectIfLoggedOut } from '../../routes/Redirects';


const ProjectMain = () => {

    return  RedirectIfLoggedOut() || <div className={"container"}>
        <ProjectsDisplay/>
     </div>
 }
 export default ProjectMain;