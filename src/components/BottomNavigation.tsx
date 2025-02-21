import { Text, TouchableOpacity, View } from "react-native";


const BottomNavigation: React.FC =() =>{
return(
    <View 
    style={{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        flexDirection: "row",
        justifyContent:"space-around",
        padding:12,
        backgroundColor: '#eee'
    
    }}>
        {[
            'Bookings','Activities','Notifications','Menu'
        ].map((item, index)=>(
            <TouchableOpacity key={index}>
                <Text>{item}</Text>
            </TouchableOpacity>
        ))
        }
    </View>
);
}

export default BottomNavigation;