import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView  showsHorizontalScrollIndicator={false}>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <View style={styles.image}>
                        <TouchableOpacity onPress={() => console.log('route')}>
                            <Image
                                source={require('../assets/sac.png')}
                                style={{ height: 500 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ligne}>
                        <View style={styles.viewText}>
                            <Text style={styles.text}>Order Grocery</Text>
                            <Text style={styles.text}>and Get deliverey</Text>
                            <Text style={styles.text}>in few minutes</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('route')}>
                                <Text style={styles.bouton}>Commencer</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6f1ed',
        flex: 1,
        display: 'flex',
        // padding: 20,
        alignItems: 'center',
    },
    ligne: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        // marginTop: 20,
        paddingTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    viewText: {
        width: '100%',
        height: 300,
        alignItems: 'center',
    },
    text: {
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bouton: {
        margin: 20,
        color: 'green',
        borderWidth: 2,
        borderColor: 'green',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 35,
        paddingLeft: 35,
        fontSize: 23,
        borderRadius: 20,
    },
    image: {
        height: 500,
    }
});

export default HomeScreen;