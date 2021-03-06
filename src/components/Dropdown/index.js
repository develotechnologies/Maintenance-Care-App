import React from 'react';
import { Text, View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';
const Component = ({ isObjectData = false, defaultValue, option, onselect, LabelValue }) => {
    return (
        <View style={styles.dropdownView}>
            <ModalDropdown style={styles.dropdownField}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownStyle}
                dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                options={option}
                defaultValue={defaultValue}
                renderRow={(item) => {
                    return (
                        <Text style={styles.dropdownOption}>{item.name}</Text>
                    )
                }}
                onSelect={onselect}
            >
                <View style={styles.innerValue}>
                    <Text style={styles.dropdownText}>{LabelValue}</Text>
                    <Text style={styles.dropdownText}>{defaultValue}</Text>
                </View>
            </ModalDropdown>
        </View>
    );
};
export default Component;
