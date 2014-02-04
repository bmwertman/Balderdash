class Round < ActiveRecord::Base
  attr_accessible :game_id, :word_id, :word, :game

  belongs_to :word
  belongs_to :game
  has_many :guessed_players, through: :definitions, source: :players
  has_many :definitions
  has_many :picks, through: :definitions

  def self.begin(game)
    word = Word.pick
    round = Round.create(word: word, game: game)
    Definition.create(round: round, content: word.definition)
  end
end
