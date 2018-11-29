class MembersController < ApplicationController
    skip_before_action :verify_authenticity_token


    def index
        render json: Member.all
    end

    def show
        render json: Member.find(params["id"])
    end
end
