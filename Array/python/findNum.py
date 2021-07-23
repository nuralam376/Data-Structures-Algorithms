numbers = [3, 4, 8, 10, 11, 3]
target = 9

for element in numbers:
    if element == target:
        print("found")
        break
else:
    print("Not found")


start = 0
end = len(numbers)

while start < end:
    if numbers[start] == target:
        print("found")
        break
    start += 1
else:
    print("not found")