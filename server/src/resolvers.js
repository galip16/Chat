
import { Cat } from "./models/Cat";
import { User } from "./models/User";
import { UserInputError } from "apollo-server-core"


export const resolvers = {
    Query: {
        hello: () => "hi",
        cats: async () => await Cat.find(),
        users: async () => await User.find()
    },

    Mutation: {
        createCat: async (_, { name }) => {

            const kitty = new Cat({ name });
            await kitty.save()
            console.log(kitty);
            return kitty
        },

        createAUser: async (_, { name, email, password }) => {
            const newUser = new User({ name, email, password })
            await newUser.save()
            console.log(newUser);
            return newUser
        },

        loginControl: async (_, { email, password }) => {

            const newUser = await User.findOne({ email });

            if (!newUser) {

                throw new UserInputError('User not found');

            }

            if (password !== newUser.password) {
                throw new UserInputError("Password_incorrect");

            }

            return newUser
        },
    }
}

