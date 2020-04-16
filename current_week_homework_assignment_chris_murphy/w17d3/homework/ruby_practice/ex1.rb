# # # # # # # # # # # puts "Hello World!"
# # # # # # # # # # # puts "Hello Again"
# # # # # # # # # # # puts "I like typing this."
# # # # # # # # # # # puts "This is fun."
# # # # # # # # # # # puts "Yay! Printing."
# # # # # # # # # # # #puts "I'd much rather you 'not'."
# # # # # # # # # # # #puts 'I "said" do not touch this.'

# # # # # # # # # # # # A comment, this is so you can read your program later.
# # # # # # # # # # # # Anything after the # is ignored by ruby.

# # # # # # # # # # # puts "I could have code like this." # and the comment after is ignored

# # # # # # # # # # # # You can also use a comment to "disable" or comment out a piece of code:
# # # # # # # # # # # # puts "This won't run."

# # # # # # # # # # # puts "This will run."


# # # # # # # # # # # puts "I will now count my chickens:"

# # # # # # # # # # # puts "Hens #{25 + 30 / 6}"
# # # # # # # # # # # puts "Roosters #{100 - 25 * 3 % 4}"

# # # # # # # # # # # puts "Now I will count the eggs:"

# # # # # # # # # # # puts 3 + 2 + 1 - 5 + 4 % 2 - 1 / 4 + 6

# # # # # # # # # # # puts "Is it true that 3 + 2 < 5 - 7?"

# # # # # # # # # # # puts 3 + 2 < 5 - 7

# # # # # # # # # # # puts "What is 3 + 2? #{3 + 2}"
# # # # # # # # # # # puts "What is 5 - 7? #{5 - 7}"

# # # # # # # # # # # puts "Oh, that's why it's false."

# # # # # # # # # # # puts "How about some more."

# # # # # # # # # # # puts "Is it greater? #{5 > -2}"
# # # # # # # # # # # puts "Is it greater or equal? #{5 >= -2}"
# # # # # # # # # # # puts "Is it less or equal? #{5 <= -2}"


# # # # # # # # # # cars = 100
# # # # # # # # # # space_in_a_car = 4.0
# # # # # # # # # # drivers = 30
# # # # # # # # # # passengers = 90
# # # # # # # # # # cars_not_driven = cars - drivers
# # # # # # # # # # cars_driven = drivers
# # # # # # # # # # carpool_capacity = cars_driven * space_in_a_car
# # # # # # # # # # average_passengers_per_car = passengers / cars_driven


# # # # # # # # # # puts "There are #{cars} cars available."
# # # # # # # # # # puts "There are only #{drivers} drivers available."
# # # # # # # # # # puts "There will be #{cars_not_driven} empty cars today."
# # # # # # # # # # puts "We can transport #{carpool_capacity} people today."
# # # # # # # # # # puts "We have #{passengers} to carpool today."
# # # # # # # # # # puts "We need to put about #{average_passengers_per_car} in each car."


# # # # # # # # # my_name = 'Zed A. Shaw'
# # # # # # # # # my_age = 35 # not a lie in 2009
# # # # # # # # # my_height = 74 # inches
# # # # # # # # # my_weight = 180 # lbs
# # # # # # # # # my_eyes = 'Blue'
# # # # # # # # # my_teeth = 'White'
# # # # # # # # # my_hair = 'Brown'

# # # # # # # # # puts "Let's talk about #{my_name}."
# # # # # # # # # puts "He's #{my_height} inches tall."
# # # # # # # # # puts "He's #{my_weight} pounds heavy."
# # # # # # # # # puts "Actually that's not too heavy."
# # # # # # # # # puts "He's got #{my_eyes} eyes and #{my_hair} hair."
# # # # # # # # # puts "His teeth are usually #{my_teeth} depending on the coffee."

# # # # # # # # # # this line is tricky, try to get it exactly right
# # # # # # # # # puts "If I add #{my_age}, #{my_height}, and #{my_weight} I get #{my_age + my_height + my_weight}."


# # # # # # # # types_of_people = 10
# # # # # # # # x = "There are #{types_of_people} types of people."
# # # # # # # # binary = "binary"
# # # # # # # # do_not = "don't"
# # # # # # # # y = "Those who know #{binary} and those who #{do_not}."

# # # # # # # # puts x
# # # # # # # # puts y

# # # # # # # # puts "I said: #{x}."
# # # # # # # # puts "I also said: '#{y}'."

