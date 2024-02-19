import { Router } from "express";
import UserController from "../controllers/UserController";

const usersRouter = Router();

/**
 * @openapi
 * 
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários cadastrados. Aceita query params para fazer filtro ao consultar o banco de dados.
 *     responses:
 *       '200':
 *         description: Um array de usuários em formato json
 *         content:
 *           application/json:
 *             schema: 
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

usersRouter.get('/', UserController.listAllUsers);

/** 
* @openapi
*
* /api/users/{id}:
*   get:
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*         minItems: 1
*     summary: Retorna o usuário selecionado através do id passado como route params.
*     responses:
*       '200':
*         description: Um usuário em formato json
*         content:
*           application/json:
*             schema: 
*               $ref: '#/components/schemas/User'
*       '500':
*         description: Erro interno do servidor
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Error'
*/

usersRouter.get('/:id', UserController.listUserById);

/**
 * @openapi
 *  /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       description: Dados do usuário a ser criado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                  type: string
 *             example:
 *               name: exemplo
 *               email: exemplo@email.com
 *     responses:
 *       '200':
 *         description: Mensagem de criação de usuário
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/NewUser'
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

usersRouter.post('/', UserController.createNewUser);

/**
 * @openapi
 *  /api/users/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         minItems: 1
 *     summary: Atualiza um usuário selecionando através do id
 *     requestBody:
 *       description: Dados do usuário a ser criado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                  type: string
 *             example:
 *               name: exemplo
 *               email: exemplo@email.com
 *     responses:
 *       '200':
 *         description: Mensagem de atualização de usuário
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/UpdatedUser'
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */


usersRouter.put('/:id', UserController.updateUser);

/**
 * @openapi
 *  /api/users/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         minItems: 1
 *     summary: Deleta um usuário selecionado através do id
 *     responses:
 *       '200':
 *         description: Mensagem de delete de usuário
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/DeletedUser'
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */


usersRouter.delete('/:id', UserController.deleteUser);



export default usersRouter;