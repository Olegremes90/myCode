'''Найти все недостающие числа последовательности от 1 до 9, не входяящие в nums'''
nums = [2, 7, 11, 5, 15, 3, 5, 4, 8, 1]
target = 9
d = []
count = 0
for i in range(len(nums)):
    for j in nums:
        m = nums.index(j)
        if j != nums[i]:
            c = j + nums[i]

            if c == target:
                d.append(m)
                d.append(i)


print(list(set(d)))
