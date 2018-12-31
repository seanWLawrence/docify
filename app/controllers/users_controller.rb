class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save

        # Example document for newly registered users
        example_document = '<h1>Example</h1><blockquote>"An example is worth a thousand words..." Someone</blockquote><p>Here are some ideas on what you can do in the Docify editor to get you started:</p><ul><li><strong>Bold</strong> text</li><li><em>Italic</em> text</li><li><u>Underlined</u> text</li><li><s>Strikethrough</s> text</li><li><code>Code</code> text</li></ul><h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6><p>Bulleted list</p><ul><li>Example</li></ul>'

        # Create user's firsst document
        Document.create(user_id: @user.id, content: example_document)

        # Login user
        sign_in(@user)

        # Redirect to /documents page
        format.html { redirect_to '/documents' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { redirect_to '/signup' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
