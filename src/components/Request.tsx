import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import useStoreApp from "../store";

const RequestApp = () => {
    // Set the State Hooks
    const setDataGithub = useStoreApp((state: any) => state.fetch)
    const githubDetailData = useStoreApp((state: any) => state.data)

    useEffect(() => {
        setDataGithub()
    }, [setDataGithub]);

    return (
        <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>ID : {githubDetailData?.id}</Text>
            <Text style={{ color: 'black' }}>Username : {githubDetailData?.login}</Text>
        </View>
    );
};

export default RequestApp;