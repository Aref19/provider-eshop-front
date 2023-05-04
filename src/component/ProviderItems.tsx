
import { Component } from "react";
import ProviderItemCss from '../css/ProviderItemCss.module.css'
import Item from "./Item";
import { UUID } from "crypto";
import { useCustomNavigate } from "../hook/Navigate";
import { useNavigate } from "react-router-dom";



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
interface Props {
    items: Items[];
}


const ProviderItem = ({ items }: Props) => {
    const nav = useNavigate()

    const naviEdit = (Item: Items) => {

        nav("/edit", { state: { myProp: Item.id } })
    }
    return (
        <div className={ProviderItemCss.container}>

            {items &&


                items.map(Item => {

                    return (
                        <>

                            <div key={Item.id} className={ProviderItemCss.child_container}>
                                <div className={ProviderItemCss.img}>
                                    <img src={Item.image[0].url} />
                                </div>

                                <div className={ProviderItemCss.childsecound_container}>
                                    <h1>title: {Item.title}</h1>
                                    <p>price: {Item.price}</p>
                                    <p>amount: {Item.amount}</p>
                                    <p>spicalPrice: {Item.spicalPrice}</p>
                                    <button className={ProviderItemCss.edit_button} onClick={() => { naviEdit(Item) }}>Edit</button>
                                </div>
                            </div>

                        </>

                    )
                })
            }

        </div>
    )

}

export default ProviderItem;

/*
{ item: Items }

Here, the prop name is item and the type is Items.

You can't use the syntax <item:Items> because that's not valid syntax in JavaScript or TypeScript.
 When defining a prop, you need to use the propsName: PropType syntax.

 if i want do that like 
 class ProviderItem extends Component<Items> {
     i have to give like that <ProviderItem id="1" amount={2} price={2.5} spicalPrice={4} title="Test Item" />

     or   <ProviderItem {...item} />
*/