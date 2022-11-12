class UsersController < ApplicationController
  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
