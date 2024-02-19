import { Sequelize, FindOptions, Op } from "sequelize";
import { UserIn, UserOut } from "../models/UserTypes";
import { User as UserOutput, UserInsert } from "../models/User";
import { User } from "../database/database";


export default class UserService{
    
    static async selectAll(): Promise<UserOut[]>{
        
        const users = await User.findAll()

        const UserList:UserOut[] = []

        users.every(user => UserList.push(new UserOutput(user.dataValues.id, user.dataValues.name, user.dataValues.email).toObject()));
        
        return UserList;

    };

    static async selectById(id: number): Promise<UserOut>{
        
        const user = await User.findByPk(id);

        const userReturn = new UserOutput(user?.dataValues.id, user?.dataValues.name, user?.dataValues.email);
        
        return userReturn;
        
    };

    static async selectWithFilters(obj:{}): Promise<UserOut[]>{
        const filterQuery: string[] = await Object.keys(obj);
        const filterValues: string | number[] = await Object.values(obj);
        const dynamicFilters: Record<string, any> = {};
        
        filterQuery.map((key: string, index: number) => {
            dynamicFilters[key] = {[Op.like]: `%${filterValues[index]}%`}
        })

        const filter: FindOptions = {
            where: dynamicFilters,
        }

        const filtedList = await User.findAll(filter);

        const UserList:UserOut[] = [];

        filtedList.every(user => UserList.push(new UserOutput(user.dataValues.id, user.dataValues.name, user.dataValues.email).toObject())); // true
        
        return UserList;
    };

    static async insertItem(user: UserIn){
       
        const {name, email} = await user;
        User.create({name: name, email: email})
    };

    static async updateItem(id: number, user:UserIn){
        User.update({name: user.name, email: user.email},{
            where:{
                id:id
            }
        })
    };

    static async deleteItem(id: number){
        User.destroy({
            where:{
                id: id
            }
        })
    };

};