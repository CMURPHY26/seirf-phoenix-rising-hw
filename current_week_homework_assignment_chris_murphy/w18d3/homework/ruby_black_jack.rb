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

human = Human.new "Chris"
p human

the_house = Computer.new
p the_house

deck = []
suits = ["hearts", "diamonds", "spades", "clubs"]
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
p deck

deck = deck.shuffle!

p deck