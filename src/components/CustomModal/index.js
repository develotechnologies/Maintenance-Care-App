import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { height } from 'react-native-dimension';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from '../../utills/Colors';
import Button from '../Button';
import { MultiInput } from '../InputField';
import styles from './styles';
export const CustomModal = ({
    isVisible = false,
    modalHeading = '',
    onClose = () => { },
    onPressCancel = () => { },
    onPressYes = () => { },
    placeholder = '',
    cancelBtnTextStyle = {}
}) => {
    return (<Modal isVisible={isVisible} >
        <View style={styles.modalContainer}>

            <View style={styles.closeContainer}>
                <Text style={styles.modalHeading}>{modalHeading}</Text>
                <TouchableOpacity onPress={onClose} >
                    <AntDesign name="closecircle" size={height(3.5)} color={AppColors.black} />
                </TouchableOpacity>
            </View>

            <View style={styles.bodyContainer}>
                <MultiInput containerStyle={styles.inputBox}
                    placeholder={placeholder}
                />
                <View style={styles.row}>
                    <Button containerStyle={styles.noButtonStyle} btnTextStyle={cancelBtnTextStyle}
                        title={'Cancel'} onPress={onPressCancel} />
                    <Button containerStyle={styles.buttonStyle}
                        title={'Yes'} onPress={onPressYes} />
                </View>

            </View>
        </View>
    </Modal>)
};

export const ForgotModal = ({
    isVisible = false,
    modalHeading = '',
    onClose = () => { },
    onPressCancel = () => { },
    onPressYes = () => { },
    placeholder = '',
    cancelBtnTextStyle = {}
}) => {
    return (<Modal isVisible={isVisible} >
        <View style={styles.modalContainer}>

            <View style={styles.closeContainer}>
                <Text style={styles.modalHeading}>{modalHeading}</Text>
                <TouchableOpacity onPress={onClose} >
                    <AntDesign name="closecircle" size={height(3.5)} color={AppColors.black} />
                </TouchableOpacity>
            </View>

            <View style={styles.bodyContainer}>

                <View style={styles.row}>
                    <Button containerStyle={styles.noButtonStyle} btnTextStyle={cancelBtnTextStyle}
                        title={'Cancel'} onPress={onPressCancel} />
                    <Button containerStyle={styles.buttonStyle}
                        title={'Yes'} onPress={onPressYes} />
                </View>

            </View>
        </View>
    </Modal>)
};