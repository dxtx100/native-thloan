import React, {View, Text} from 'react-native';
import Container from '../../components/container';
import styles from '../styles/back';

export default React.createClass({
    render: function(){
        return (
            <Container>
                <View style={styles.container} >
                    <Text style={styles.iconStyle}>&#xe601;</Text>
                    <Text style={styles.iconStyle}>&#xe602;</Text>
                    <Text style={styles.iconStyle}>&#xe603;</Text>
                    <Text style={styles.iconStyle}>&#xe604;</Text>
                    <Text style={styles.iconStyle}>&#xe605;</Text>
                    <Text style={styles.iconStyle}>&#xe606;</Text>
                    <Text style={styles.iconStyle}>&#xe607;</Text>
                </View>
            </Container>
        )
    }
});
