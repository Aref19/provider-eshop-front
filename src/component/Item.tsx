import { Component, useState } from "react";
import ProviderItem from "./ProviderItems";
import { Items } from "./ProviderItems";
import useAxioPrvate from "../hook/useAxioPrivate";
import { useEffect } from "react";
import { url } from "inspector";
import { v4 as uuid } from 'uuid'
import Process  from "./Procces";

const Item = () => {
    const [dataItem, setData] = useState([])
    const [load, setLoad] = useState(true)
    const axio = useAxioPrvate();
    useEffect(() => {

        const url = "provider/items";
        const CallData = async () => {
            const respose = await axio.get(url, {
                params: {
                    page: 0,
                    size: 10
                }
            }).then((data) => {
                setLoad(false);
                return data
            })
            setData(respose?.data?.content)


        }
        CallData();
    }, [])

    return (
        <>
            {
                load ? <Process /> : <ProviderItem item={dataItem} />
            }
        </>


    )

}

export default Item;


function uuidv4() {
    throw new Error("Function not implemented.");
}
/*
{ item: Items }

Here, the prop name is item and the type is Items.

You can't use the syntax <item:Items> because that's not valid syntax in JavaScript or TypeScript.
 When defining a prop, you need to use the propsName: PropType syntax.

 if i want do that like 
 class ProviderItem extends Component<Items> {
     i have to give like that <ProviderItem id="1" amount={2} price={2.5} spicalPrice={4} title="Test Item" />

     or   <ProviderItem {...item} />



     // when fetch data the object should have the same property of fetced object json
*/