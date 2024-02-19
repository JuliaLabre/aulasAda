import { Request, Response } from "express";
import UserService from "../services/UserService";
import { UserIn, UserOut } from "../models/UserTypes";
import { User as UserOutput, UserInsert } from "../models/User";



class UserController {
    static async listAllUsers (req: Request, res: Response){
        const queryRequest: {} = await req.query;

        if(Object.keys(queryRequest).length === 0){

            const UsersList = await UserService.selectAll();
            
            console.log(UsersList);
            
            res.json(UsersList).status(200);
        }else{
            const UserList = await UserService.selectWithFilters(queryRequest);
            console.log(UserList);

            res.json(UserList).status(200);
            
        }
      
    };

    static async listUserById (req: Request, res: Response){

        const id = await req.params.id;

        const listId = await UserService.selectById(Number(id));

        res.json(listId).status(200);
    };

    static async createNewUser(req: Request, res: Response){   

        const newUser = new UserInsert(req.body.name, req.body.email)   
    
        
       const create = await UserService.insertItem(newUser.toObject());

        res.send('Usuário criado com sucesso.').status(201);
    };

    static async updateUser(req: Request, res: Response){
        const id = await req.params.id;

        const newUser = new UserInsert(req.body.name, req.body.email) 

        UserService.updateItem(Number(id), newUser.toObject())
        res.send('Usuário atualizado com sucesso.').status(204);
    };

    static async deleteUser(req: Request, res: Response){
        const id = await req.params.id;

        UserService.deleteItem(Number(id))
        res.send('Usuário deletado com sucesso.').status(204);
    };
}


export default UserController