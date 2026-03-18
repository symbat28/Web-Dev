a, n = input().split()
a = float(a)
n = int(n)

result = 1
for i in range(n):
    result *= a

print(result)