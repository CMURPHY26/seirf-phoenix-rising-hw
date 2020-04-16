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



# Nums Array and Enumerables
# With the following array:

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# Use .uniq to print the array with all duplicate entries removed

p nums.uniq

# Next, use .push and .pop , .shift .unshift and .length on the array as you would with javaScript (if you need to add a number, add 5)
nums.push(5)
p nums
nums.pop()
p nums
nums.unshift(5)
p nums
nums.shift()
p nums

# Use .include? to check if the array contains the number 8
p nums.include? 8

# Use .find_all to find all the numbers greater than 10
p nums.find_all { |num| num > 10}

# use .all? to check if all the numbers are greater than 0?
p nums.all? { |num| num > 0}

# use any? to check if there are any numbers that are divisible by 8

p nums.any? { |num| num % 8 == 0 }

# use .count to let you know how many numbers are greater than 4

p nums.count { |num| num > 4}

# use .each_with_index to print each item times its index

nums.each_with_index { |num, index| p num * index}

# .find the number that is divisible by 7 and 5 and is greater than 0

p nums.find {|num| (num % 7 == 0) && num % 5 == 0 && num > 0}

p nums.find {|num| num % 35 == 0 && num > 0}


# .find_index of the number that is divisible by 5 and 7 and is greater than 0

p nums.find_index { |num| (num % 7 == 0) && num % 5 == 0 && num > 0 }

# return the .first 3 numbers

p nums.first(3)

# return the .last 5 numbers

p nums.last(5)

# .group_by the modulo of 3 ( % 3 )

p nums.group_by {|num| num % 3}

# use minmax to return the smallest and largest number
p nums.minmax
# use .reject to return all the numbers that are NOT divisible by 3
p nums.reject { |num| num % 3 == 0 }

# use .select to return all the numbers divisible by 5
p nums.select { |num| num % 5 == 0}