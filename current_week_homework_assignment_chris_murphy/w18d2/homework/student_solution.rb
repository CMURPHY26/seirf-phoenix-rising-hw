require 'prime'
# # Hello World
# # Print "Hello World" to the console
# p "Hello World"
# # After you have printed Hello World:
# adjective = "Big Bad"

# # Interpolate the adjective variable into the Hello World string using #{}
# # Expected output:
# p "Hello #{adjective} World"
# # => Hello Big Bad World
# # Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to all uppercased letters.
# hello = "Hello World"
# p hello
# hello.upcase!
# p hello

############################################################

# # Nums Array and Enumerables
# # With the following array:

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# # Use .uniq to print the array with all duplicate entries removed

# p nums.uniq

# # Next, use .push and .pop , .shift .unshift and .length on the array as you would with javaScript (if you need to add a number, add 5)
# nums.push(5)
# p nums
# nums.pop()
# p nums
# nums.unshift(5)
# p nums
# nums.shift()
# p nums

# # Use .include? to check if the array contains the number 8
# p nums.include? 8

# # Use .find_all to find all the numbers greater than 10
# p nums.find_all { |num| num > 10}

# # use .all? to check if all the numbers are greater than 0?
# p nums.all? { |num| num > 0}

# # use any? to check if there are any numbers that are divisible by 8

# p nums.any? { |num| num % 8 == 0 }

# # use .count to let you know how many numbers are greater than 4

# p nums.count { |num| num > 4}

# # use .each_with_index to print each item times its index

# nums.each_with_index { |num, index| p num * index}

# # .find the number that is divisible by 7 and 5 and is greater than 0

# p nums.find {|num| (num % 7 == 0) && num % 5 == 0 && num > 0}

# p nums.find {|num| num % 35 == 0 && num > 0}


# # .find_index of the number that is divisible by 5 and 7 and is greater than 0

# p nums.find_index { |num| (num % 7 == 0) && num % 5 == 0 && num > 0 }

# # return the .first 3 numbers

# p nums.first(3)

# # return the .last 5 numbers

# p nums.last(5)

# # .group_by the modulo of 3 ( % 3 )

# p nums.group_by {|num| num % 3}

# # use minmax to return the smallest and largest number
# p nums.minmax
# # use .reject to return all the numbers that are NOT divisible by 3
# p nums.reject { |num| num % 3 == 0 }

# # use .select to return all the numbers divisible by 5
# p nums.select { |num| num % 5 == 0}


############################################################

# # Color Array
# # With the following array:

# colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# # Print out a random color.

# p colors.sample

# # Print out the colors array in reverse order.

# p colors.reverse

# # Print out all of the colors in the array with all capital letters.
# colors.each { |color| p color.upcase}


############################################################


# # Methods
# # Write a method named find_area that finds the area of a rectangle when given values for width and height

# # REMEMBER: In Ruby, the keyword return is implied and can be omitted!
# def find_area height, width
#     height * width
# end
# p find_area 10, 5
# # Write a method named multiply_each_by_five that will loop over the given nums array below and print each number multiplied by 5

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

# def multiply_each_by_five arr
#     arr.each {|num| p num * 5}
# end

# multiply_each_by_five nums

############################################################

# # Methods With a Hash
# # Use the following given hashes to solve the problems below

# # Hashes

# book = {
#   title: 'The Great Gatsby',
#   author: 'F Scott Fitzgerald',
#   year: 1925,
#   price: 10
# }

# lamp = {
#   type: 'reading',
#   brand: 'Ikea',
#   price: 25
# }

# table = {
#   type: 'bed side',
#   brand: 'Crate & Barrel',
#   color: 'birch',
#   price: 50
# }
# # Write a method named print_price that will take in any hash and return the price of the item.

# def print_price item
#     p item[:price]
# end

# print_price lamp

# # Write a method named print_item_sums that will take in two hashes and will return the sum of the prices for the items in the hashes.

# def print_item_sums hsh1, hsh2
#     hsh1[:price] + hsh2[:price]
# end

# p print_item_sums table, book

############################################################

# # Solving Problems with Ruby
# # Euler Problem 1
# # If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# # Find the sum of all the multiples of 3 or 5 below 1000.

# def sum_of_mulitples
#     sum = 0
#     (1...1000).each do |num|
#         @sum = 0
#         if num % 3 == 0 || num % 5 == 0
#             sum += num
#         end
#     end
    
#     p sum
# end

# sum_of_mulitples


############################################################
# # Primes
# # Write a method called check_prime? that will test whether a number is Prime. The method will return true if Prime, false if not.

# def check_prime? num
#     Prime.prime?(num)
# end

# p check_prime? 6

# # Write another method called get_primes that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with get_primes 100, it will print all the Prime numbers up to and including 100.

# # def get_primes num
# #     Prime.each(num) do |prime|
# #         p prime
# #     end
# # end

# # get_primes 100

# # This method can call on the previous check_prime? method.
# # Check out the documentation on Ruby's Prime class

# def get_primes num
#     (1..num).each do |num|
#        if check_prime? num
#             p num
#        end
#     end
# end

# get_primes 100


# # Reminders:

# # A Prime number is a number that is not evenly divisible by another number except 1 and itself. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.


############################################################

# # Pandigital Numbers
# # A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

# # The number 15234 is 1-to-5 pandigital.

# # The number 333 is not 1-to-n pandigital.

# # The number 0 is not 1-to-n pandigital.

# # The number 10 is not 1-to-n pandigital.

# # The number 987654321 is 1-to-9 pandigital.

# # Write a method that takes an argument n and returns true if the number is 1-to-n pandigital, and false if it is not.

# def is_pandigital? num
#     pandigital = false
#     num = num.to_s
#     # p num
#     num_arr = num.split("")
#     # p num_arr
#     num_arr = num_arr.sort
#     # p num_arr
#     num_arr.each do |num| 
#         if num.to_i > 1 && num.to_i == (num_arr.index(num) + 1)
#             pandigital = true
#         end
#     end
#     if pandigital 
#         true
#     else
#         false
#     end
# end

# p is_pandigital? 987654321

############################################################

# Word Frequency
# Write a method that will find the word that appears in a given sentence with the greatest frequency. If there is a tie, either of the words will do as a result.

def word_frequency sentence
    g_freq_word = ""
    g_freq_word_count = 0
    sentence_arr = sentence.split(" ")
    sentence_arr.each do |word| 
        if sentence_arr.count(word) > g_freq_word_count
        g_freq_word_count = sentence_arr.count(word)
        g_freq_word = word
        end
    end
    g_freq_word
end

p word_frequency "it was the best of times it was the worst of times it was the age of wisdom it was the age of foolishness"

