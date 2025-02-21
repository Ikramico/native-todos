import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";


const DateSelection: React.FC =() =>{
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
                '10 Mon', '11 Tue', '12 Wed', '13 THU'
            ].map((date, index) =>(
                <TouchableOpacity key={index} style={{marginRight: 12, padding: 8, borderRadius: 8, backgroundColor:'#ddd'}}>
                    <Text>{date}</Text>
                </TouchableOpacity>
            ))
            }
        </ScrollView>
    );
}

export default DateSelection;