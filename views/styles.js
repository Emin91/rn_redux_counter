import {StyleSheet} from 'react-native'

export const appStyle = (bgColor, counter) => {
   const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        backgroundColor: bgColor, 
        justifyContent: 'center',
    },
    counterView: {
        flex: 0.4, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    input: {
        width: '100%', 
        height: 40, 
        backgroundColor: 'white',
    },
    resetText: {
        fontSize: 45, 
        color: 'white',
    },
    bnts: {
        width: 200, 
        height: 80, 
        backgroundColor: 'white', 
        borderRadius: 50, 
        flexDirection: 'row',
    },
    leftBtnView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    leftBtnText: {
        fontSize: 45, 
        color: '#2e3c73'
    },
    countTextView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    countText: {
        fontSize: counter <= 99 ? 58 : 38, 
        color: '#2e3c73'
    },
    rightBtnView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    rightBtnText: {
        fontSize: 45, 
        color: '#2e3c73'
    }
}) 
return styles
}
