import { MAX_LENGTH } from "./constant";
import fs from "fs/promises";
import path from "path";
export class Helper {
  static generateRandomIdForUpload(): string {
    const char =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < MAX_LENGTH; i++) {
      randomId += char.charAt(Math.floor(Math.random() * char.length));
    }
    return randomId;
  }

  static async getAllTheFilesPathFromDirectory(dirPath: string): Promise<string[]> {
    let arrayOfFilesPath: string[] = [];
    const files = await fs.readdir(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const status = await fs.stat(filePath);

      if (status.isDirectory()) {
        const nestedFiles = await this.getAllTheFilesPathFromDirectory(
          filePath
        );
        arrayOfFilesPath.push(...nestedFiles);
      } else {
        arrayOfFilesPath.push(filePath);
      }
    }

    return arrayOfFilesPath;
  }
}
