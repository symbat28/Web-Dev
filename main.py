from models import Animal, Dog, Cat


def main():
    animal = Animal("Unknown", 10, "gray")

    dog = Dog("Zero", 5, "black", "Belgian")

    cat = Cat("Luna", 3, "white", 7)

    animals = [animal, dog, cat]

    for a in animals:
        print(a)
        print(a.info())
        print(a.speak())
        print("------")


if __name__ == "__main__":
    main()