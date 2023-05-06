import { useForm } from 'react-hook-form';
import EditCss from "../css/Edit.module.css"
import { UUID, randomUUID } from "crypto";
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useReducer } from 'react';
import useAxioPrvate from '../hook/useAxioPrivate';


export interface Items {
   id: UUID,
   amount: number,
   price: number,
   spicalPrice: number,
   title: string,
   des: string,
   imageSet: string[]

}


type action = {
   type: string,
   payload?: any
}

function reducer(state: Items, action: action) {
   switch (action.type) {
      case 'update':
         return { ...state, ...action.payload };
      default:
         throw new Error();
   }
}

const EditItem = () => {
   const axioprivate = useAxioPrvate();
   const [updatitem, dispatch] = useReducer(reducer, {
      id: '',
      amount: 0,
      price: 0,
      specialPrice: 0,
      title: '',
      imageSet: []
   });

   const location = useLocation();
   const { register, handleSubmit } = useForm<Items>();
   const item = location.state;
   console.log(item.myProp);
   const id = useRef<HTMLInputElement>(null);

   if (id.current) {
      id.current.value = item.myProp as UUID
   }

   const submit = (data: Items) => {



      console.log(data);


      if (id.current) {
         data.id = id.current.value as UUID

      }

      console.log("data image:", typeof data.imageSet);
      data.id = item.myProp
      dispatch({ type: 'update', payload: data });

      const sendData = async () => {
         try {

            const response = await axioprivate.put("/provider/updateItem", data)
         } catch (error) {
            console.log(error);

         }

      }

      console.log(updatitem);
      sendData()

      console.log(updatitem);
   }

   return (

      <div className={EditCss.container}>
         <form className={EditCss.content} onSubmit={handleSubmit(submit)}>
            <div className={EditCss.chidle}>
               <label className={EditCss.lable} >id</label>
               <input type='text' className={EditCss.input} {...register("id", { required: false })} ref={id} ></input>
            </div>
            <div className={EditCss.chidle}>
               <label className={EditCss.lable} >amount</label>
               <input type='number' className={EditCss.input} {...register("amount", { required: false })} ></input>
            </div>

            <div className={EditCss.chidle} >
               <label className={EditCss.lable} >price</label>
               <input type='number' className={EditCss.input} {...register("price", { required: false })} ></input>
            </div>
            <div className={EditCss.chidle}>
               <label className={EditCss.lable} >spicalPrice</label>
               <input type='number' className={EditCss.input} {...register("spicalPrice", { required: false })} ></input>
            </div>
            <div className={EditCss.chidle}>
               <label className={EditCss.lable} >title</label>
               <input type='text' className={EditCss.input} {...register("title", { required: false })}></input>

            </div>

            <div className={EditCss.chidle}>
               <label className={EditCss.lable} >des</label>
               <input type='text' className={EditCss.input} {...register("des", { required: false })}></input>

            </div>

            <div className={EditCss.chidle}>
               <label className={EditCss.lable} >image</label>
               <input type='text' className={EditCss.input}  {...register(`imageSet.${0}`, { required: false })} ></input>
            </div>

            <button type="submit">Edit</button>


         </form>

      </div>

   )

}


export default EditItem;


/*
 { ...data, imageSet }
Here, we check if the imageSet field is truthy (i.e. not null or undefined) and if so, we split the string value on the comma delimiter.
 If the imageSet field is falsy, we set it to an empty array.
 Then we pass the updated data object to the dispatch function along with the update action type and the new imageSet array value.
*/