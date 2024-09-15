
export default function convertToBase64(file){
return new Promise((resolve, reject) => {
    const fileReader = new fileReader();
    fileReader.readDataAsURL(file)

    fileReader.onLoad = () =>{
        resolve(fileReader.result)
    }

    fileReader.onError = (error) =>{
        reject(error)
    }
})
}