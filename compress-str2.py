def compress_alt(mystr):
    mystr_len = len(mystr)
    consec = 0
    newstr = ""
    for i in range(mystr_len):
        consec += 1
        if (i + 1 >= mystr_len) or (mystr[i + 1] != mystr[i]):
            newstr += str(mystr[i]) + str(consec)
            consec = 0
    
    print "===="
    print mystr, "mystr"    
    print newstr, "newstr "
    return newstr if mystr_len > len(newstr) else mystr
        
print compress_alt("haaimaaaomaan")
print compress_alt("tttttttttttest")