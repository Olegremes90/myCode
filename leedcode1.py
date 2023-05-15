'''Найти самую длинную последовательность неповторяющихся символов в строке'''

s = 'zcvbvggthmo'

def longest_string(s: str):
    charSet = set()
    l = 0
    res = 0
    for r in range(len(s)):
        while s[r] in charSet:
            charSet.remove(s[l])
            l += 1
        charSet.add(s[r])
        res = max(res, r - l + 1)
    return res


print(longest_string(s))