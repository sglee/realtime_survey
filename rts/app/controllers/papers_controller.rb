class PapersController < ApplicationController
  before_action :set_paper, only: [:show, :edit, :update, :destroy]

  respond_to json:
  # GET /papers
  # GET /papers.json
  def index
    @papers = Paper.all
  end

  # GET /papers/1
  # GET /papers/1.json
  def show
  end

  # GET /papers/new
  def new
    @paper = Paper.new
  end

  # GET /papers/1/edit
  def edit
  end

  # POST /papers
  # POST /papers.json
  def create
    @paper = Paper.new(paper_params)

    #respond_to do |format|
      if @paper.save
    #    format.html { redirect_to @paper, notice: 'Paper was successfully created.' }
    #    format.json { render action: 'show', status: :created, location: @paper }
        render json: @paper
      else
    #    format.html { render action: 'new' }
    #    format.json { render json: @paper.errors, status: :unprocessable_entity }
        render json: @paper.errors, status: :unprocessable_entity
      end
    #end
  end

  # PATCH/PUT /papers/1
  # PATCH/PUT /papers/1.json
  def update
  #  respond_to do |format|
      if @paper.update(paper_params)
  #      format.html { redirect_to @paper, notice: 'Paper was successfully updated.' }
  #      format.json { head :no_content }
         render json: @paper
      else
  #      format.html { render action: 'edit' }
  #      format.json { render json: @paper.errors, status: :unprocessable_entity }
          render json: @paper.errors, status: :unprocessable_entity
      end
  #  end
  end

  # DELETE /papers/1
  # DELETE /papers/1.json
  def destroy
    @paper.destroy

    #respond_to do |format|
    #  format.html { redirect_to papers_url }
    #  format.json { head :no_content }
    #end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_paper
      @paper = Paper.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def paper_params
      params.require(:paper).permit(:paper_id, :group_code, :user_id, :paper_type_code, :limit_time, :question_type, :is_automatic, :in_use)
     # params.require(:paper).permit(:group_code, :user_id, :paper_type_code, :limit_time, :question_type, :is_automatic, :in_use)
    end
end
