import React, {View, StyleSheet} from 'react-native';

export default React.createClass({
    render: function(){
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
    }
})
