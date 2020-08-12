import os
import tinify
import time

tinify.key = "SvRjPbv3TPdv7kSjj0V4sYP2jXyrlzMX"

#first change directory to the images folder
os.chdir("img")
allImages = os.listdir()


# pick up each image in the foler
for eachImage in allImages:

    
    #try again and again to compess it even if errors persisit
    while True:

        try:
            # if image is svg pass it
            if (eachImage[-3::1]=="svg"):
                break
            print(eachImage)
            # compress it and if it was succesfull break out of the forever loop
            source = tinify.from_file(eachImage)
            source.to_file(eachImage)
            print("image complete")
            break
        except Exception as e:
            print (e)


   





        