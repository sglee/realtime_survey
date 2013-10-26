class ManagersController < ApplicationController
  before_action :set_manager, only: [:show, :edit]
  before_action :set_update, only:[:update, :destroy]
  
  respond_to :json 
  # GET /managers
  # GET /managers.json
  def index
    @managers = Manager.all
  end

  # GET /managers/1
  # GET /managers/1.json
  def show
    # added json 
    render json: @manager
  end

  # GET /managers/new
  def new
    @manager = Manager.new
  end

  # GET /managers/1/edit
  def edit
  end

  # POST /managers
  # POST /managers.json
  def create
    @manager = Manager.new(manager_params)

    respond_to do |format|
      if @manager.save
        format.html { redirect_to @manager, notice: 'Manager was successfully created.' }
        format.json { render action: 'show', status: :created, location: @manager, 
          json: { success: true } }
      else
        format.html { render action: 'new' }
        format.json { render json: @manager.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /managers/1
  # PATCH/PUT /managers/1.json
  def update
      if @manager.update(manager_params)
        render json: @manager
      else
        render json: @manager.errors
      end
  end

  # DELETE /managers/1
  # DELETE /managers/1.json
  def destroy
    @manager.destroy
    render json: @manager
  end

  private
    # Use callback to share comm
    def set_update
      @manager = Manager.where(user_id:params[:id].to_s).first
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_manager
      @manager = Manager.find(params[:id])
      #@manager = Manager.where(user_id:params[:id].to_s).first
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manager_params
      params.require(:manager).permit(:user_id, :pwd, :name, :hp, :email, :auth_code, :is_use)
    end
end
