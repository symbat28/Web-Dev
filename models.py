class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Animal makes a sound"

    def info(self):
        return f"{self.name} is {self.age} years old and {self.color}"

    def __str__(self):
        return f"Animal: {self.name}"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof"   

    def info(self):
        return f"Dog {self.name}, breed: {self.breed}"


class Cat(Animal):
    def __init__(self, name, age, color, lives):
        super().__init__(name, age, color)
        self.lives = lives

    def speak(self):
        return "Meow"   
    def info(self):
        return f"Cat {self.name}, lives left: {self.lives}"