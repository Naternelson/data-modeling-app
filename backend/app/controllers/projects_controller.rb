class ProjectsController < ApplicationController
  before_action :check_project, only: [:destroy, :update]

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
      id = @project.id 
      @project.destroy
      render  json: { project: {id: id}}, status: :ok
  end

  def update 
    @project.update project_params
    if @project.valid? 
      render json: { project: ProjectSerializer.new(@project) }, status: :ok
    else
      render json: { error: @project.errors.full_messages}, status: :not_acceptable
    end
  end

  private 

  def project_params
    params.permit(:attachment, :name, :model, :status)
  end

  def check_project
    @project = Project.find_by_id params[:id]
    render json: { message: "project not found"}, status: :not_found unless @project && @project.user == @user
  end
end
