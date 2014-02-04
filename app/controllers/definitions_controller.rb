class DefinitionsController < ApplicationController

	def create 
		round = Round.find(params[:round_id])
		game = round.game
		player = Player.where(user_id: current_user.id, game_id: game.id).first
		content = params[:content]
		Definition.create(player: player, round: round, content: content)

		redirect_to game_path(game)
	end

end