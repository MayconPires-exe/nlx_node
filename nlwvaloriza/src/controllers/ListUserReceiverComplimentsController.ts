import { Request, Response } from "express"
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService"

class ListUserReceiveComplimentsController {
    async hendle(request: Request, response: Response) {
        const { user_id } = request

        const listUserReceiveComplimentsService = new ListUserReceiverComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}
export { ListUserReceiveComplimentsController }