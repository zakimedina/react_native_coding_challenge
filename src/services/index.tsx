import axios from "axios";

export const getQueryLaunches = (limit: number, offset: number) => `
{
    launches(limit: ${limit}, offset: ${offset}){
        id, 
        mission_name
        rocket {
            rocket_name
            rocket_type
        }
        details
    }
}`;

export const getQueryLaunchesNext = () => `
{
    launchNext {
        id, 
        mission_name, 
        rocket { 
            rocket_name, 
            rocket_type 
        }
        details
    }
}`;

export const queryService = async (skipObj: {}) => {
    let { limit = 10, offset = 0 }: any = skipObj || {};
    const QUERY_PARAMS_LAUNCHERS = getQueryLaunches(limit, offset);

    try {
        let response = await axios({
            url: 'https://api.spacex.land/graphql/',
            method: "POST",
            data: {
                query: QUERY_PARAMS_LAUNCHERS
            }
        });
        return response?.data?.data;
    } catch (e) {
        console.log(e)
    }
};

export const queryServiceNext = async () => {
    const QUERY_PARAMS_LAUNCHERS = getQueryLaunchesNext();

    try {
        let response = await axios({
            url: 'https://api.spacex.land/graphql/',
            method: "POST",
            data: {
                query: QUERY_PARAMS_LAUNCHERS
            }
        });
        return response?.data?.data;
    } catch (e) {
        console.log(e)
    }
};