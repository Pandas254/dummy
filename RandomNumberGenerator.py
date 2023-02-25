import random

def generate_random_numbers(n, lower_bound, upper_bound):
    """
    Generates a list of n random integers between lower_bound and upper_bound (inclusive)
    """
    return [random.randint(lower_bound, upper_bound) for i in range(n)]

# Example usage
random_numbers = generate_random_numbers(10, 1, 100)
print(random_numbers) # Output: [55, 89, 42, 93, 68, 49, 95, 44, 6, 80]