# # # # # # # # hilarious = false
# # # # # # # # joke_evaluation = "Isn't that joke so funny?! #{hilarious}"

# # # # # # # # puts joke_evaluation

# # # # # # # # w = "This is the left side of..."
# # # # # # # # e = "a string with a right side."

# # # # # # # # puts w + e

# # # # # # # puts "Mary had a little lamb."
# # # # # # # puts "Its fleece was white as #{'snow'}."
# # # # # # # puts "And everywhere that Mary went."
# # # # # # # puts "." * 10  # what'd that do?

# # # # # # # end1 = "C"
# # # # # # # end2 = "h"
# # # # # # # end3 = "e"
# # # # # # # end4 = "e"
# # # # # # # end5 = "s"
# # # # # # # end6 = "e"
# # # # # # # end7 = "B"
# # # # # # # end8 = "u"
# # # # # # # end9 = "r"
# # # # # # # end10 = "g"
# # # # # # # end11 = "e"
# # # # # # # end12 = "r"

# # # # # # # # watch that print vs. puts on this line what's it do?
# # # # # # # print end1 + end2 + end3 + end4 + end5 + end6
# # # # # # # puts end7 + end8 + end9 + end10 + end11 + end12


# # # # # # formatter = "%{first} %{second} %{third} %{fourth}"

# # # # # # puts formatter % {first: 1, second: 2, third: 3, fourth: 4}
# # # # # # puts formatter % {first: "one", second: "two", third: "three", fourth: "four"}
# # # # # # puts formatter % {first: true, second: false, third: true, fourth: false}
# # # # # # puts formatter % {first: formatter, second: formatter, third: formatter, fourth: formatter}

# # # # # # puts formatter % {
# # # # # #   first: "I had this thing.",
# # # # # #   second: "That you could type up right.",
# # # # # #   third: "But it didn't sing.",
# # # # # #   fourth: "So I said goodnight."
# # # # # # }

# # # # # # Here's some new strange stuff, remember type it exactly.

# # # # # days = "Mon Tue Wed Thu Fri Sat Sun"
# # # # # months = "Jan\nFeb\nMar\nApr\nMay\nJun\nJul\nAug"

# # # # # puts "Here are the days: #{days}"
# # # # # puts "Here are the months: #{months}"

# # # # # puts %q{
# # # # # There's something going on here.
# # # # # With this weird quote
# # # # # We'll be able to type as much as we like.
# # # # # Even 4 lines if we want, or 5, or 6.  
# # # # # }

# # # # tabby_cat = "\tI'm tabbed in."
# # # # persian_cat = "I'm split\non a line."
# # # # backslash_cat = "I'm \\ a \\ cat."

# # # # fat_cat = """
# # # # I'll do a list:
# # # # \t* Cat food
# # # # \t* Fishies
# # # # \t* Catnip\n\t* Grass
# # # # """

# # # # puts tabby_cat
# # # # puts persian_cat
# # # # puts backslash_cat
# # # # puts fat_cat

# # # # Escape	What it does.
# # # # \\	Backslash ()
# # # # \'	Single-quote (')
# # # # \"	Double-quote (")
# # # # \a	ASCII bell (BEL)
# # # # \b	ASCII backspace (BS)
# # # # \f	ASCII formfeed (FF)
# # # # \n	ASCII linefeed (LF)
# # # # \r	ASCII Carriage Return (CR)
# # # # \t	ASCII Horizontal Tab (TAB)
# # # # \uxxxx	Character with 16-bit hex value xxxx (Unicode only)
# # # # \v	ASCII vertical tab (VT)
# # # # \ooo	Character with octal value ooo
# # # # \xhh	Character with hex value hh

# # # print "How old are you? "
# # # age = gets.chomp
# # # print "How tall are you? "
# # # height = gets.chomp
# # # print "How much do you weigh? "
# # # weight = gets.chomp

# # # puts "So, you're #{age} old, #{height} tall and #{weight} heavy."

# # print "Give me a number: "
# # number = gets.chomp.to_i

# # bigger = number * 100
# # puts "A bigger number is #{bigger}."

# # print "Give me another number: "
# # another = gets.chomp
# # number = another.to_i

# # smaller = number / 100
# # puts "A smaller number is #{smaller}."

# # .to_f to float

first, second, third = ARGV

puts "Your first variable is: #{first}"
puts "Your second variable is: #{second}"
puts "Your third variable is: #{third}"

# run $ ruby ex13.rb first 2nd 3rd
