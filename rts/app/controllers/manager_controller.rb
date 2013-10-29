class ManagerController < ApplicationController
	before_action :set_manager, only: [:show]
  
	respond_to :json 

    def show
  	   render json: @manager
    end

  # PATCH/PUT /managers/1
  # PATCH/PUT /managers/1.json
  def update
    respond_to do |format|
    #@manager = Manager.find(params[:id])
      #if @manager.update_attributes(manager_params)
      if @manager.update(manager_params)
        #format.html { redirect_to @manager, notice: 'Manager was successfully updated.' }
        #format.json { head :no_content }
        render json: @manager
      else
        #format.html { render action: 'edit' }
        #format.json { render json: @manager.errors, status: :unprocessable_entity }
        render json: @manager.errors
      end
    end
  end

   def set_manager
       @manager = Manager.where(user_id:params[:id]).first
    end

    def manager_params
      params.require(:manager).permit(:user_id, :pwd, :name, :hp, :email, :auth_code, :is_use)
    end
end
