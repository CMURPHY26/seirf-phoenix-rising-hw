class TweetsController < ApplicationController

    def index
        tweets = Tweet.all
        render status: 200, json: {tweets:tweets}
    end

    def show
        tweet = Tweet.find(params[:id])
        render status: 200, json: {tweet: tweet}
    end

    private

    
end