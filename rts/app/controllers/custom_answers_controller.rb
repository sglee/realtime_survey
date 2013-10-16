class CustomAnswersController < ApplicationController
  before_action :set_custom_answer, only: [:show, :edit, :update, :destroy]

  # GET /custom_answers
  # GET /custom_answers.json
  def index
    @custom_answers = CustomAnswer.all
  end

  # GET /custom_answers/1
  # GET /custom_answers/1.json
  def show
  end

  # GET /custom_answers/new
  def new
    @custom_answer = CustomAnswer.new
  end

  # GET /custom_answers/1/edit
  def edit
  end

  # POST /custom_answers
  # POST /custom_answers.json
  def create
    @custom_answer = CustomAnswer.new(custom_answer_params)

    respond_to do |format|
      if @custom_answer.save
        format.html { redirect_to @custom_answer, notice: 'Custom answer was successfully created.' }
        format.json { render action: 'show', status: :created, location: @custom_answer }
      else
        format.html { render action: 'new' }
        format.json { render json: @custom_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /custom_answers/1
  # PATCH/PUT /custom_answers/1.json
  def update
    respond_to do |format|
      if @custom_answer.update(custom_answer_params)
        format.html { redirect_to @custom_answer, notice: 'Custom answer was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @custom_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /custom_answers/1
  # DELETE /custom_answers/1.json
  def destroy
    @custom_answer.destroy
    respond_to do |format|
      format.html { redirect_to custom_answers_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_custom_answer
      @custom_answer = CustomAnswer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def custom_answer_params
      params.require(:custom_answer).permit(:paper_id, :directive_no, :custom_id, :question_no, :answer)
    end
end
