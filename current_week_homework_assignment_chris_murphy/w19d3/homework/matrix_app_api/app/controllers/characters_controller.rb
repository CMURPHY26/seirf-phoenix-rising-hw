class CharactersController < ApplicationController

    def index
        characters = Character.all
        render status:200, json: {characters: characters}
    end

    def show
        character = Character.find(params[:id])
        render status: 200, json: {character: character}
    end

end