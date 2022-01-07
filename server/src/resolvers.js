
import { Cat } from "./models/Cat";
import { User } from "./models/User";


export const resolvers = {
    Query: {
        hello: () => "hi",
        cats: async () => await Cat.find()
    },

    Mutation: {
        createCat: async (_, { name }) => {

            const kitty = new Cat({ name });
            await kitty.save()
            console.log(kitty);
            return kitty
        },

        createAUser: async (_, { name, email, password }) => {
            const newAnimal = new User({ name, email, password })
            await newAnimal.save()
            console.log(newAnimal);
            return newAnimal
        }
    }
}

