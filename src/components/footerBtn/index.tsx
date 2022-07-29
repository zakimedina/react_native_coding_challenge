import React from "react";
import { Button, View } from "react-native";
import { footerBtn } from '../../styles';

interface Iprops {
    page: {
        prev: number;
        next: number;
    }
    setOffset: Function;
}

export const FooterView = (props: Iprops) => {
    let { page, setOffset } = props || {};
    let { prev, next } = page || {};
    let { divider, container, layout, align } = footerBtn || {};

    let buttonActions = [
        {
            name: ' << ',
            visible: prev,
            onPress: () => {
                if (prev) {
                    setOffset((o: number) => o - 10);
                }
            }
        },
        {
            name: ' >> ',
            visible: next,
            onPress: () => {
                if (next) {
                    setOffset((o: number) => o + 10);
                }
            }
        }
    ];

    return (
        <>
            <View style={divider} />
            <View style={container}>
                <View style={layout}>
                    <View style={align}>
                        {
                            buttonActions?.map((ef: any, k: number) => {
                                let { name, onPress, visible } = ef || {};
                                if (visible) {
                                    return (
                                        <Button
                                            key={k}
                                            title={name}
                                            color={'#01579B'}
                                            onPress={onPress}
                                        />
                                    )
                                } else return <View key={k + 10} style={{ alignItems: 'flex-end' }} />
                            })
                        }
                    </View>
                </View>
            </View>
        </>
    )
};