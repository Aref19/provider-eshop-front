import { Component } from "react";
import ProviderItem from "./ProviderItems";
import { Items } from "./ProviderItems";
import useAxioPrvate from "../hook/useAxioPrivate";

interface State {
    data: number
}

const items: Items[] = [
    { id: "", amount: 2, price: 2.5, spicalPrice: 4, title: "test2", images: { images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZbprhmd0sjLf12_KRSB9Jx2lvoO8Ih2yYw&usqp=CAU"] } }]
const item = {
    name: 'Item name',
    description: 'Item description',
    price: 9.99,
    // any other properties of the item
};

class Item extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = { data: 1 };
    }

    componentDidMount() {
        const axio = useAxioPrvate();
        const url = "provider/items";
        const CallData = async () => {
            const respose = await axio.get(url, {
                params: {
                    page: 2,
                    size: 10
                }
            })
            console.log(respose.data);

        }
        CallData();

    }

    componentWillUnmount() {
        console.log("componentWillUnmount");

    }

    componentDidUpdate() {
        console.log("componentDidUpdate");

    }

    add = () => {
        this.setState((prevState) => ({ data: this.state.data + 1 }));
    }

    render() {
        return (
            <ProviderItem item={items} />
        )
    }
}

export default Item;

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