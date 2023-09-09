#!/usr/bin/python3
def delete_at(my_list=[], idx=0):
    if idx >= 0 and idx < len(my_list):
        del my_list[idx]
my_list = [1, 2, 3, 4, 5]
new_list = delete_at(my_list, 2)
 return (new_list)
