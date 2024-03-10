import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getUsers = async (req, res) => {
    const allUsers = await prisma.user.findMany()
    res.send(allUsers);
};

export const createUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {name: req.body.name, lastName: req.body.lastName, age: req.body.age}
    })
    
    res.send(`User ${user.name} added to the database`);
}

export const findUser = async (req, res) => {
    const foundUser = await prisma.user.findUnique({
        where: 
        {
            id: Number(req.params.id),
        },
    })
    res.send(foundUser);
}

export const deleteUser = async (req, res) => {
    const deletedUser = await prisma.user.delete( {
        where: {
            id: Number(req.params.id)
        },
    } )
    res.send("User deleted from the database")
}

export const updateUser = async (req, res) => {

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            name: req.body.name ?? undefined,
            lastName: req.body.lastName ?? undefined,
            age: req.body.age ?? undefined
        }
    })
    res.send(`User with the id ${updateUser.id} updated`)
}