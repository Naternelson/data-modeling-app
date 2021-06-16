class ProjectsController < ApplicationController
  def index
    projects = @user.projects
    render json: render json: { projects: ProjectSerializer.new(projects) }, status: :ok
  end

  def create
    project = @user.projects.build project_params
    project.status = project.STATUSTYPES[:uninitiated]
    project.save
    if project
      render json: { projects: ProjectSerializer.new(project) }, status: :ok
    else 
      render json: { error: project.errors.full_messages}, status: :not_acceptable
    end
  end

  def destroy
    
  end

  def show
  end

  private 

  def project_params
    params.require(:project).permit(:attachment, :name, :model)
  end
end
