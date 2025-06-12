console.log("file handling")


// 1. fs file system promise asych
// to import readFile,writefile , appendFile
// readfile read data from existing file 
// write file create new file and writes data into that file 
// appendfile append data to existing file
// mkdir create new folder
import {readFile,writeFile,appendFile,mkdir} from  "fs/promises";

// 2. read file will store it in data
// utf-8 is file type
// read_file is function when its called it runs then filename(sample.txt) is carried and async and await
// await: pauses here and waits for readFile() to finish reading the file.
// Meanwhile, the rest of your program (other code outside this function) can continue running — that's the benefit of async/non-blocking code.
const read_file= async(filename)=>{
    const data = await readFile(filename,"utf-8")
    console.log(data)
}

// 3. call function
// read_file('sample.txt')

// 4. create file 
const create_file= async(filename,content)=>{
    await writeFile(filename,content)
    console.log("file created")
}


// 5. call function
// create_file('AI.txt','this is testing file')

// 6. append to file
const append_file= async(filename,content)=>{
    await appendFile(filename,content)
    console.log("data appended")
}

// 7. call function
//  append_file('AI.txt','this is additional data')

 // 8. create folder
//  recursive for calling sub directories
 const create_dir= async(dirname)=>{
    await mkdir(dirname,{recursive: true})
    console.log("folder created")
}

// 9. call function
//  create_dir('components')
 create_dir('AI/sub') // to create sub directory