import * as fs from 'fs';

const fileDirectoryCheck = (uploadfileDirectory: any): void => {
    // const fileDirectoryPath: String = `${process.env.FILE_DIRECTORY_PATH}`;
    // console.log(fs.existsSync(uploadfileDirectory));
    
    try {
        if(!fs.existsSync(uploadfileDirectory)) fs.mkdirSync(uploadfileDirectory, { recursive: true });    
    } catch (error) {
        console.log(`${new Date()} : ${error}`);
    }
}

export default fileDirectoryCheck;