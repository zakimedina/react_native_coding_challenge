import React from 'react';
import { Modal } from 'react-native';

interface SystemModal {
    show: boolean;
    transparent?: boolean;
    children: any;
}

export const SystemModal = ({ show, children, transparent }: SystemModal) => {

    return (
        <Modal visible={show} transparent={transparent ? true : false} animationType={'slide'}>
            {children}
        </Modal>
    );
}