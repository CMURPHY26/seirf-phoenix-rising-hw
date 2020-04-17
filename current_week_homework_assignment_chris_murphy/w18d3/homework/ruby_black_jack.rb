##class for Human player
class Human
    #add attr_accessor for read and write
    #for the properties below
    attr_accessor :name
    attr_accessor :bankroll
    attr_accessor :hand
    #initiantiate a hash of the class by
    #setting the initalize function in the class
    def initialize name
        #@variable_name allows the variable to be 
        #accessible outside this function
        @name = name
        @bankroll = 100
        @hand = []
    end

end

##class for Computer player
class Computer 
    attr_accessor :name
    attr_accessor :bankroll
    attr_accessor :hand

    def initialize
        @name = "the_house"
        @bankroll = 10000
        @hand = []
    end
end


deck = []
suits = ["hearts", "diamonds", "spades", "clubs"]

#Class for cards
class Card
    attr_reader :value
    attr_reader :face
    attr_reader :suit

    def initialize value, face, suit
        @value = value
        @face = face
        @suit = suit
    end
end

##Ruby method to populate the deck 
def create_populate suit
    deck = []
    faces = [["Jack", 10],["Queen", 10],["King", 10],["Ace", 11]]
    (2..10).each do |num| 
        card = Card.new num, num, suit
        deck.push(card)
    end

    faces.each do |face|
        card = Card.new face[1], face[0], suit
        deck.push(card)
    end

    deck
end

suits.each do |suit|
deck.push(create_populate suit)
end

deck = deck.flatten
# p deck

deck = deck.shuffle!

# p deck


#####Game Logic

##instantiate the human player
def compare_sum human, computer
    human_score = human.hand[0].value + human.hand[1].value
    computer_score = computer.hand[0].value + computer.hand[1].value
    p "#{human.name}'s score: #{human_score}"
    p "#{computer.name}'s score: #{computer_score}"
    if (human_score <= 21 && computer_score <= 21)
        if human_score == computer_score
            p "There is a tie!"
        elsif human_score == 21
            human.bankroll += 10
            p "#{human.name} wins the round"
        elsif computer_score == 21
            computer.bankroll += 10
            p "#{computer.name} wins the round"
        elsif human_score > computer_score
            human.bankroll += 10
            p "#{human.name} wins the round"
        elsif
            human_score < computer_score
            computer.bankroll += 10
            p "#{computer.name} wins the round"
        end
    elsif human_score > 21
        computer.bankroll += 10
        p "#{computer.name} wins the round"
    elsif computer_score > 21
        human.bankroll += 10
        p "#{human.name} wins the round"
    end
        
end
def black_jack_round deck
    #instantiate the computer player
    the_house = Computer.new
    p the_house

    p "This is Ruby Black Jack, what's your name?"
    name = gets.chomp
    human_player = Human.new name
    p human_player
    p "You will receive two random cards"
    human_player.hand = [deck.sample, deck.sample]
    the_house.hand = [deck.sample, deck.sample]
    p human_player.hand
    p the_house.hand

    compare_sum human_player, the_house
end

black_jack_round deck