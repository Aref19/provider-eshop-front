import { useForm } from 'react-hook-form';
import EditCss from "../css/Edit.module.css"
import { UUID } from "crypto";
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
export interface Items {
   id: UUID,
   amount: number,
   price: number,
   spicalPrice: number,
   title: string,
   image: Image[]

}
interface Image {
   url: string
}

const EditItem = () => {
   const location = useLocation();
   const { register, handleSubmit } = useForm<Items>();
   const item = location.state;
   console.log(item.myProp);
   
   const id = useRef<HTMLInputElement | null>(null);
   id.current?.value =  item.myProp ? " " : " "
   const submit = (data: Items) => {
      console.log(data);

   }

   return (
      <>
         <div className={EditCss.container}>


            <form className={EditCss.content} onSubmit={handleSubmit(submit)}>

               <div className={EditCss.chidle}>
                  <label className={EditCss.lable} >id</label>
                  <input type='text' value={""} className={EditCss.input} {...register("id", { required: true })} ref={id} ></input>
               </div>
               <div className={EditCss.chidle}>
                  <label className={EditCss.lable} >amount</label>
                  <input type='text' className={EditCss.input} {...register("amount", { required: true })} ></input>
               </div>

               <div className={EditCss.chidle} >
                  <label className={EditCss.lable} >price</label>
                  <input type='text' className={EditCss.input} {...register("price", { required: true })} ></input>
               </div>
               <div className={EditCss.chidle}>
                  <label className={EditCss.lable} >spicalPrice</label>
                  <input type='text' className={EditCss.input} {...register("spicalPrice", { required: true })} ></input>
               </div>
               <div className={EditCss.chidle}>
                  <label className={EditCss.lable} >title</label>
                  <input type='text' className={EditCss.input} {...register("title", { required: true })}></input>

               </div>

               <div className={EditCss.chidle}>
                  <label className={EditCss.lable} >image</label>
                  <input type='text' className={EditCss.input}  {...register("image", { required: true })} ></input>
               </div>

               <button type="submit">Edit</button>


            </form>

         </div>
      </>
   )

}


export default EditItem;