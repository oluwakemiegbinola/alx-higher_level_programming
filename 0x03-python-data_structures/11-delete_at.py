#!/usr/bin/python3

def delete_at (lst, position):
    if position < 0 or position >= len(lst):
        print("Invalid position")
    else:
        lst.pop(position)

# Example usage:
my_list = [1, 2, 3, 4, 5]
delete_at (my_list, 2)  # Deletes the item at position 2
print(my_list)  # Output: [1, 2, 4, 5]
