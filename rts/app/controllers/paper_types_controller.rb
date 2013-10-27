class PaperTypesController < ApplicationController
  before_action :set_paper_type, only: [ :edit, :update, :destroy]
  before_action :set_paper_type_show, only: [:show]

  # GET /paper_types
  # GET /paper_types.json
  def index
    @paper_types = PaperType.all
  end

  # GET /paper_types/1
  # GET /paper_types/1.json
  def show
    render json: @paper_type
  end

  # GET /paper_types/new
  def new
    @paper_type = PaperType.new
  end

  # GET /paper_types/1/edit
  def edit
  end

  # POST /paper_types
  # POST /paper_types.json
  def create
    @paper_type = PaperType.new(paper_type_params)

    #respond_to do |format|
      if @paper_type.save
    #    format.html { redirect_to @paper_type, notice: 'Paper type was successfully created.' }
    #    format.json { render action: 'show', status: :created, location: @paper_type }
         render json: @paper_type 
      else
     #   format.html { render action: 'new' }
     #   format.json { render json: @paper_type.errors, status: :unprocessable_entity }
          render json: @paper_type.errors
      end
    #end
  end

  # PATCH/PUT /paper_types/1
  # PATCH/PUT /paper_types/1.json
  def update
    #respond_to do |format|
      if @paper_type.update(paper_type_params)
     #   format.html { redirect_to @paper_type, notice: 'Paper type was successfully updated.' }
     #   format.json { head :no_content }
         render json: @paper_type
      else
      #  format.html { render action: 'edit' }
      #  format.json { render json: @paper_type.errors, status: :unprocessable_entity }
          render json: @paper_type.errors
      end
    #end
  end

  # DELETE /paper_types/1
  # DELETE /paper_types/1.json
  def destroy
    @paper_type.destroy
    #respond_to do |format|
    #  format.html { redirect_to paper_types_url }
    #  format.json { head :no_content }
    #end
    render json: @paper_type
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_paper_type
      @paper_type = PaperType.find(params[:id])
    end

    def set_paper_type_show
      @paper_type = PaperType.where(user_id:params[:id].to_s)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def paper_type_params
      params.require(:paper_type).permit(:paper_type_code, :name, :user_id)
    end
end
