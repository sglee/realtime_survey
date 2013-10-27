class GroupinfosController < ApplicationController
  before_action :set_groupinfo, only: [:edit]
  before_action :set_update, only: [:update, :destroy]
  before_action :set_groupShow, only: [:show]

  respond_to :json 
  # GET /groupinfos
  # GET /groupinfos.json
  def index
    @groupinfos = Groupinfo.all
  end

  # GET /groupinfos/1
  # GET /groupinfos/1.json
  def show
      render json: @groupinfo
  end

  # GET /groupinfos/new
  def new
    @groupinfo = Groupinfo.new
  end

  # GET /groupinfos/1/edit
  def edit
  end

  # POST /groupinfos
  # POST /groupinfos.json
  def create
    @groupinfo = Groupinfo.new(groupinfo_params)

    #respond_to do |format|
      if @groupinfo.save
        #format.html { redirect_to @groupinfo, notice: 'Groupinfo was successfully created.' }
        #format.json { render action: 'show', status: :created, location: @groupinfo }
        render json: @groupinfo
      else
        #format.html { render action: 'new' }
        #format.json { render json: @groupinfo.errors, status: :unprocessable_entity }
        render json: @groupinfo.errors
      end
    #end
  end

  # PATCH/PUT /groupinfos/1
  # PATCH/PUT /groupinfos/1.json
  def update
    #respond_to do |format|
      if @groupinfo.update(groupinfo_params)
     #   format.html { redirect_to @groupinfo, notice: 'Groupinfo was successfully updated.' }
     #   format.json { head :no_content }
        render json: @groupinfo     
      else
      #  format.html { render action: 'edit' }
      #  format.json { render json: @groupinfo.errors, status: :unprocessable_entity }
         render json: @groupinfo.errors
      end
    #end
  end

  # DELETE /groupinfos/1
  # DELETE /groupinfos/1.json
  def destroy
    @groupinfo.destroy
    #respond_to do |format|
    #  format.html { redirect_to groupinfos_url }
    #  format.json { head :no_content }
    #end
    render json: @groupinfo
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_groupinfo
      @groupinfo = Groupinfo.find(params[:id])
    end

    def set_groupShow
      @groupinfo = Groupinfo.where(user_id:params[:id])      
    end

    def set_update
      @groupinfo = Groupinfo.where(code:params[:id]).first
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def groupinfo_params
      params.require(:groupinfo).permit(:code, :name, :is_use, :user_id)
    end
end
