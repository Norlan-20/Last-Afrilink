/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View} from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const Modal = (props) =>{
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => {setVisible(true);};
    const hideDialog = () => {setVisible(false);};
    return (
        <Provider>
            <View>
                <Button onPress={showDialog}>Show Dialog</Button>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.content>
                            <Paragraph> This is simple dialog </Paragraph>
                        </Dialog.content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
    )
}
export default Modal;