import random
import string

def generate_password(length=12):
    """
    Generate a strong random password of a specified length (default 12).
    """
    # Define the set of characters to choose from
    characters = string.ascii_letters + string.digits + string.punctuation

    # Use random.choices() to generate a sequence of random characters
    password = ''.join(random.choices(characters, k=length))

    return password

# Example usage
password = generate_password()
print(password)
