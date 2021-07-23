numbers = [1, 2, 3, 4]
result = []

start = len(numbers) - 1

while start >= 0:
    if numbers[start] not in result:
        result.append(numbers[start])
    start -= 1

print(result)


start = 0
end = len(numbers) - 1

while start < end:
    temp = numbers[start]
    numbers[start] = numbers[end]
    numbers[end] = temp
    start += 1
    end -= 1

print(numbers)