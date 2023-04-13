

const getChattedUsers = ( dbUserConversation, userID) => {
    let data = [...new Set(dbUserConversation.map(dbU => dbU.userInvolve).flat())];
    data = data.filter(dbID => dbID !== userID)
    return data;
}


export {getChattedUsers}