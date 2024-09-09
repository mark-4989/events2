import mongoose from 'mongoose'
import clientel from '../models/userModel.js'

// an asyncronus function
export const getsDetails = async (req,res)=>{
try {
  const Clientel = await clientel.find()
  res.status(200).json(Clientel)
} catch (error) {
  res.status(404).json({message: error.message})
}
}

export const detailsId = async (req,res) =>{
  const id = req.params.id
  // clientel.findById({id})
  try {
    const Clientel = await clientel.findById({_id:id})
    res.status(200).json(Clientel)
  } catch (error) {
    res.status(404).json({message: error.message})
    console.log(error.message)
  }
}

    export const postsDetails = async (req,res)=>{
      const post = req.body
const newPost = new clientel(post)
try {
  await newPost.save()
  res.status(201).json(newPost)
} catch (error) {
  res.status(409).json({message: error.message})
}
    }

//     export const updateDetails = async (req,res) =>{
// const {id: _id} = req.params;
// const wants = req.body;
// if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('unable to update invalid id')
//   const updatedDetails = await clientel.findByIdAndUpdate(_id,wants,{new:true})
// res.json(updatedDetails)
//     }
export const updateDetails = async (req, res) => {
 
  const id = req.params.id
  clientel.findByIdAndUpdate({_id : id}, req.body)
  .then(res => res.json(res))
  .catch(err => res.json(err))

};


    export const deleteDetails = async (req,res) =>{
      const id =req.params.id;
      clientel.findByIdAndDelete({_id: id})
      .then(res => res.json(res))
      .catch(err => res.json(err))

      // if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('unable to delete invalid id');
      //    await clientel.findByIdAndDelete(id);
      //   res.json({message:'post deleted successfuly'});
    }