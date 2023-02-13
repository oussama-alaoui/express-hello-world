exports.get_chat = async (req, res, next) => {
    res.render('./chat/contacts', { title: 'Chat' });
}

exports.get_contacts = async (req, res, next) => {
    res.render('./chat/selected-chat', { title: 'Chat' });
}