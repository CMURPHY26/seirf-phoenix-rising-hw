# # puts "Hello World!"
# # puts "Hello Again"
# # puts "I like typing this."
# # puts "This is fun."
# # puts "Yay! Printing."
# # #puts "I'd much rather you 'not'."
# # #puts 'I "said" do not touch this.'

# # # A comment, this is so you can read your program later.
# # # Anything after the # is ignored by ruby.

# # puts "I could have code like this." # and the comment after is ignored

# # # You can also use a comment to "disable" or comment out a piece of code:
# # # puts "This won't run."

# # puts "This will run."


# # puts "I will now count my chickens:"

# # puts "Hens #{25 + 30 / 6}"
# # puts "Roosters #{100 - 25 * 3 % 4}"

# # puts "Now I will count the eggs:"

# # puts 3 + 2 + 1 - 5 + 4 % 2 - 1 / 4 + 6

# # puts "Is it true that 3 + 2 < 5 - 7?"

# # puts 3 + 2 < 5 - 7

# # puts "What is 3 + 2? #{3 + 2}"
# # puts "What is 5 - 7? #{5 - 7}"

# # puts "Oh, that's why it's false."

# # puts "How about some more."

# # puts "Is it greater? #{5 > -2}"
# # puts "Is it greater or equal? #{5 >= -2}"
# # puts "Is it less or equal? #{5 <= -2}"


# cars = 100
# space_in_a_car = 4.0
# drivers = 30
# passengers = 90
# cars_not_driven = cars - drivers
# cars_driven = drivers
# carpool_capacity = cars_driven * space_in_a_car
# average_passengers_per_car = passengers / cars_driven


# puts "There are #{cars} cars available."
# puts "There are only #{drivers} drivers available."
# puts "There will be #{cars_not_driven} empty cars today."
# puts "We can transport #{carpool_capacity} people today."
# puts "We have #{passengers} to carpool today."
# puts "We need to put about #{average_passengers_per_car} in each car."


my_name = 'Zed A. Shaw'
my_age = 35 # not a lie in 2009
my_height = 74 # inches
my_weight = 180 # lbs
my_eyes = 'Blue'
my_teeth = 'White'
my_hair = 'Brown'

puts "Let's talk about #{my_name}."
puts "He's #{my_height} inches tall."
puts "He's #{my_weight} pounds heavy."
puts "Actually that's not too heavy."
puts "He's got #{my_eyes} eyes and #{my_hair} hair."
puts "His teeth are usually #{my_teeth} depending on the coffee."

# this line is tricky, try to get it exactly right
puts "If I add #{my_age}, #{my_height}, and #{my_weight} I get #{my_age + my_height + my_weight}."