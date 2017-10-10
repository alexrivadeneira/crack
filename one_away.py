# insert a char, remove a char, replace char
# 2 strs: are they one edit away from one another?
import math

def one_edit_away(str1, str2):
    if math.fabs(len(str1) - len(str2)) > 1:
        return False
    
    str1l = list(str1)
    str2l = list(str2)
        
    freq_dict = {}
    
    
    for item in str1l:
        if item in freq_dict:
            freq_dict[item] += 1
        else:
            freq_dict[item] = 1
    
    for item in str2l:
        if item in freq_dict:
            if item in str1l:
                freq_dict[item] -= 1
            else:
                freq_dict[item] += 1
        else:
            freq_dict[item] = 1
        
    total = 0
    for key in freq_dict.keys():
        total += freq_dict[key]
        
    print freq_dict
    
    if total < -2 or total > 2:
        return False
    return True
        


print one_edit_away("pale", "ple")
print one_edit_away("pales", "pale")
print one_edit_away("pale", "bale")
print one_edit_away("bake", "pale")




