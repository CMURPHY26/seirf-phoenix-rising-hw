class Human
    attr_accessor :name
    attr_accessor :bankroll
    attr_accessor :hand
    def initialize name
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