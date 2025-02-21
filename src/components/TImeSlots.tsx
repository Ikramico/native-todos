import { ScrollView, Text, TouchableOpacity } from "react-native";

const TimeSlots: React.FC =() =>{
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
                '12:00','13:00','14:00'
            ].map((time, index) =>
                (<TouchableOpacity key={index} style={{
                    marginRight:12, padding:8, borderRadius:8, backgroundColor: '#ddd'
                }}>
                    <Text>{time}</Text>
                </TouchableOpacity>))
            
}
        </ScrollView>
    );
}

export default TimeSlots;