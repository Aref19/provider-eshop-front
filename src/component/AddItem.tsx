
import { useForm } from 'react-hook-form';

import EditCss from "../css/Edit.module.css"
import useAxioPrvate from '../hook/useAxioPrivate';


interface Items {
    amount: number,
    price: number,
    spicalPrice: number,
    title: string,
    desc: string,
    image: string[]

}

const AddItem = () => {
    const { register, handleSubmit } = useForm<Items>();
    const axioprivate = useAxioPrvate();



    const submit = (data: Items) => {
        console.log(data);
        const resposne = axioprivate.post("provider/addItems", data);

    }

    return (

        <div className={EditCss.container}>
            <form className={EditCss.content} onSubmit={handleSubmit(submit)}>
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
                    <input type='text' className={EditCss.input} {...register("desc", { required: false })}></input>

                </div>

                <div className={EditCss.chidle}>
                    <label className={EditCss.lable} >image</label>
                    <input type='text' className={EditCss.input}  {...register(`image.${0}`, { required: false })} ></input>
                </div>

                <button type="submit">Edit</button>


            </form>

        </div>

    )

}

export default AddItem;