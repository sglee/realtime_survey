class GroupinfosController < ApplicationController
  before_action :set_groupinfo, only: [:show, :edit, :update, :destroy]

  # GET /groupinfos
  # GET /groupinfos.json
  def index
    @groupinfos = Groupinfo.all
  end

  # GET /groupinfos/1
  # GET /groupinfos/1.json
  def show
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

    respond_to do |format|
      if @groupinfo.save
        format.html { redirect_to @groupinfo, notice: 'Groupinfo was successfully created.' }
        format.json { render action: 'show', status: :created, location: @groupinfo }
      else
        format.html { render action: 'new' }
        format.json { render json: @groupinfo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /groupinfos/1
  # PATCH/PUT /groupinfos/1.json
  def update
    respond_to do |format|
      if @groupinfo.update(groupinfo_params)
        format.html { redirect_to @groupinfo, notice: 'Groupinfo was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @groupinfo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /groupinfos/1
  # DELETE /groupinfos/1.json
  def destroy
    @groupinfo.destroy
    respond_to do |format|
      format.html { redirect_to groupinfos_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_groupinfo
      @groupinfo = Groupinfo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def groupinfo_params
      params.require(:groupinfo).permit(:code, :name, :is_use)
    end
end
