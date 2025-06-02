


export class Helper {

    static generateRandomIdForUpload(): string{

        const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomId = "";
        for (let i = 0; i < 10; i++) {
            randomId += char.charAt(Math.floor(Math.random() * char.length));
        }
        return randomId;

    }
}