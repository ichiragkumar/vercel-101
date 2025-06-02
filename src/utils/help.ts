import { MAX_LENGTH } from "./constant";



export class Helper {

    static generateRandomIdForUpload(): string{

        const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomId = "";
        for (let i = 0; i < MAX_LENGTH; i++) {
            randomId += char.charAt(Math.floor(Math.random() * char.length));
        }
        return randomId;

    }
}