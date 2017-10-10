# string compression
# aabcccaaa -> a2b1c5a3
# but if original str is shorter than compressed, return orig

def compress(mystr):
    mystr_len = len(mystr)
    mystr_list = list(mystr)
    
    idx = 1
    prev = mystr_list[0]
    curr_count = 1
    new_str = ""
    
    while idx < mystr_len:
        if len(new_str) > mystr_len:
            return mystr
        elif mystr_list[idx] == prev:
            curr_count += 1
            idx += 1
        else:
            new_str += str(prev) + str(curr_count)
            curr_count = 0
            prev = mystr_list[idx]
    
    idx = mystr_len
    new_str += str(prev) + str(curr_count)
            
            
            
    return new_str

print compress("ccaattaaaaa")

        