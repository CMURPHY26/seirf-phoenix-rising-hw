class TweetsController < ApplicationController

    def index
        tweets = Tweet.all
        render status: 200, json: {tweets:tweets}
    end

    def show
        tweet = Tweet.find(params[:id])
        replies = Tweet.find(params[:id]).reviews
        render status: 200, json: {tweet: tweet, replies: replies}
    end

    def create
        tweet = Tweet.new(tweet_params)
        if tweet.save
            render status: 201, json: {tweet:tweet}
        else
            render status: 422, json: {tweet: tweet, errors: tweet.errors}
        end
    end

    def update
        tweet = Tweet.find(params[:id])
        tweet.update(tweet_params)
        if tweet.save
            render status: 200, json: {tweet:tweet}
        else
            render status: 422, json: {tweet: tweet}
        end
    end

    def destroy
        tweet = Tweet.destroy(params[:id])
        render json: {status: 204 }
    end

    private

    def tweet_params
        params.require(:tweet).permit(:title, :content, :author)
    end

end