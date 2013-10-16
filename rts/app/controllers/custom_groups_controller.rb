class CustomGroupsController < ApplicationController
  before_action :set_custom_group, only: [:show, :edit, :update, :destroy]

  # GET /custom_groups
  # GET /custom_groups.json
  def index
    @custom_groups = CustomGroup.all
  end

  # GET /custom_groups/1
  # GET /custom_groups/1.json
  def show
  end

  # GET /custom_groups/new
  def new
    @custom_group = CustomGroup.new
  end

  # GET /custom_groups/1/edit
  def edit
  end

  # POST /custom_groups
  # POST /custom_groups.json
  def create
    @custom_group = CustomGroup.new(custom_group_params)

    respond_to do |format|
      if @custom_group.save
        format.html { redirect_to @custom_group, notice: 'Custom group was successfully created.' }
        format.json { render action: 'show', status: :created, location: @custom_group }
      else
        format.html { render action: 'new' }
        format.json { render json: @custom_group.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /custom_groups/1
  # PATCH/PUT /custom_groups/1.json
  def update
    respond_to do |format|
      if @custom_group.update(custom_group_params)
        format.html { redirect_to @custom_group, notice: 'Custom group was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @custom_group.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /custom_groups/1
  # DELETE /custom_groups/1.json
  def destroy
    @custom_group.destroy
    respond_to do |format|
      format.html { redirect_to custom_groups_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_custom_group
      @custom_group = CustomGroup.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def custom_group_params
      params.require(:custom_group).permit(:custom_id, :code)
    end
end
