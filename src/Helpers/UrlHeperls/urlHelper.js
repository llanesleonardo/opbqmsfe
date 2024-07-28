

export const setPathValues = (location) =>{
    let { pathname, search, hash } = location;
    const pathId = pathname.split("/")[4];
    const pathName = pathname.split("/")[3];
    const pathAction = pathname.split("/")[5];
    const pathModule = pathname.split("/")[2];

    return {pathModule,pathName,pathId,pathAction};
};