import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text, SafeAreaView, Pressable, Button } from "react-native";
import { FooterView, InputSearch, SystemModal } from '../../components';
import { queryService, queryServiceNext } from "../../services";
import { listStyle, screen } from "../../styles";
import { keyExtractor } from "../../utils";

export const SystemListView = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Array<any>>([]);
    const [dataNext, setDataNext] = useState<Array<any>>([]);
    const [state, setState] = useState<any>({ visible: false, selectedItem: '' });
    const [offset, setOffset] = useState<number>(10);
    const [page, setPage] = useState<any>({ next: null, prev: null });
    const [clear, setClear] = useState<boolean>(true);
    const [search, setSearch] = useState<Array<any>>([]);

    let { layout, text, container } = screen || {};
    let { right, text: textList, title } = listStyle || {};

    useEffect(() => {
        init();
    }, [offset]);

    const init = async () => {
        setLoading(true);

        let data = await queryService({ offset });
        let dataNext = await queryServiceNext();

        setPage({ ...page, next: offset, prev: offset - 10 });
        setData(data?.launches);
        setSearch(data?.launches);
        setDataNext(dataNext?.launchNext);
        setLoading(false);
    }

    const renderItem = ({ item, index }: any) => {
        return (
            <Pressable onPress={() => { }} key={index} style={listStyle.container}>
                {renderFormat(item, index)}
            </Pressable>
        )
    }

    const renderFormat = (item: any, index: number) => {
        let { mission_name, rocket, details } = item || {};
        let { rocket_name, rocket_type } = rocket || {};
        let { visible } = state || {};

        return (
            <View key={index}>
                <View style={right}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={title}>{`Mission Name :  `}</Text>
                        <Text style={textList}>{`${mission_name}`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={title}>{`Rocket Name :  `}</Text>
                        <Text style={textList}>{rocket_name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={title}>{`Rocket Type :  `}</Text>
                        <Text style={textList}>{rocket_type}</Text>
                    </View>
                </View>
                <View style={{ padding: 16 }}>
                    <Text style={{ textAlign: 'justify' }}>{`${details}` || ' --- '}</Text>
                </View>
                {visible ? <></> : <Button onPress={() => setState({ ...state, visible: true, selectedItem: item })} title="COMPARE" />}
            </View>
        )
    }

    const renderModal = () => {
        return (
            <SafeAreaView style={layout}>
                <View style={container}>
                    <Text style={text}>{`LAUNCHES SPACE X`}</Text>
                    <Button color={'red'} title="X" onPress={() => setState({ ...state, visible: false })} />
                </View>
                <View style={{ padding: 24 }}>
                    {renderFormat(dataNext, offset)}
                </View>
            </SafeAreaView>
        )
    }

    let renderSearch = () => {
        return (
            <View style={{ padding: 16 }}>
                <InputSearch
                    clear={clear}
                    keys={['mission_name', 'rocket.rocket_name']}
                    setClear={setClear}
                    searchList={search}
                    setData={setData}
                    placeHolder={'Enter the keyword to search'}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={layout}>
            <View style={container}>
                <Text style={text}>{`SPACE X`}</Text>
            </View>
            {renderSearch()}
            {loading ? <ActivityIndicator size={'large'} color={'#01579B'} /> : <></>}
            <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16, paddingBottom: 50 }}
            />
            <SystemModal show={state?.visible} children={renderModal()} />
            <FooterView page={page} setOffset={setOffset} />
        </SafeAreaView>
    );
};
