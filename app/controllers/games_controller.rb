class GamesController < ApplicationController
# games GET    /games(.:format)               games#index
	def index
		@games = Game.all
	end
#      POST   /games(.:format)               games#create
	def create
		game = Game.new
		game.in_session = false
		game.save
		user = current_user
		player = Player.create({
			user: user,
			game: game,
			})
		redirect_to game_path(game)
	end
# game GET    /games/:id(.:format)           games#show
	def show
		@game = Game.find(params[:id])
		@current_round = @game.rounds.last
		if Player.where(user_id: current_user.id, game_id: @game.id).first
			@current_player = Player.where(user_id: current_user.id, game_id: @game.id).first
		end
	end
#      DELETE /games/:id(.:format)           games#destroy
	def start
		game = Game.find(params[:id])
		game.start
		redirect_to game_path(game)
	end

end