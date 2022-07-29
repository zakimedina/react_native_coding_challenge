import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

let _ = require('lodash');

interface IAuto {
    searchList: Array<any>;
    placeHolder?: string;
    setData: Function;
    setClear: Function;
    clear: boolean;
    keys?: Array<any>;
}

export const InputSearch = (props: IAuto) => {
    let { searchList, keys = ['mission_name', 'rocket_name'], clear, setData, setClear, placeHolder = 'Enter your search key word',
    } = props || {};

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        onClear();
        () => { return; }
    }, [clear]);

    const filteredList = function (search: string, keys: Array<any>) {
        var lowSearch = search?.toLowerCase();
        return searchList?.filter(w => 
            keys?.some(key => {
                let val = _.get(w, key);
                return String(val)?.toLowerCase()?.includes(lowSearch)
            })
        );
    }
    
    const onChangeText = (query: string) => {
        setValue(query);
        setData(filteredList(query, keys));
    };

    const onClear = () => {
        setValue('');
        setClear(false);
        setData(searchList);
    };

    return (
        <TextInput
            value={value}
            style={{ borderRadius: 16, borderWidth: 1, padding: 16 }}
            placeholder={placeHolder}
            onChangeText={onChangeText}
            returnKeyType={'search'}
        />
    );
};
