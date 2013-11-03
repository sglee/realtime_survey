class PaperHistoriesController < ApplicationController
  before_action :set_paper_history, only: [:show, :edit, :update, :destroy]

  # GET /paper_histories
  # GET /paper_histories.json
  def index
    @paper_histories = PaperHistory.all
  end

  # GET /paper_histories/1
  # GET /paper_histories/1.json
  def show
  end

  # GET /paper_histories/new
  def new
    @paper_history = PaperHistory.new
  end

  # GET /paper_histories/1/edit
  def edit
  end

  # POST /paper_histories
  # POST /paper_histories.json
  def create
    @paper_history = PaperHistory.new(paper_history_params)

    #respond_to do |format|
      if @paper_history.save
    #    format.html { redirect_to @paper_history, notice: 'Paper history was successfully created.' }
    #    format.json { render action: 'show', status: :created, location: @paper_history }
         render json: @paper_history
      else
    #    format.html { render action: 'new' }
    #    format.json { render json: @paper_history.errors, status: :unprocessable_entity }
         render json: paper_history.errors, status: :unprocessable_entity
      end
    #end
  end

  # PATCH/PUT /paper_histories/1
  # PATCH/PUT /paper_histories/1.json
  def update
    #respond_to do |format|
      if @paper_history.update(paper_history_params)
     #   format.html { redirect_to @paper_history, notice: 'Paper history was successfully updated.' }
     #   format.json { head :no_content }
         render json: @paper_history
      else
      #  format.html { render action: 'edit' }
      # format.json { render json: @paper_history.errors, status: :unprocessable_entity }
         render json: @paper_history.errors, status: :unprocessable_entity
      end
    #end
  end

  # DELETE /paper_histories/1
  # DELETE /paper_histories/1.json
  def destroy
    @paper_history.destroy
    render @paper_history
    #respond_to do |format|
    #  format.html { redirect_to paper_histories_url }
    #  format.json { head :no_content }
    #end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_paper_history
      @paper_history = PaperHistory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def paper_history_params  
      params.require(:paper_history).permit(:user_id, :paper_id, :start_date, :status, :groupinfo_code, :groupinfo_name, :paper_type_code, :paper_type_name )
    end
end
