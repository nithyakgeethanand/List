import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import rgbHex from 'rgb-hex';

// https://openlibrary.org/search.json?q=start

const Width = Dimensions.get("screen").width - 25;
const List = () => {
    const [color, setColor] = useState([]);

    useEffect(() => {
        postApi();
    }, []);

    const postApi = async () => {
        let response = await fetch("http://colormind.io/api/", {
            method: "POST",
            body: JSON.stringify({ model: "default" })
        }).then(res => {
            console.log("here");
            return res.json();
        }).then(res => {
            setColor(res.result);
            return res.result;
        }).catch(error => {
            console.log("error : ", error);
        });
        console.log("hehrkhwh");
        console.log(color);
    }

    const getColor = () => {
        console.log("clicked");
        postApi();
    }

    return (
        <View>
            <View style={{
                // alignItems: "center",
                // flexDirection: "row",
                // margin: 5,
                // backgroundColor: "red",
                // width: Width
                display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"
            }}>

                {color.map((item) =>
                    <View style={{
                        height: 100,
                        width: 100,
                        margin: 2,

                        backgroundColor: `rgb(${item[0]}, ${item[1]}, ${item[2]})`,
                    }}>
                        {console.log(item)}
                        <Text>{item}</Text>
                    </View>)}
            </View>


            <Pressable onPress={getColor}>
                <View style={styles.colorBoxButton}>
                    <Text>Regenerate color</Text>
                </View>

            </Pressable>

        </View >
    );
}

export default List

const styles = StyleSheet.create({
    colorBoxButton: {
        padding: 20,
        backgroundColor: "green",
        borderRadius: 5,

    }
})

