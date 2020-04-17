##class for Human player
class Human
    #add attr_accessor for read and write
    #for the properties below
    attr_accessor :name
    attr_accessor :bankroll
    attr_accessor :hand
    #initiantiate a hash of the class by
    #setting the initalize function in the class
    def initialize
        #@variable_name allows the variable to be 
        #accessible outside this function
        @name = ""
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


@deck = []
@suits = ["hearts", "diamonds", "spades", "clubs"]

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

@suits.each do |suit|
@deck.push(create_populate suit)
end

@deck = @deck.flatten
#shuffle deck
@deck = @deck.shuffle!

#instantiate the computer player
@the_house = Computer.new
# p @the_house

##instantiate the human player
@human_player = Human.new 
#####Game Logic

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
            computer.bankroll -= 10
            p "#{human.name} wins the round"
        elsif computer_score == 21
            computer.bankroll += 10
            human.bankroll -= 10
            p "#{computer.name} wins the round"
        elsif human_score > computer_score
            human.bankroll += 10
            computer.bankroll -= 10
            p "#{human.name} wins the round"
        elsif
            human_score < computer_score
            computer.bankroll += 10
            human.bankroll -= 10
            p "#{computer.name} wins the round"
        end
    elsif human_score > 21
        computer.bankroll += 10
        human.bankroll -= 10
        p "#{computer.name} wins the round"
    elsif computer_score > 21
        human.bankroll += 10
        computer.bankroll -= 10
        p "#{human.name} wins the round"
    end
        
end
def black_jack_round
    # p @deck.length
    if @deck.length > 0
        if @human_player.name == ""
            p "What's your name?"
            name = gets.chomp
            @human_player.name = name
        end
        p "#{@human_player.name} you currently have $#{@human_player.bankroll}"
        p "#{@the_house.name} currently has $#{@the_house.bankroll}"
        p "You will receive two random cards"
        @human_player.hand[0] = @deck.sample
        @deck.delete(@human_player.hand[0])
        @human_player.hand[1] = @deck.sample
        @deck.delete(@human_player.hand[1])
        @the_house.hand[0] = @deck.sample
        @deck.delete(@the_house.hand[0])
        @the_house.hand[1] = @deck.sample
        @deck.delete(@the_house.hand[1])
        p "#{@human_player.name} has a #{@human_player.hand[0].face} of #{@human_player.hand[0].suit} and a #{@human_player.hand[1].face} of #{@human_player.hand[1].suit}"
        p "#{@the_house.name} has a #{@the_house.hand[0].face} of #{@the_house.hand[0].suit} and a #{@the_house.hand[1].face} of #{@the_house.hand[1].suit}"

        compare_sum @human_player, @the_house

         game_loop

    end
end

def game_loop
    if @deck.length > 0
        p "This is Ruby Black Jack"
        p "(d)eal or (q)uit"
        answer = gets.chomp
        if answer == "d"
            black_jack_round
        elsif answer == "q"
            p "The game has ended"
        end
    elsif
       p "No more cards. Game Over!"
    end
end

game_loop