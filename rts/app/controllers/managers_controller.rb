class ManagersController < ApplicationController
  before_action :set_manager, only: [:show, :edit, :update, :destroy]

  respond_to :json 
  # GET /managers
  # GET /managers.json
  def index
    @managers = Manager.all
    #render json: Manager.all
    #render json: @managers
    #@manager = Manager.where("user_id = ?", params[:user_id])
    #render json: @manager
  end

  # GET /managers/1
  # GET /managers/1.json
  def show
    # added json 
    #@managers = Manager.where(user_id:params[:id]).first
    render json: @manager

    #@managers = Manager.where(:user_id => @user_id)
    #render json: @manager

    #respond_to do |format|
      #format.html # show.html.erb
     # format.json { render json: @managers }
      #render json: @manager

   # end

    #render json: Manager.find(parms[:user_id])

    #respond_to do |format|
    #  format.html
    #  format.json { head :no_content}
    #end
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
    respond_to do |format|
      if @manager.update(manager_params)
        format.html { redirect_to @manager, notice: 'Manager was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @manager.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /managers/1
  # DELETE /managers/1.json
  def destroy
    @manager.destroy
    respond_to do |format|
      format.html { redirect_to managers_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manager
      @manager = Manager.where(user_id:params[:id]).first
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manager_params
      params.require(:manager).permit(:user_id, :pwd, :name, :hp, :email, :auth_code, :is_use)
    end
end
