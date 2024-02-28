import os

# gets the current directory
current = os.getcwd()

# List all files and directories in the specified path
# print(os.listdir(current))


# Gets the name of the currently logged-in user
user = os.getlogin()


def directories():
    name_one = r"C:\Users\Administrator\Desktop\folder-1"
    name_two = r"C:\Users\Administrator\Desktop\carpeta-2"

    # Checks if the directory already exists and only executes if it doesn't
    if not os.path.exists(r"C:\Users\Administrator\Desktop\carpeta-2"):
        # Creates a new directory
        os.mkdir(name_one)
        print("\n Directory created!\n")

        # renames said directory
        os.rename(
            name_one,
            r"C:\Users\Administrator\Desktop\carpeta-2",
        )

    else:
        answer = input("Do you want to delete the directory?[Yes/No] ")
        answer = answer.capitalize()
        match(answer):
            case "Yes":
                os.rmdir(r"C:\Users\Administrator\Desktop\carpeta-2")
                print("\n Directory removed \n")
                
            case "No":
                print("\n The directory stays! \n")
            
            case _:
                print("\n introduce a valid answer \n")

directories()
