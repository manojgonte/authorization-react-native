import React from "react";
import { Image, Text, View } from "react-native";
import moment from "moment";
import ExStyles from '../style';

export default EnqComment = ({ data }) => {
    const item = data;
    return(
        <View className="flex-row justify-start items-start pt-3">
            <Image 
                source={require('../../assets/images/user-profile.jpg')} 
                className="rounded-full mr-2"
                style={ExStyles.avatar}
            />
            <View>
            <View className="flex-row">
                <Text className="text-black mr-2" style={ExStyles.ysoFontBold}>{item.comment_by}</Text>
                    <Text className="text-[#aaa]">{moment(item?.updated_at).fromNow()}</Text>
                </View>
                <Text className="text-[#6b6b6b]">{item.note}</Text>
            </View>
        </View>
    )
}