class MessagesController < ApplicationController
  def index
    @message = Message.order('RANDOM()').first
    if @message
      render json: @message, status: :ok
    else
      render json: { success: false, errors: 'Oops, Something went wrong!' }, status: :unprocessable_entity
    end
  end
end
