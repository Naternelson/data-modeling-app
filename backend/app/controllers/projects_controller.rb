class ProjectsController < ApplicationController
  def index
    projects = @user.projects
    render json: { projects: ProjectSerializer.new(projects) }, status: :ok
  end

  def create
    project = @user.projects.build project_params
    project.status = Project::STATUSTYPES[:uninitiated]
    if project.save
      render json: { projects: ProjectSerializer.new(project) }, status: :ok
    else 
      render json: { error: project.errors.full_messages}, status: :not_acceptable
    end
  end

  def destroy
    project = Project.find_by_id params[:id]

    if project && project.user == @user 
      project.destroy
      render status: :ok
    else 
      render json: { message: "project not found"}, status: :not_found
    end
  end

  def show
  end

  def edit 
    project = Project.find_by_id params[:id]

    if project && project.user == @user 
      project.update project_params
      if project.valid? 
        render json: { projects: ProjectSerializer.new(project) }, status: :ok
      else
        render json: { error: project.errors.full_messages}, status: :not_acceptable
      end
      render status: :ok
    else 
      render json: { message: "project not found"}, status: :not_found
    end
  end
  private 

  def project_params
    params.permit(:attachment, :name, :model, :status)
  end
end
