import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import DateSelection from "../components/DateSelection";
import Greeting from "../components/Greetings";
import TimeSlots from "../components/TImeSlots";
import BookingCard from "../components/BookingCard";
import BottomNavigation from "../components/BottomNavigation";


const FindCentersScreen = () =>{
    return(
        <View style={{
            flex:1,
            backgroundColor: '#fff',
            padding:16
        }}>
            <SearchBar/>
            <DateSelection/>
            <Greeting/>
            <TimeSlots/>
            <BookingCard/>
            <BottomNavigation/>
        </View>
    )
}

export default FindCentersScreen;