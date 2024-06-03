import {Image, StyleSheet, Text, View} from "react-native";
import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";

interface productProps {
    product: {
        id: number,
        name: string,
        image: string,
        price: number
    }
}

export const ProductListItem = (props: productProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: products[0].image}} style={styles.image} />

            <Text style={styles.title}>{products[0].name}</Text>
            <Text style={styles.price}>${products[0].price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 12
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: "bold"
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    }
});